import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
  popup: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
    }
  },
}));

export default function Profile() {
	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [friends, setFriends] = React.useState([]);
	const [addPopup, setAddPopup] = React.useState(false);
	const [addFriend, setAddFriend] = React.useState("");
	const [removePopup, setRemovePopup] = React.useState(false);
	const [removeFriend, setRemoveFriend] = React.useState("");
	const [errorMessage, setErrorMessage] = React.useState("");
	const classes = useStyles();


	const getAccountInfo = () => {
		if(email === ""){
			const account = localStorage.getItem("account");
			setEmail(JSON.parse(account).email)
			setUsername(JSON.parse(account).username)
			setFriends(JSON.parse(account).friends)
		}
	};

	const handleClickAddFriend = () => {
		setAddPopup(true);
	};

	const handleAddFriend = async () => {
		var params = {userEmail: email, friendEmail: addFriend}
    	var endpoint = "api/friend/add?"
    	var url = new URLSearchParams(params);

    	await fetch(endpoint + url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'}
		}).then(async response => {
			if(!response.ok)
			{
			  const err = await response.json()
			  setErrorMessage(err.message)
			} 
			else 
			{
			  var account = localStorage.getItem("account");
			  var accountJSON = await JSON.parse(account)
			  await accountJSON.friends.push(addFriend)
			  localStorage.setItem('account', JSON.stringify(accountJSON))
			  setAddPopup(false);
			  setAddFriend("");
			  window.location.reload(true);
			}
		})
		
	}

	const handleCloseAddPopup = () => {
		setAddPopup(false);
		setAddFriend("");
	};

	function setRemoveFriendState(friend) {
      setRemovePopup(true);
      setRemoveFriend(friend);
    }

    const handleCloseRemovePopup = () => {
    	setRemovePopup(false);
    	setRemoveFriend("");
	};

	const resetError = () => {
		setErrorMessage("")
	  }

	const handleRemoveFriend = async () => {
		var params = {userEmail: email, friendEmail: removeFriend}
    	var endpoint = "api/friend/remove?"
    	var url = new URLSearchParams(params);

    	await fetch(endpoint + url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'}
		}).then(async response => {
			if(!response.ok)
			{
			  const err = await response.json()
			  setErrorMessage(err.message)
			} 
			else 
			{
			  var account = localStorage.getItem("account");
			  var accountJSON = JSON.parse(account)
			  var index = accountJSON.friends.indexOf(removeFriend)
			  await accountJSON.friends.splice(index, 1)
			  localStorage.setItem('account', JSON.stringify(accountJSON))
			  setRemovePopup(false);
    		  setRemoveFriend("");
			  window.location.reload(true);
			}
		})
	};

    return (
    	<div className="app">
    		{getAccountInfo()}
            <h1> User: {username}</h1>
            <h4 color="textSecondary"> Email: {email}</h4>
            <TableContainer component={Paper}>
            	<div className="friends">
                	<Table aria-label="friends list">
                    	<TableHead>
                    		<TableRow>
                    			<TableCell align="left">Friends</TableCell>
                    			<TableCell></TableCell>
             					<TableCell></TableCell>
                    			<TableCell>
                    				<IconButton align="right" color="primary" size="large" onClick={handleClickAddFriend}>
              							<AddCircleOutlineIcon />
            						</IconButton>
            					</TableCell>
                    		</TableRow>
                    	</TableHead>
                    	<TableBody>
                    		{friends.map((friend) => (
            					<TableRow key={friend}>
              						<TableCell component="th" scope="row">
                						{friend}
             						</TableCell>
             						<TableCell></TableCell>
             						<TableCell></TableCell>
             						<TableCell>
             							<IconButton align="right" color="secondary" size="small" onClick={() => setRemoveFriendState(friend)}>
             								<RemoveCircleOutlineIcon />
                          				</IconButton>
             						</TableCell>
           						</TableRow>
       						))}
                    	</TableBody>
                	</Table>
            	</div>
            </TableContainer>
            <Dialog
            	open={addPopup}
            	onClose={handleCloseAddPopup}
            >
            <DialogTitle>{"Enter Friends Email"}</DialogTitle>
            	<form className={classes.popup} onSubmit={handleAddFriend}>
				{errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            		<TextField
            			autoFocus
                  		value={addFriend}
                  		onInput={ e => { resetError(); setAddFriend(e.target.value)}}
                  		margin="dense"
                  		name="email"
                  		id="runname"
                  		label="Add Friend"
                  		type="text"
                  		required={true}
                  		fullWidth
                  	/>
            	</form>
            	<Button onClick={handleCloseAddPopup} color="secondary">
                 	Cancel
                </Button>
                <Button onClick={handleAddFriend} color="primary">
                	Add
                </Button>
            </Dialog>
            <Dialog
            	open={removePopup}
            	onClose={handleCloseRemovePopup}
            	aria-labelledby="alert-dialog-title"
            	aria-describedby="alert-dialog-description"
          	>
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to remove this friend?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This will permenantly remove this friend from your friends list.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseRemovePopup} color="primary">
                Cancel
              </Button>
              <Button onClick={handleRemoveFriend} color="primary" autoFocus>
                Remove
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
}
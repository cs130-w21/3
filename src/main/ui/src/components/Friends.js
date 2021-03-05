import React from "react";
import SaveIcon from '@material-ui/icons/Save'
import ExerciseModal from './ExerciseModal'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getFriendsExercises as getAPIExercises, createExercise } from '../services/ExerciseServices';
import { getFriendsWorkouts as getAPIWorkouts, createWorkout } from '../services/WorkoutServices';
var hash = require('object-hash');

export default function Friends() {
    const [email, setEmail] = React.useState("");
    const [friends, setFriends] = React.useState([]);
    const [friendWorkouts, setFriendWorkouts] = React.useState({});
    const [friendExercises, setFriendExercises] = React.useState([]);
    const [savePopup, setSavePopup] = React.useState(false);
    const [workoutSaveId, setWorkoutSaveId] = React.useState(false);

    function findExercise(value) {
        
        for(const friend of friends)
        {
            if(friendExercises[friend] === undefined)
            {
                return
            }
            else
            {
                var returned = friendExercises[friend].find( ({ id }) => id === value );
                if(returned !== undefined)
                {
                    return returned
                }
            }
        }
    }

    async function getFriendsWorkouts (emails) {
        await getAPIWorkouts(emails)
        .then(response => {
            setFriendWorkouts(response)
     });
    }

    async function getFriendsExercises (emails) {
        await getAPIExercises(emails)
        .then(response => {
            setFriendExercises(response)
     });
    }

    function getAccountInfo () {
        if(email === "")
        {
            const account = localStorage.getItem("account");
            setEmail(JSON.parse(account).email)
            const currFriends = JSON.parse(account).friends
            setFriends(currFriends)
            getFriendsWorkouts(currFriends)
            getFriendsExercises(currFriends)
        }
    }

    function checkFriendWorkouts (friendEmail) {
        let fullHTML = []
        if(friendWorkouts[friendEmail] === undefined)
        {
            return
        }
        else
        {
            friendWorkouts[friendEmail].map((workout) => (
                fullHTML.push(<TableRow key={workout.id}>
                <TableCell>
                <IconButton color="secondary" aria-label="delete workout" size="small" onClick={() => saveWorkout(workout.id)}>
                    <SaveIcon />
                </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {workout.name}
                </TableCell>
                <TableCell align="right">{workout.exercises.map((exerciseID) => (
                    <ExerciseModal exercise={findExercise(exerciseID)} />
                ))}</TableCell>
                </TableRow>)
            ))
            return fullHTML
        }
    }
    
    function saveWorkout (id) {
        setSavePopup(true)
        setWorkoutSaveId(id)
    }

    function displayFriendWorkouts () {
        let fullHTML = []
        var i = 0
        if(friends !== null)
        {
            for(i = 0; i < friends.length; i++)
            {
                fullHTML.push(<div>
                    <h1>{friends[i]}</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="workout table">
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Workout</TableCell>
                            <TableCell align="right">Exercises</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        
                        {checkFriendWorkouts(friends[i])}
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                </div>)
            }
            return fullHTML
        }
        else
        {
            return <div className="friends"><h1>To add friends, go to the profile page!</h1></div> 
        }
    }

    const handleCloseSavePopup = () => {
        setSavePopup(false);
        setWorkoutSaveId("");
      };

    const handleSaveWorkout = () => {
        for(const friend of friends)
        {
                friendWorkouts[friend].forEach((workout) => {
                    if(workout.id === workoutSaveId)
                    {
                        var listOfExercises = []
                        workout.exercises.forEach((exerciseID) => {
                            friendExercises[friend].forEach((exercise) => {
                                if(exercise.id === exerciseID)
                                {
                                    var jsonobj;
                                    var hashed = hash(exercise.id)
                                    listOfExercises.push(hashed)
                                    if(exercise.exerciseType === "Run")
                                    {
                                        jsonobj = {
                                            "id": hashed,
                                            "userEmail": email,
                                            "name": exercise.name,
                                            "miles": exercise.miles,
                                            "exerciseType": "Run",
                                          }
                                        createExercise(jsonobj)
                                    }
                                    else
                                    {
                                        jsonobj = {
                                            "id": hashed,
                                            "userEmail": email,
                                            "name": exercise.name,
                                            "sets": exercise.sets,
                                            "reps": exercise.reps,
                                            "lbs": exercise.lbs,
                                            "exerciseType": "Weight",
                                          }
                                        createExercise(jsonobj)
                                    }
                                }
                            })
                        })
                        createWorkout({userEmail: email, exercises: listOfExercises, name: workout.name, daysOfWeek: workout.daysOfWeek})
                    }
                })
        }
        setSavePopup(false);
        setWorkoutSaveId("");
    }

    return (
        <div>
            {getAccountInfo()}
            <div className="tables">
                {displayFriendWorkouts()}
            </div>
            <Dialog
            open={savePopup}
            onClose={handleCloseSavePopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to save this workout?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This will add your friend's workout and corresponding exercises to your profile.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseSavePopup} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSaveWorkout} color="primary" autoFocus>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
}
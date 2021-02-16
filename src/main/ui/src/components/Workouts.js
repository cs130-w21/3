import React from "react";
import { getWeightExercises, getRunExercises, createExercise, deleteExercise, updateExercise} from '../services/ExerciseServices';
import { getWorkouts as getAPIWorkouts, createWorkout, deleteWorkout, updateWorkout} from '../services/WorkoutServices';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Calendar from './calendar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Chip from '@material-ui/core/Chip';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from '@material-ui/core/IconButton';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 750,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Workouts(props) {
    const [weightExercises, setWeightExercises] = React.useState([]);
    const [workouts, setWorkouts] = React.useState([]);
    const [runExercises, setRunExercises] = React.useState([]);
    const [populate, setPopulate] = React.useState(true);
    const [deletePopup, setDeletePopup] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState("");
    const [workoutDeletePopup, setWorkoutDeletePopup] = React.useState(false);
    const [workoutDeleteId, setWorkoutDeleteId] = React.useState("");
    const [updateRunPopup, setUpdateRunPopup] = React.useState(false);
    const [updateWeightPopup, setUpdateWeightPopup] = React.useState(false);
    const [updateId, setUpdateId] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [miles, setMiles] = React.useState(0);
    const [weightname, setWeightName] = React.useState("");
    const [runname, setRunName] = React.useState("");
    const [weight, setWeight] = React.useState(0);
    const [reps, setReps] = React.useState(0);
    const [sets, setSets] = React.useState(0);
    const classes = useStyles();

    const [openAddWorkout, setOpenAddWorkout] = React.useState(false);
    const [workoutname, setWorkoutName] = React.useState("");
    const [exerciseList, setExerciseList] = React.useState([]);
    const [openUpdateWorkout, setOpenUpdateWorkout] = React.useState(false);
    const [updateWorkoutId, setUpdateWorkoutId] = React.useState("");

    const [sunday, setSunday] = React.useState(false);
    const [monday, setMonday] = React.useState(false);
    const [tuesday, setTuesday] = React.useState(false);
    const [wednesday, setWednesday] = React.useState(false);
    const [thursday, setThursday] = React.useState(false);
    const [friday, setFriday] = React.useState(false);
    const [saturday, setSaturday] = React.useState(false);

    const populateExercises = () => {
        if(populate === true)
        {
          getWorkouts(props.email)
          getWeights(props.email);
          getRuns(props.email);
          setPopulate(false);
        }
      }

    const getWeights = (email) => {
        getWeightExercises(email)
            .then(response => {
                setWeightExercises(response);
        });
    }

    const getRuns = (email) => {
        getRunExercises(email)
            .then(response => {
                setRunExercises(response);
        });
    }

    const getWorkouts = (email) => {
      getAPIWorkouts(email)
          .then(response => {
              setWorkouts(response);
      });
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleCloseDeletePopup = () => {
      setDeletePopup(false);
      setWorkoutDeletePopup(false);
      setWorkoutDeleteId("");
      setDeleteId("");
    };

    const handleClickOpenAddWorkout = () => {
      setOpenAddWorkout(true);
    };

    const handleCloseAddWorkout = () => {
      setOpenAddWorkout(false);
      setSunday(false);
      setMonday(false);
      setTuesday(false);
      setWednesday(false);
      setThursday(false);
      setFriday(false);
      setSaturday(false);
      setWorkoutName("");
      setExerciseList([]);
    };

    const handleAddRun = () => {
      setOpen(false);
      var jsonobj = {
        "userEmail": props.email,
        "name": runname,
        "miles": miles,
        "exerciseType": "Run",
      }
      createExercise(jsonobj)
          .then(response => {
              getRuns(props.email)
      });
    };

    const handleAddWeights = () => {
      setOpen(false);
      var jsonobj = {
        "userEmail": props.email,
        "name": weightname,
        "sets": sets,
        "reps": reps,
        "lbs": weight,
        "exerciseType": "Weight",
      }
      createExercise(jsonobj)
          .then(response => {
              getWeights(props.email)
      });
    };

    const deleteDayFromWorkout = (event) => {
      console.log(event)
    }
    const handleAddWorkout = () => {
      setOpenAddWorkout(false);
      var daysOfWeek = [-1];
      if (sunday) { daysOfWeek.push(0); }
      if (monday) { daysOfWeek.push(1); }
      if (tuesday) { daysOfWeek.push(2); }
      if (wednesday) { daysOfWeek.push(3); }
      if (thursday) { daysOfWeek.push(4); }
      if (friday) { daysOfWeek.push(5); }
      if (saturday) { daysOfWeek.push(6); }
      createWorkout({userEmail: props.email, exercises: exerciseList, name: workoutname, daysOfWeek: daysOfWeek}).then( () => {getWorkouts(props.email)})
    };

    function findExercise(value) {
      const allexercises = weightExercises.concat(runExercises);
      return allexercises.find( ({ id }) => id === value );
    }

    function getExerciseName(value) {
        let exercise = findExercise(value)
        if (exercise) return exercise.name;
        return "";
    }

    const handleChangeExerciseList = (event) => {
      setExerciseList(event.target.value);
    };

    const handleDeleteExercise = () => {
      setDeletePopup(false);
      const allexercises = weightExercises.concat(runExercises);
      var exerciseToDelete = allexercises.find( ({ id }) => id === deleteId );
      console.log(exerciseToDelete);
      deleteExercise(exerciseToDelete).then( () => {
        getWeights(props.email);
        getRuns(props.email);
      })
    };

    const handleDeleteWorkout = () => {
      setWorkoutDeletePopup(false);
      var workoutToDelete = workouts.find( ({ id }) => id === workoutDeleteId );
      console.log(workoutToDelete);
      deleteWorkout(workoutToDelete).then( () => {
        getWorkouts(props.email)
      })
    };

    function setDeleteState(exercise_id) {
      setDeletePopup(true);
      setDeleteId(exercise_id);
    }

    function setWorkoutDeleteState(workout_id) {
      setWorkoutDeletePopup(true);
      setWorkoutDeleteId(workout_id);
    }

    const handleCloseUpdatePopup = () => {
      setUpdateRunPopup(false);
      setUpdateWeightPopup(false);
      setUpdateId("");
      setMiles(0);
      setWeightName("");
      setRunName("");
      setReps(0);
      setSets(0);
      setWeight(0);
    };

    const handleUpdateExercise = () => {
      setUpdateRunPopup(false);
      setUpdateWeightPopup(false);
      var exerciseToUpdate = findExercise(updateId);
      console.log(exerciseToUpdate);
      if(exerciseToUpdate.exerciseType === "Run"){
        var runobj = {
        "id":updateId,
        "userEmail":props.email,
        "name":runname,
        "miles":miles,
        "exerciseType":"Run"
         }
         updateExercise(runobj).then(response => {
               getRuns(props.email)
         });
         setRunName("");
         setMiles(0);
      }
      if(exerciseToUpdate.exerciseType === "Weight"){
        var weightobj = {
        "id":updateId,
        "userEmail":props.email,
        "name":weightname,
        "lbs":weight,
        "sets":sets,
        "reps":reps,
        "exerciseType":"Weight"
         }
      updateExercise(weightobj).then(response => {
          getWeights(props.email)
      });
        setWeightName("");
        setReps(0);
        setSets(0);
        setWeight(0);
      }
    };

    function setUpdateRunState(exercise_id) {
      setUpdateRunPopup(true);
      setUpdateId(exercise_id);
      var exerciseEdit = findExercise(exercise_id);
      setRunName(exerciseEdit.name);
      setMiles(exerciseEdit.miles);
    }

    function setUpdateWeightState(exercise_id) {
      setUpdateWeightPopup(true);
      setUpdateId(exercise_id);
      var exerciseEdit = findExercise(exercise_id);
      setWeightName(exerciseEdit.name);
      setReps(exerciseEdit.reps);
      setWeight(exerciseEdit.lbs);
      setSets(exerciseEdit.sets);
    }

    function setUpdateWorkoutState(workoutEdit) {
      setOpenUpdateWorkout(true);
      setUpdateWorkoutId(workoutEdit.id);
      setSunday(workoutEdit.daysOfWeek.includes(0));
      setMonday(workoutEdit.daysOfWeek.includes(1));
      setTuesday(workoutEdit.daysOfWeek.includes(2));
      setWednesday(workoutEdit.daysOfWeek.includes(3));
      setThursday(workoutEdit.daysOfWeek.includes(4));
      setFriday(workoutEdit.daysOfWeek.includes(5));
      setSaturday(workoutEdit.daysOfWeek.includes(6));
      setExerciseList(workoutEdit.exercises);
      setWorkoutName(workoutEdit.name);
    }

    const handleUpdateWorkout = () => {
      setOpenUpdateWorkout(false);
      var daysOfWeek = [-1];
      if (sunday) { daysOfWeek.push(0); }
      if (monday) { daysOfWeek.push(1); }
      if (tuesday) { daysOfWeek.push(2); }
      if (wednesday) { daysOfWeek.push(3); }
      if (thursday) { daysOfWeek.push(4); }
      if (friday) { daysOfWeek.push(5); }
      if (saturday) { daysOfWeek.push(6); }
      updateWorkout({id:updateWorkoutId, userEmail: props.email, exercises:exerciseList, name:workoutname, daysOfWeek:daysOfWeek}).then( () => {getWorkouts(props.email)});
      handleCloseAddWorkout();
      setUpdateWorkoutId("");
    };

    const handleCloseUpdateWorkout = () => {
      setOpenUpdateWorkout(false);
      handleCloseAddWorkout();
      setUpdateWorkoutId("");
    };

    return (
        <div className="app">
          <h1>Workouts {' '}
            <Button variant="outlined" color="primary" onClick={handleClickOpenAddWorkout}>
              Add Workout
            </Button>
          </h1>
            <Calendar workouts={workouts} removeEventFromCal={deleteDayFromWorkout} email={props.email}/>
            <div className="tables">
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
                    {workouts.map((workout) => (
                        <TableRow key={workout.id}>
                        <TableCell>
                          <IconButton color="secondary" aria-label="delete workout" size="small" onClick={() => setWorkoutDeleteState(workout.id)}>
                            <DeleteIcon />
                          </IconButton>
                          <IconButton color="black" aria-label="edit workout" size="small" onClick={() => setUpdateWorkoutState(workout)}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {workout.name}
                        </TableCell>
                        <TableCell align="right">{workout.exercises.map((exerciseID) => (
                            <div>
                                {getExerciseName(exerciseID)}
                            </div>
                        ))}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <h1>Exercises {'   '}
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Add Exercise
            </Button>
          </h1>
          <Dialog
            open={deletePopup}
            onClose={handleCloseDeletePopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this exercise?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This will permenantly delete this exercise from your profile.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeletePopup} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteExercise} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={workoutDeletePopup}
            onClose={handleCloseDeletePopup}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this workout?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                This will permenantly delete this workout from your profile.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeletePopup} color="primary">
                Cancel
              </Button>
              <Button onClick={handleDeleteWorkout} color="primary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={updateRunPopup}
            onClose={handleCloseUpdatePopup}
            aria-labelledby="alert-dialog-title"
          >
            <DialogTitle id="alert-dialog-title">{"Edit this exercise"}</DialogTitle>
              <form className={classes.popup} onSubmit={handleUpdateExercise}>
                <TextField
                  autoFocus
                  value={runname}
                  onInput={ e=>setRunName(e.target.value)}
                  margin="dense"
                  name="runname"
                  id="runname"
                  label="Exercise Name"
                  type="text"
                  required={false}
                  fullWidth
                />
                <TextField
                  value={miles}
                  onInput={ e=>setMiles(e.target.value)}
                  margin="dense"
                  name="miles"
                  id="miles"
                  label="Miles"
                  type="number"
                  required={false}
                  fullWidth
                />
                <Button onClick={handleCloseUpdatePopup} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleUpdateExercise} color="primary">
                  Edit
                </Button>
        </form>
          </Dialog>
          <Dialog
            open={updateWeightPopup}
            onClose={handleCloseUpdatePopup}
            aria-labelledby="alert-dialog-title"
          >
            <DialogTitle id="alert-dialog-title">{"Edit this exercise"}</DialogTitle>
              <form className={classes.popup} onSubmit={handleUpdateExercise}>
                <TextField
                  autoFocus
                  value={weightname}
                  onInput={ e=>setWeightName(e.target.value)}
                  margin="dense"
                  name="weightname"
                  id="weightname"
                  label="Exercise Name"
                  type="text"
                  required={false}
                  fullWidth
                />
                <TextField
                  value={weight}
                  onInput={ e=>setWeight(e.target.value)}
                  margin="dense"
                  name="weight"
                  id="weight"
                  label="Weight (lbs)"
                  type="number"
                  required={false}
                  fullWidth
                />
                <TextField
                  value={sets}
                  onInput={ e=>setSets(e.target.value)}
                  margin="dense"
                  name="sets"
                  id="sets"
                  label="Sets"
                  type="number"
                  required={false}
                  fullWidth
                />
                <TextField
                  value={reps}
                  onInput={ e=>setReps(e.target.value)}
                  margin="dense"
                  name="reps"
                  id="reps"
                  label="Reps"
                  type="number"
                  required={false}
                  fullWidth
                />
                <Button onClick={handleCloseUpdatePopup} color="secondary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Edit
                </Button>
        </form>
          </Dialog>
            {populateExercises()}
            <h2>Lifting</h2>
            <div className={classes.root}>
              <Dialog
                open={openAddWorkout}
                onClose={handleCloseAddWorkout}
                aria-labelledby="add-workout-title"
              >
                <form className={classes.popup} onSubmit={handleAddWorkout}>
                  <TextField
                    autoFocus
                    value={workoutname}
                    onInput={ e=>setWorkoutName(e.target.value)}
                    margin="dense"
                    name="workoutname"
                    id="workoutname"
                    label="Workout Name"
                    type="text"
                    required={true}
                    fullWidth
                  />
                  <p></p>
                  <p>What days of the week will you do this workout?</p>
                  <FormGroup row>
                    <FormControlLabel control={<Checkbox checked={sunday} onChange={(event) => {setSunday(event.target.checked);}}/>} label="Sunday"/>
                    <FormControlLabel control={<Checkbox checked={monday} onChange={(event) => {setMonday(event.target.checked);}}/>} label="Monday"/>
                    <FormControlLabel control={<Checkbox checked={tuesday} onChange={(event) => {setTuesday(event.target.checked);}}/>} label="Tuesday"/>
                    <FormControlLabel control={<Checkbox checked={wednesday} onChange={(event) => {setWednesday(event.target.checked);}}/>} label="Wednesday"/>
                    <FormControlLabel control={<Checkbox checked={thursday} onChange={(event) => {setThursday(event.target.checked);}}/>} label="Thursday"/>
                    <FormControlLabel control={<Checkbox checked={friday} onChange={(event) => {setFriday(event.target.checked);}}/>} label="Friday"/>
                    <FormControlLabel control={<Checkbox checked={saturday} onChange={(event) => {setSaturday(event.target.checked);}}/>} label="Saturday"/>
                  </FormGroup>
                  <FormGroup row>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="select-exercises-chip-label">Exercises</InputLabel>
                      <Select
                        labelId="select-exercises-chip-label"
                        id="select-exercises-chip"
                        multiple
                        value={exerciseList}
                        onChange={handleChangeExerciseList}
                        input={<Input id="select-exercises-chip" />}
                        required={true}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip key={value} label={findExercise(value).name} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {weightExercises.map((exercise) => (
                          <MenuItem key={exercise.id} value={exercise.id}>
                            {exercise.name}
                          </MenuItem>
                        ))}
                        {runExercises.map((exercise) => (
                          <MenuItem key={exercise.id} value={exercise.id}>
                            {exercise.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </FormGroup>
                  <Button onClick={handleCloseAddWorkout} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </form>
              </Dialog>
              <Dialog
                open={openUpdateWorkout}
                onClose={handleCloseUpdateWorkout}
                aria-labelledby="update-workout-title"
              >
                <form className={classes.popup} onSubmit={handleUpdateWorkout}>
                  <TextField
                    autoFocus
                    value={workoutname}
                    onInput={ e=>setWorkoutName(e.target.value)}
                    margin="dense"
                    name="workoutname"
                    id="workoutname"
                    label="Workout Name"
                    type="text"
                    fullWidth
                  />
                  <p></p>
                  <p>What days of the week will you do this workout?</p>
                  <FormGroup row>
                    <FormControlLabel control={<Checkbox checked={sunday} onChange={(event) => {setSunday(event.target.checked);}}/>} label="Sunday"/>
                    <FormControlLabel control={<Checkbox checked={monday} onChange={(event) => {setMonday(event.target.checked);}}/>} label="Monday"/>
                    <FormControlLabel control={<Checkbox checked={tuesday} onChange={(event) => {setTuesday(event.target.checked);}}/>} label="Tuesday"/>
                    <FormControlLabel control={<Checkbox checked={wednesday} onChange={(event) => {setWednesday(event.target.checked);}}/>} label="Wednesday"/>
                    <FormControlLabel control={<Checkbox checked={thursday} onChange={(event) => {setThursday(event.target.checked);}}/>} label="Thursday"/>
                    <FormControlLabel control={<Checkbox checked={friday} onChange={(event) => {setFriday(event.target.checked);}}/>} label="Friday"/>
                    <FormControlLabel control={<Checkbox checked={saturday} onChange={(event) => {setSaturday(event.target.checked);}}/>} label="Saturday"/>
                  </FormGroup>
                  <FormGroup row>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="select-exercises-chip-label">Exercises</InputLabel>
                      <Select
                        labelId="select-exercises-chip-label"
                        id="select-exercises-chip"
                        multiple
                        value={exerciseList}
                        onChange={handleChangeExerciseList}
                        input={<Input id="select-exercises-chip" />}
                        required={true}
                        renderValue={(selected) => (
                          <div className={classes.chips}>
                            {selected.map((value) => (
                              <Chip key={value} label={findExercise(value).name} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {weightExercises.map((exercise) => (
                          <MenuItem key={exercise.id} value={exercise.id}>
                            {exercise.name}
                          </MenuItem>
                        ))}
                        {runExercises.map((exercise) => (
                          <MenuItem key={exercise.id} value={exercise.id}>
                            {exercise.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </FormGroup>
                  <Button onClick={handleCloseUpdateWorkout} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Edit
                  </Button>
                </form>
              </Dialog>
            </div>
            <div className={classes.root}>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="add-exercise-title"
              >
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="add exercise tab form"
                  >
                    <Tab
                      label="Weights"
                      icon={<FitnessCenterIcon />}
                      {...a11yProps(0)}
                    />
                    <Tab label="Run" icon={<DirectionsRunIcon />} {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <form className={classes.root} onSubmit={handleAddWeights}>
                    <TextField
                      autoFocus
                      value={weightname}
                      onInput={ e=>setWeightName(e.target.value)}
                      margin="dense"
                      name="weightname"
                      id="weightname"
                      label="Exercise Name"
                      type="text"
                      required={true}
                      fullWidth
                    />
                    <TextField
                      value={weight}
                      onInput={ e=>setWeight(e.target.value)}
                      margin="dense"
                      name="weight"
                      id="weight"
                      label="Weight (lbs)"
                      type="number"
                      required={true}
                      fullWidth
                    />
                    <TextField
                      value={sets}
                      onInput={ e=>setSets(e.target.value)}
                      margin="dense"
                      name="sets"
                      id="sets"
                      label="Sets"
                      type="number"
                      required={true}
                      fullWidth
                    />
                    <TextField
                      value={reps}
                      onInput={ e=>setReps(e.target.value)}
                      margin="dense"
                      name="reps"
                      id="reps"
                      label="Reps"
                      type="number"
                      required={true}
                      fullWidth
                    />
                    <Button onClick={handleClose} color="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                  </form>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <form className={classes.root} onSubmit={handleAddRun}>
                    <TextField
                      autoFocus
                      value={runname}
                      onInput={ e=>setRunName(e.target.value)}
                      margin="dense"
                      name="runname"
                      id="runname"
                      label="Exercise Name"
                      type="text"
                      required={true}
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      value={miles}
                      onInput={ e=>setMiles(e.target.value)}
                      margin="dense"
                      name="miles"
                      id="miles"
                      label="Miles"
                      type="number"
                      required={true}
                      fullWidth
                    />
                    <Button onClick={handleClose} color="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                  </form>
                </TabPanel>
              </Dialog>
            </div>
            <div className="tables">
            <TableContainer component={Paper}>
                <Table aria-label="weight exercises table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="right">Weight (Lbs)</TableCell>
                        <TableCell align="right">Sets</TableCell>
                        <TableCell align="right">Reps</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {weightExercises.map((exercise) => (
                        <TableRow key={exercise.id}>
                        <TableCell>
                          <IconButton color="secondary" aria-label="delete exercise" size="small" onClick={() => setDeleteState(exercise.id)}>
                            <DeleteIcon />
                          </IconButton>
                          <IconButton color="black" aria-label="edit exercise" size="small" onClick={() => setUpdateWeightState(exercise.id)}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {exercise.name}
                        </TableCell>
                        <TableCell align="right">{exercise.lbs}</TableCell>
                        <TableCell align="right">{exercise.sets}</TableCell>
                        <TableCell align="right">{exercise.reps}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <h2>Running</h2>
            <div className="tables">
            <TableContainer component={Paper}>
                <Table aria-label="run exercises table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="right">Miles</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {runExercises.map((exercise) => (
                        <TableRow key={exercise.id}>
                        <TableCell>
                          <IconButton color="secondary" aria-label="delete exercise" size="small" onClick={() => setDeleteState(exercise.id)}>
                            <DeleteIcon />
                          </IconButton>
                          <IconButton color="black" aria-label="edit exercise" size="small" onClick={() => setUpdateRunState(exercise.id)}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {exercise.name}
                        </TableCell>
                        <TableCell align="right">{exercise.miles}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
}

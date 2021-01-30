import React from "react";
import { getWeightExercises, getRunExercises, createExercise /* deleteExercise, updateExercise*/} from '../services/ExerciseServices';
import { getWorkouts as getAPIWorkouts, /*createWorkout, deleteWorkout, updateWorkout*/} from '../services/WorkoutServices';
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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

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
  buttons: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function Workouts() {
    const [weightExercises, setWeightExercises] = React.useState([]);
    const [workouts, setWorkouts] = React.useState([]);
    const [runExercises, setRunExercises] = React.useState([]);
    const [populate, setPopulate] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [miles, setMiles] = React.useState(0);
    const [weightname, setWeightName] = React.useState("");
    const [runname, setRunName] = React.useState("");
    const [weight, setWeight] = React.useState(0);
    const [reps, setReps] = React.useState(0);
    const [sets, setSets] = React.useState(0);
    const classes = useStyles();

    const populateExercises = () => {
        if(populate === true)
        {
          //These are just examples of how to create event, remove them from this function
          //createWorkout({userEmail: "test@gmail.com", exercises: ["exerciseID1", "exerciseID2"], name: "Test Workout", daysOfWeek: [-1]}).then( () => {getWorkouts("test@gmail.com")})
          //deleteWorkout({id: "b9545696-9587-4907-86c9-80402914d23b", userEmail: "test@gmail.com", name: "Test Workout", exercises: ["exerciseID1", "exerciseID2"], daysOfWeek: [-1]}).then( () => {getWorkouts("test@gmail.com")})
          //updateWorkout({id: "49627d29-06fd-4b80-b9cd-d0a46d799c01", userEmail: "test@gmail.com", name: "Test Workout", exercises: ["exerciseID1","exerciseID2", "exerciseID3"], daysOfWeek: [-1]}).then( () => {getWorkouts("test@gmail.com")})
          //createExercise({userEmail: "test@gmail.com", workoutType: "Run", name: "Test", miles: 3.12}).then( () => {getRuns("test@gmail.com")})
          //createExercise({userEmail: "test@gmail.com", workoutType: "Weights", name: "Test", sets: 4, reps: 12, lbs: 40}).then( () => {getWeights("test@gmail.com")})
          //updateExercise({id: "9751f315-4e8e-414e-945d-023cd21925ba", userEmail: "test@gmail.com", name: "Test Night Run", miles: 10.0, workoutType: "Run"}).then( () => {getRuns("test@gmail.com")})
          //updateExercise({id: "ec5d2895-f639-432b-a9c4-866b43c443f5", userEmail: "test@gmail.com", name: "Test", lbs: 100, sets: 4, reps: 12, workoutType: "Weights"}).then( () => {getWeights("test@gmail.com")})
          //deleteExercise({id: "9751f315-4e8e-414e-945d-023cd21925ba", userEmail: "test@gmail.com", name: "Test Night Run", miles: 1.33, workoutType: "Run"}).then( () => {getRuns("test@gmail.com")})
          //deleteExercise({id: "ec5d2895-f639-432b-a9c4-866b43c443f5", userEmail: "test@gmail.com", name: "Test", lbs: 40, sets: 4, reps: 12, workoutType: "Weights"}).then( () => {getWeights("test@gmail.com")})
          getWorkouts("test@gmail.com")
          getWeights("test@gmail.com");
          getRuns("test@gmail.com");
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

    const handleAddRun = () => {
      setOpen(false);
      var jsonobj = {
        "userEmail":"test@gmail.com",
        "name":runname,
        "miles":miles,
        "exerciseType":"Run",
      }
      createExercise(jsonobj)
          .then(response => {
              console.log("success")
      });
    };

    const handleAddWeights = () => {
      setOpen(false);
      var jsonobj = {
        "userEmail":"test@gmail.com",
        "name":weightname,
        "sets":sets,
        "reps":reps,
        "lbs":weight,
        "exerciseType":"Weight",
      }
      createExercise(jsonobj)
          .then(response => {
              console.log("success")
      });
    };

    // Test data due to issues with my local build
    // If your .jar build doesn't connect to DDB, feel free to use following
    // test data - simply replace weightExercises in table with weightExerciseTestData
    // and same with runExercise
    /*
    const weightExerciseTestData = [{"id":"d7dba988-e445-4f62-9bb6-2890a6b304bb","userEmail":"test@gmail.com","name":"Test Arms","lbs":20,"sets":6,"reps":10,"workoutType":"Weights"}];
    const runExerciseTestData = [{"id":"abc","userEmail":"test@gmail.com","name":"Test","miles":2.5,"workoutType":"Run"}];

    function createWorkoutTestData(workout, exercises, d_o_w) {
        return { workout, exercises, d_o_w };
    }
    const workoutTestData = [
        createWorkoutTestData('Chest', ['Bench Press', 'Incline Dumbbell Press'], 'M, F'),
        createWorkoutTestData('Tris', ['Dips', 'Cable Pull'], 'M, F'),
        createWorkoutTestData('Legs', ['Squats', 'Lunges', 'RDLs'], 'Tu, Sa'),
        createWorkoutTestData('Back', ['Pull-Ups', 'Cable Rows', 'Bent-Over Rows'], 'Th, Su'),
        createWorkoutTestData('Bis', ['Dumbbell Curls', 'Curly-Bar Curls'], 'Th, Su'),
        createWorkoutTestData('Shoulders', ['Military Press', 'Ys and Ts'], 'W'),
        createWorkoutTestData('Abs', ['Circuit'], 'M, T, W, Th, F'),
    ];
    */

    return (
        <div>
          <div> test workouts </div>
          <div> {JSON.stringify(workouts)} </div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Add Exercise
          </Button>
            <h1>Workouts</h1>
            {populateExercises()}
            <h2>Lifting Weights</h2>
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
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                      Cancel
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
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                    <Button onClick={handleClose} color="secondary">
                      Cancel
                    </Button>
                  </form>
                </TabPanel>
              </Dialog>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="weight exercises table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="right">Weight (Lbs)</TableCell>
                        <TableCell align="right">Sets</TableCell>
                        <TableCell align="right">Reps</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {weightExercises.map((exercise) => (
                        <TableRow key={exercise.id}>
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
            <h2>Going for a Run</h2>
            <TableContainer component={Paper}>
                <Table aria-label="run exercises table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="right">Miles</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {runExercises.map((exercise) => (
                        <TableRow key={exercise.id}>
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
    );
}

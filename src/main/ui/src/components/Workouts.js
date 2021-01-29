import React from "react";
import { getWeightExercises, getRunExercises, /* deleteExercise, updateExercise, createExercise*/} from '../services/ExerciseServices';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Workouts() {
    const [weightExercises, setWeightExercises] = React.useState([]);
    const [runExercises, setRunExercises] = React.useState([]);
    const [populate, setPopulate] = React.useState(true);

    const populateExercises = () => {
        if(populate === true)
        {
          //These are just examples of how to create event, remove them from this function
          //createExercise({userEmail: "test@gmail.com", workoutType: "Run", name: "Test", miles: 3.12}).then( () => {getRuns("test@gmail.com")})
          //createExercise({userEmail: "test@gmail.com", workoutType: "Weights", name: "Test", sets: 4, reps: 12, lbs: 40}).then( () => {getWeights("test@gmail.com")})
          //updateExercise({id: "9751f315-4e8e-414e-945d-023cd21925ba", userEmail: "test@gmail.com", name: "Test Night Run", miles: 10.0, workoutType: "Run"}).then( () => {getRuns("test@gmail.com")})
          //updateExercise({id: "ec5d2895-f639-432b-a9c4-866b43c443f5", userEmail: "test@gmail.com", name: "Test", lbs: 100, sets: 4, reps: 12, workoutType: "Weights"}).then( () => {getWeights("test@gmail.com")})
          //deleteExercise({id: "9751f315-4e8e-414e-945d-023cd21925ba", userEmail: "test@gmail.com", name: "Test Night Run", miles: 1.33, workoutType: "Run"}).then( () => {getRuns("test@gmail.com")})
          //deleteExercise({id: "ec5d2895-f639-432b-a9c4-866b43c443f5", userEmail: "test@gmail.com", name: "Test", lbs: 40, sets: 4, reps: 12, workoutType: "Weights"}).then( () => {getWeights("test@gmail.com")})
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
            <h1>Workouts</h1>
            {populateExercises()}
            <h2>Lifting Weights</h2>
            <TableContainer component={Paper}>
                <Table aria-label="weight exercises table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Exercise</TableCell>
                        <TableCell align="right">Weight</TableCell>
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
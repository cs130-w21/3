import React from "react";
import { getWeightExercises, getRunExercises, /* deleteExercise, updateExercise, createExercise*/} from '../services/ExerciseServices'


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

    return (
        <div>
            <h1>Workouts go here</h1>
            {populateExercises()}
            <h2>Here are the Weights</h2>
            {JSON.stringify(weightExercises)}
            <h2>Here are the Runs</h2>
            {JSON.stringify(runExercises)}
        </div>
    );
}
import React from "react";
import { getWeightExercises, getRunExercises, /*createExercise*/} from '../services/ExerciseServices'


export default function Workouts() {
    const [weightExercises, setWeightExercises] = React.useState([]);
    const [runExercises, setRunExercises] = React.useState([]);
    const [populate, setPopulate] = React.useState(true);

    const populateExercises = () => {
        if(populate === true)
        {
          //These are just examples of how to create event, remove them from this function
          //createExercise({userEmail: "test@gmail.com", workoutType: "Run", name: "Test", miles: 3.12})
          //createExercise({userEmail: "test@gmail.com", workoutType: "Weights", name: "Test", sets: 4, reps: 12, lbs: 40})
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
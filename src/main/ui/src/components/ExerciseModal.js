import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function getPopoverInfo(exercise) {
    if (exercise.exerciseType === 'Weight') {
        return (
            <Typography>{`Weight: ${exercise.lbs} | Sets: ${exercise.sets} | Reps: ${exercise.reps}`}</Typography>
        );
    }

    if (exercise.exerciseType === 'Run') {
        return (
            <Typography>{`Miles: ${exercise.miles}`}</Typography>
        );
    }

    return (
        <Typography>{`Exercise type not recognized.`}</Typography>
    );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function ExerciseModal(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  if (! props.exercise) {
      return null;
  }

  const exerciseID = props.exercise.id;
  const exerciseName = props.exercise.name;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button aria-describedby={exerciseID} color="primary" onClick={handlePopoverOpen}>
        {exerciseName}
      </Button>
      <Popover
        id={exerciseID}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {getPopoverInfo(props.exercise)}
      </Popover>
    </div>
  );
}
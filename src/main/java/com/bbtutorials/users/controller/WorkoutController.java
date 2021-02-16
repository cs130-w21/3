package com.bbtutorials.users.controller;

import com.bbtutorials.users.dao.WorkoutDao;
import com.bbtutorials.users.model.Workout;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * The class used as the REST controller for workouts.
 * The WorkoutDao object is autowired in as a singleton to
 * ensure the proper credentials are used each time an API is
 * called.
 *
 * For more information on the specific API calls, see the WorkoutDao
 * class. This class mainly serves as the HTTP API gateway and logger.
 *
 * @author Mark Farber
 */
@Slf4j
@RestController
@RequestMapping("/api/")
public class WorkoutController {

    @Autowired
    private WorkoutDao workoutDao;

    @GetMapping(path = "/workouts")
    @ResponseBody
    public List<Workout> getWorkouts(@RequestParam String userEmail) {
        log.info("WorkoutController: get workouts");
        return workoutDao.getWorkouts(userEmail);
    }

    @PostMapping(path = "/workout/create")
    @ResponseBody
    public void createWorkout(@RequestBody Workout workout) {
        log.info("WorkoutController: create workout");
        workoutDao.putWorkout(workout);
    }

    @PostMapping(path = "/workout/update")
    @ResponseBody
    public void updateWorkout(@RequestBody Workout workout) {
        log.info("WorkoutController: update workout");
        workoutDao.updateWorkout(workout);
    }

    @PostMapping(path = "/workout/delete")
    @ResponseBody
    public void deleteWorkout(@RequestBody Workout workout) {
        log.info("WorkoutController: delete workout");
        workoutDao.removeWorkout(workout);
    }

}

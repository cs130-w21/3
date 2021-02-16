package com.bbtutorials.users.controller;

import com.bbtutorials.users.dao.RunExerciseDao;
import com.bbtutorials.users.dao.WeightExerciseDao;
import com.bbtutorials.users.model.ExerciseRun;
import com.bbtutorials.users.model.ExerciseWeight;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * The class used as the REST controller for exercises (both types).
 * The DAO objects are autowired in as singletons to
 * ensure the proper credentials are used each time an API is
 * called.
 *
 * For more information on the specific API calls, see the WeightExerciseDao
 * and RunExerciseDao classes. This class mainly serves as the HTTP API
 * gateway and logger.
 *
 * @author Mark Farber
 */
@Slf4j
@RestController
@RequestMapping("/api/")
public class ExerciseController {

    @Autowired
    private WeightExerciseDao weightExerciseDao;

    @Autowired
    private RunExerciseDao runExerciseDao;

    @GetMapping(path = "/runs")
    @ResponseBody
    public List<ExerciseRun> getRunExercises(@RequestParam String userEmail) {
        log.info("ExerciseController: get run exercises");
        return runExerciseDao.getRunExercises(userEmail);
    }

    @GetMapping(path = "/weights")
    @ResponseBody
    public List<ExerciseWeight> getWeightExercises(@RequestParam String userEmail) {
        log.info("ExerciseController: get weight exercises");
        return weightExerciseDao.getWeightExercises(userEmail);
    }

    @PostMapping(path = "/run/create")
    @ResponseBody
    public void createRunExercise(@RequestBody ExerciseRun exercise) {
        log.info("ExerciseController: create run exercise");
        runExerciseDao.putRunExercise(exercise);
    }

    @PostMapping(path = "/weight/create")
    @ResponseBody
    public void createWeightExercise(@RequestBody ExerciseWeight exercise) {
        log.info("ExerciseController: create weight exercise");
        weightExerciseDao.putWeightExercise(exercise);
    }

    @PostMapping(path = "/run/update")
    @ResponseBody
    public void updateRunExercise(@RequestBody ExerciseRun exercise) {
        log.info("ExerciseController: update run exercise");
        runExerciseDao.updateRunExercise(exercise);
    }

    @PostMapping(path = "/weight/update")
    @ResponseBody
    public void updateWeightExercise(@RequestBody ExerciseWeight exercise) {
        log.info("ExerciseController: update weight exercise");
        weightExerciseDao.updateWeightExercise(exercise);
    }

    @PostMapping(path = "/run/delete")
    @ResponseBody
    public void deleteRunExercise(@RequestBody ExerciseRun exercise) {
        log.info("ExerciseController: delete run exercise");
        runExerciseDao.removeRunExercise(exercise);
    }

    @PostMapping(path = "/weight/delete")
    @ResponseBody
    public void deleteWeightExercise(@RequestBody ExerciseWeight exercise) {
        log.info("ExerciseController: delete weight exercise");
        weightExerciseDao.removeWeightExercise(exercise);
    }

}

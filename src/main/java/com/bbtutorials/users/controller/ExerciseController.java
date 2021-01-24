package com.bbtutorials.users.controller;

import com.bbtutorials.users.dao.RunExerciseDao;
import com.bbtutorials.users.dao.WeightExerciseDao;
import com.bbtutorials.users.model.ExerciseRun;
import com.bbtutorials.users.model.ExerciseWeight;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        log.info("ExerciseController: get run exercises");
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

}

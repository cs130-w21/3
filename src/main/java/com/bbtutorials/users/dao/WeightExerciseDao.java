package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.bbtutorials.users.model.ExerciseRun;
import com.bbtutorials.users.model.ExerciseWeight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class WeightExerciseDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public WeightExerciseDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    public List<ExerciseWeight> getWeightExercises(String userEmail) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":val1", new AttributeValue().withS(userEmail));
        eav.put(":val2", new AttributeValue().withS("Weights"));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("UserEmail = :val1 and WorkoutType = :val2").withExpressionAttributeValues(eav);

        return mapper.scan(ExerciseWeight.class, scanExpression);
    }

    public void putWeightExercise(ExerciseWeight exercise) {
        mapper.save(exercise);
    }

}

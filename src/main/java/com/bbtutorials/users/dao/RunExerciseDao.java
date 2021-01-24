package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.bbtutorials.users.model.ExerciseRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class RunExerciseDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public RunExerciseDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    public List<ExerciseRun> getRunExercises(String userEmail) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":val1", new AttributeValue().withS(userEmail));
        eav.put(":val2", new AttributeValue().withS("Run"));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("UserEmail = :val1 and WorkoutType = :val2").withExpressionAttributeValues(eav);

        return mapper.scan(ExerciseRun.class, scanExpression);
    }

}

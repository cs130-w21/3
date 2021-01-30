package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.bbtutorials.users.model.Workout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class WorkoutDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public WorkoutDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    public List<Workout> getWorkouts(String userEmail) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":val1", new AttributeValue().withS(userEmail));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("UserEmail = :val1").withExpressionAttributeValues(eav);

        return mapper.scan(Workout.class, scanExpression);
    }

    public void putWorkout(Workout workout) {
        mapper.save(workout);
    }

    public void updateWorkout(Workout workout) {
        DynamoDBMapperConfig dynamoDBMapperConfig = new DynamoDBMapperConfig.Builder()
                .withConsistentReads(DynamoDBMapperConfig.ConsistentReads.CONSISTENT)
                .withSaveBehavior(DynamoDBMapperConfig.SaveBehavior.UPDATE)
                .build();
        mapper.save(workout, dynamoDBMapperConfig);
    }

    public void removeWorkout(Workout workout) { mapper.delete(workout); }
}

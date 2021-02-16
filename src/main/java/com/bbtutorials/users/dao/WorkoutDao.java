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

/**
 * The class used to interact with DynamoDB for workouts.
 * The DynamoDBMapper object is autowired in as a singleton to
 * ensure the proper credentials are used each time an API is
 * called.
 *
 * @author Mark Farber
 */
@Component
public class WorkoutDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public WorkoutDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    /**
     * Returns a list of workouts contained by the user
     * corresponding to their email address, which must be in
     * the form of [ALIAS]@[SERVER].[EXTENSION]. When the user has
     * no workouts, an empty list is returned.
     * @param userEmail the user's email address
     * @return list of workouts for user
     */
    public List<Workout> getWorkouts(String userEmail) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":val1", new AttributeValue().withS(userEmail));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("UserEmail = :val1").withExpressionAttributeValues(eav);

        return mapper.scan(Workout.class, scanExpression);
    }

    /**
     * Saves the workout specified by the workout argument
     * to the DynamoDB table.
     * @param workout the new run exercise to save
     */
    public void putWorkout(Workout workout) {
        mapper.save(workout);
    }

    /**
     * Updates the workout specified by the workout argument
     * in the DynamoDB table. DynamoDB uses the key Id field to check
     * if an item already exists with that key, and if so uses the
     * behavior specified in the configuration to update the other item
     * fields.
     * @param workout the workout to be updated
     */
    public void updateWorkout(Workout workout) {
        DynamoDBMapperConfig dynamoDBMapperConfig = new DynamoDBMapperConfig.Builder()
                .withConsistentReads(DynamoDBMapperConfig.ConsistentReads.CONSISTENT)
                .withSaveBehavior(DynamoDBMapperConfig.SaveBehavior.UPDATE)
                .build();
        mapper.save(workout, dynamoDBMapperConfig);
    }

    /**
     * Removes the workout specified by the workout argument
     * from the DynamoDB table.
     * @param workout the run exercise to be removed
     */
    public void removeWorkout(Workout workout) { mapper.delete(workout); }
}

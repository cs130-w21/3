package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.bbtutorials.users.model.ExerciseRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * The class used to interact with DynamoDB for run exercises.
 * The DynamoDBMapper object is autowired in as a singleton to
 * ensure the proper credentials are used each time an API is
 * called.
 *
 * @author Mark Farber
 */
@Component
public class RunExerciseDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public RunExerciseDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    /**
     * Returns a list of run exercises contained by the user
     * corresponding to their email address, which must be in
     * the form of [ALIAS]@[SERVER].[EXTENSION]. When the user has
     * no run exercises, an empty list is returned.
     * @param userEmail the user's email address
     * @return list of run exercises for user
     */
    public List<ExerciseRun> getRunExercises(String userEmail) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":val1", new AttributeValue().withS(userEmail));
        eav.put(":val2", new AttributeValue().withS("Run"));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("UserEmail = :val1 and ExerciseType = :val2").withExpressionAttributeValues(eav);

        return mapper.scan(ExerciseRun.class, scanExpression);
    }

    /**
     * Saves the run exercise specified by the exercise argument
     * to the DynamoDB table.
     * @param exercise the new run exercise to save
     */
    public void putRunExercise(ExerciseRun exercise) {
        mapper.save(exercise);
    }

    /**
     * Updates the run exercise specified by the exercise argument
     * in the DynamoDB table. DynamoDB uses the key Id field to check
     * if an item already exists with that key, and if so uses the
     * behavior specified in the configuration to update the other item
     * fields.
     * @param exercise the run exercise to be updated
     */
    public void updateRunExercise(ExerciseRun exercise) {
        DynamoDBMapperConfig dynamoDBMapperConfig = new DynamoDBMapperConfig.Builder()
                .withConsistentReads(DynamoDBMapperConfig.ConsistentReads.CONSISTENT)
                .withSaveBehavior(DynamoDBMapperConfig.SaveBehavior.UPDATE)
                .build();
        mapper.save(exercise, dynamoDBMapperConfig);
    }

    /**
     * Removes the run exercise specified by the exercise argument
     * from the DynamoDB table.
     * @param exercise the run exercise to be removed
     */
    public void removeRunExercise(ExerciseRun exercise) { mapper.delete(exercise); }
}

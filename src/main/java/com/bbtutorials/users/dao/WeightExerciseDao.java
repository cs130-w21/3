package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.bbtutorials.users.model.ExerciseWeight;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * The class used to interact with DynamoDB for weight exercises.
 * The DynamoDBMapper object is autowired in as a singleton to
 * ensure the proper credentials are used each time an API is
 * called.
 *
 * @author Mark Farber
 */
@Component
public class WeightExerciseDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public WeightExerciseDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    /**
     * Returns a list of weight exercises contained by the user
     * corresponding to their email address, which must be in
     * the form of [ALIAS]@[SERVER].[EXTENSION]. When the user has
     * no weight exercises, an empty list is returned.
     * @param userEmail the user's email address
     * @return list of weight exercises for user
     */
    public List<ExerciseWeight> getWeightExercises(String userEmail) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":val1", new AttributeValue().withS(userEmail));
        eav.put(":val2", new AttributeValue().withS("Weight"));

        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression()
                .withFilterExpression("UserEmail = :val1 and ExerciseType = :val2").withExpressionAttributeValues(eav);

        return mapper.scan(ExerciseWeight.class, scanExpression);
    }

    /**
     * Saves the weight exercise specified by the exercise argument
     * to the DynamoDB table.
     * @param exercise the new weight exercise to save
     */
    public void putWeightExercise(ExerciseWeight exercise) {
        mapper.save(exercise);
    }

    /**
     * Updates the weight exercise specified by the exercise argument
     * in the DynamoDB table. DynamoDB uses the key Id field to check
     * if an item already exists with that key, and if so uses the
     * behavior specified in the configuration to update the other item
     * fields.
     * @param exercise the weight exercise to be updated
     */
    public void updateWeightExercise(ExerciseWeight exercise) {
        DynamoDBMapperConfig dynamoDBMapperConfig = new DynamoDBMapperConfig.Builder()
                .withConsistentReads(DynamoDBMapperConfig.ConsistentReads.CONSISTENT)
                .withSaveBehavior(DynamoDBMapperConfig.SaveBehavior.UPDATE)
                .build();
        mapper.save(exercise, dynamoDBMapperConfig);
    }

    /**
     * Removes the weight exercise specified by the exercise argument
     * from the DynamoDB table.
     * @param exercise the weight exercise to be removed
     */
    public void removeWeightExercise(ExerciseWeight exercise) { mapper.delete(exercise); }
}

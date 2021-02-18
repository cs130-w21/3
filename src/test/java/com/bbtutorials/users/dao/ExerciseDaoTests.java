package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.local.embedded.DynamoDBEmbedded;
import com.amazonaws.services.dynamodbv2.model.*;
import com.bbtutorials.users.model.ExerciseRun;
import com.bbtutorials.users.model.ExerciseWeight;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class ExerciseDaoTests {
    private static AmazonDynamoDB amazonDynamoDB;
    private static DynamoDBMapper mapper;
    private static WeightExerciseDao weightExerciseDao;
    private static RunExerciseDao runExerciseDao;

    private final String testEmail = "test@test.com";
    private final String testWeightName = "Test Weight";
    private final Integer testLbs = 20;
    private final Integer testSets = 5;
    private final Integer testReps = 10;
    private final String testWeightType = "Weight";

    private final String testRunName = "Test Run";
    private final Double testMiles = 2.5;
    private final String testRunType = "Run";

    @BeforeClass
    public static void setup() {
        System.setProperty("sqlite4java.library.path", "native-libs");

        amazonDynamoDB = DynamoDBEmbedded.create().amazonDynamoDB();//dynamoDB.getAmazonDynamoDB();
        mapper = new DynamoDBMapper(amazonDynamoDB);

        amazonDynamoDB.createTable(new CreateTableRequest()
                .withTableName("Exercises")
                .withKeySchema(new KeySchemaElement().withAttributeName("Id").withKeyType(KeyType.HASH))
                .withAttributeDefinitions(
                        new AttributeDefinition().withAttributeName("Id").withAttributeType(ScalarAttributeType.S))
                .withProvisionedThroughput(new ProvisionedThroughput(5L, 5L))
        );

        weightExerciseDao = new WeightExerciseDao(mapper);
        runExerciseDao = new RunExerciseDao(mapper);
    }

    public ExerciseWeight createTestWeightExercise() {
        ExerciseWeight test = new ExerciseWeight();
        test.setUserEmail(testEmail);
        test.setName(testWeightName);
        test.setLbs(testLbs);
        test.setSets(testSets);
        test.setReps(testReps);
        test.setExerciseType(testWeightType);

        return test;
    }

    public ExerciseRun createTestRunExercise() {
        ExerciseRun test = new ExerciseRun();
        test.setUserEmail(testEmail);
        test.setName(testRunName);
        test.setMiles(testMiles);
        test.setExerciseType(testRunType);

        return test;
    }

    @Test
    public void testPutGetDeleteBothExerciseTypes() {
        weightExerciseDao.putWeightExercise(createTestWeightExercise());
        runExerciseDao.putRunExercise(createTestRunExercise());

        List<ExerciseWeight> resWeight = weightExerciseDao.getWeightExercises(testEmail);
        List<ExerciseRun> resRun = runExerciseDao.getRunExercises(testEmail);

        assertEquals(1, resRun.size());
        assertEquals(1, resWeight.size());

        weightExerciseDao.removeWeightExercise(resWeight.get(0));

        resWeight = weightExerciseDao.getWeightExercises(testEmail);
        resRun = runExerciseDao.getRunExercises(testEmail);

        assertTrue(resWeight.isEmpty());
        assertEquals(1, resRun.size());

        runExerciseDao.removeRunExercise(resRun.get(0));
        resRun = runExerciseDao.getRunExercises(testEmail);

        assertTrue(resRun.isEmpty());
    }

    @AfterClass
    public static void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}

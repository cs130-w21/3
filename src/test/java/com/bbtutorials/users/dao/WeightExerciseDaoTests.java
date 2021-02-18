package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.local.embedded.DynamoDBEmbedded;
import com.amazonaws.services.dynamodbv2.model.*;
import com.bbtutorials.users.model.ExerciseWeight;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class WeightExerciseDaoTests {
    private static AmazonDynamoDB amazonDynamoDB;
    private static DynamoDBMapper mapper;
    private static WeightExerciseDao dao;

    private final String testEmail = "test@test.com";
    private final String testName = "Test Weight";
    private final Integer testLbs = 20;
    private final Integer testSets = 5;
    private final Integer testReps = 10;
    private final String testType = "Weight";

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

        dao = new WeightExerciseDao(mapper);
    }

    public ExerciseWeight createTestWeightExercise() {
        ExerciseWeight test = new ExerciseWeight();
        test.setUserEmail(testEmail);
        test.setName(testName);
        test.setLbs(testLbs);
        test.setSets(testSets);
        test.setReps(testReps);
        test.setExerciseType(testType);

        return test;
    }

    @Test
    public void testPutGetDeleteOneWeightExercise() {
        dao.putWeightExercise(createTestWeightExercise());

        List<ExerciseWeight> res = dao.getWeightExercises(testEmail);

        assertEquals(1, res.size());
        assertEquals(testName, res.get(0).getName());
        assertEquals(testLbs, res.get(0).getLbs());
        assertEquals(testSets, res.get(0).getSets());
        assertEquals(testReps, res.get(0).getReps());

        dao.removeWeightExercise(res.get(0));

        res = dao.getWeightExercises(testEmail);

        assertTrue(res.isEmpty());
    }

    @Test
    public void testGetMultipleWeightExercise() {
        dao.putWeightExercise(createTestWeightExercise());
        ExerciseWeight test1 = createTestWeightExercise();
        test1.setName("Test Weight 2");

        dao.putWeightExercise(test1);

        List<ExerciseWeight> res = dao.getWeightExercises(testEmail);

        assertEquals(2, res.size());

        for (ExerciseWeight toRemove : res) {
            dao.removeWeightExercise(toRemove);
        }
    }

    @Test
    public void testUpdateWeightExercise() {
        dao.putWeightExercise(createTestWeightExercise());

        List<ExerciseWeight> res = dao.getWeightExercises(testEmail);

        ExerciseWeight toUpdate = res.get(0);
        toUpdate.setReps(15);

        dao.updateWeightExercise(toUpdate);

        res = dao.getWeightExercises(testEmail);

        assertEquals(15, res.get(0).getReps(),0);
    }

    @AfterClass
    public static void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}


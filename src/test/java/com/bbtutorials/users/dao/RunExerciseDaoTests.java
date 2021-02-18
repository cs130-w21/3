package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.local.embedded.DynamoDBEmbedded;
import com.amazonaws.services.dynamodbv2.model.*;
import com.bbtutorials.users.model.ExerciseRun;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

public class RunExerciseDaoTests {
    private static AmazonDynamoDB amazonDynamoDB;
    private static DynamoDBMapper mapper;
    private static RunExerciseDao dao;

    private final String testEmail = "test@test.com";
    private final String testName = "Test Run";
    private final Double testMiles = 2.5;
    private final String testType = "Run";

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

        dao = new RunExerciseDao(mapper);
    }

    public ExerciseRun createTestRunExercise() {
        ExerciseRun test = new ExerciseRun();
        test.setUserEmail(testEmail);
        test.setName(testName);
        test.setMiles(testMiles);
        test.setExerciseType(testType);

        return test;
    }

    @Test
    public void testPutGetDeleteOneRunExercise() {
        dao.putRunExercise(createTestRunExercise());

        List<ExerciseRun> res = dao.getRunExercises(testEmail);

        assertEquals(1, res.size());
        assertEquals(testName, res.get(0).getName());
        assertEquals(testMiles, res.get(0).getMiles());

        dao.removeRunExercise(res.get(0));

        res = dao.getRunExercises(testEmail);

        assertTrue(res.isEmpty());
    }

    @Test
    public void testGetMultipleRunExercise() {
        dao.putRunExercise(createTestRunExercise());
        ExerciseRun test1 = createTestRunExercise();
        test1.setName("Test Run 2");

        dao.putRunExercise(test1);

        List<ExerciseRun> res = dao.getRunExercises(testEmail);

        assertEquals(2, res.size());

        for (ExerciseRun toRemove : res) {
            dao.removeRunExercise(toRemove);
        }
    }

    @Test
    public void testUpdateRunExercise() {
        dao.putRunExercise(createTestRunExercise());

        List<ExerciseRun> res = dao.getRunExercises(testEmail);

        ExerciseRun toUpdate = res.get(0);
        toUpdate.setMiles(3.5);

        dao.updateRunExercise(toUpdate);

        res = dao.getRunExercises(testEmail);

        assertEquals(3.5, res.get(0).getMiles(), 0);
    }

    @AfterClass
    public static void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}

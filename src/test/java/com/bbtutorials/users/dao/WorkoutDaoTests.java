package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.local.embedded.DynamoDBEmbedded;
import com.amazonaws.services.dynamodbv2.model.*;
import com.bbtutorials.users.model.Workout;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import java.util.List;
import java.util.Set;

import static org.junit.Assert.*;

public class WorkoutDaoTests {
    private static AmazonDynamoDB amazonDynamoDB;
    private static DynamoDBMapper mapper;
    private static WorkoutDao workoutDao;


    private final String testEmail = "test@mail.com";
    private final String testName = "Name";
    private final String testId = "test";

    @BeforeClass
    public static void setup() {
        System.setProperty("sqlite4java.library.path", "native-libs");

        amazonDynamoDB = DynamoDBEmbedded.create().amazonDynamoDB();//dynamoDB.getAmazonDynamoDB();
        mapper = new DynamoDBMapper(amazonDynamoDB);

        amazonDynamoDB.createTable(new CreateTableRequest()
                .withTableName("Workouts")
                .withKeySchema(new KeySchemaElement().withAttributeName("Id").withKeyType(KeyType.HASH))
                .withAttributeDefinitions(
                        new AttributeDefinition().withAttributeName("Id").withAttributeType(ScalarAttributeType.S))
                .withProvisionedThroughput(new ProvisionedThroughput(5L, 5L))
        );

        workoutDao = new WorkoutDao(mapper);
    }

    public Workout createWorkout() {
        Workout testWorkout = new Workout();
        testWorkout.setId(testEmail);
        testWorkout.setUserEmail(testWeightName);
        testWorkout.setName(testLbs);
        
        Set<String> testExer = new HashSet<String>();
        Set<Integer> testDays = new HashSet<Integer>();
        
        testExer.add("testexcercise1");
        testExer.add("testexcercise2");
        testWorkout.setExercises(testExer);
        
        testDays.add(1);
        testDays.add(2);
        testWorkout.setDaysOfWeek(testDays);

        return testWorkout;
    }


    @Test
    public void testPutGetRemoveWorkout() {
        workoutDao.putWorkout(createWorkout());

        List<Workout> workouts = workoutDao.getWorkouts(testEmail);
        
        Set<Integer> checkDays = workouts.get(0).getDaysOfWeek();
        Set<String> checkExer = workouts.get(0).getExcercises();
        
        assertEquals(1, workouts.size());
        assertEquals(testName, workouts.get(0).getName());
        assertEquals(testId, workouts.get(0).getId());
        assertEquals(testEmail, workouts.get(0).getUserEmail());
        assertEquals(2, checkDays.size());
        assertEquals(2, checkExer.size());

        workoutDao.removeWorkout(workouts.get(0));

        workouts = workoutDao.getWorkouts(testEmail);

        assertTrue(workouts.isEmpty());
    }

    @Test
    public void testMultipleWorkouts() {
        workoutDao.putWorkout(createWorkout());
        Workout second = createWorkout();
        String newID = "newID";
        second.setId(newID);

        workoutDao.putWorkout(second);

        List<Workout> workouts = workoutDao.getWorkouts(testEmail);
        
        assertEquals(newID, workouts.get(1).getId());

        assertEquals(2, workouts.size());
        
        for (Workout toRemove : workouts) {
            workoutDao.removeWorkout(toRemove);
        }
    }

    @Test
    public void testUpdateWorkout() {
        workoutDao.putWorkout(createWorkout());

        List<Workout> workouts = workoutDao.getWorkouts(testEmail);
        String updatedID = "UpdatedID";
        
        Workout updatedWorkout = workouts.get(0);
        updatedWorkout.setId(updatedID);

        workoutDao.updateWorkout(updatedWorkout);

        workouts = workoutDao.getWorkouts(testEmail);

        assertEquals(updatedID, workouts.get(0).getId());
    }


    @AfterClass
    public static void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}

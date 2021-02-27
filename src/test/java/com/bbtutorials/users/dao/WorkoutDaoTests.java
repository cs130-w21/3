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
import java.util.HashSet;

import static org.junit.Assert.*;

public class WorkoutDaoTests {
    private static AmazonDynamoDB amazonDynamoDB;
    private static DynamoDBMapper mapper;
    private static WorkoutDao workoutDao;


    private final String testEmail = "test@mail.com";
    private final String testName = "Name";


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

        testWorkout.setUserEmail(testEmail);
        testWorkout.setName(testName);
        
        Set<String> testExer = new HashSet<String>();
        Set<Integer> testDays = new HashSet<Integer>();
        
        testExer.add("testexercise1");
        testExer.add("testexercise2");
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
        Set<String> checkExer = workouts.get(0).getExercises();
        assertEquals(1, workouts.size());
        assertEquals(testName, workouts.get(0).getName());

        assertEquals(testEmail, workouts.get(0).getUserEmail());
        assertEquals(2, checkDays.size());
        assertEquals(2, checkExer.size());
        assertEquals(checkDays, workouts.get(0).getDaysOfWeek());
        assertEquals(checkExer, workouts.get(0).getExercises());
        
        workoutDao.removeWorkout(workouts.get(0));

        workouts = workoutDao.getWorkouts(testEmail);

        assertTrue(workouts.isEmpty());
    }

    @Test
    public void testMultipleWorkouts() {
        workoutDao.putWorkout(createWorkout());
        Workout second = createWorkout();

        workoutDao.putWorkout(second);

        List<Workout> workouts = workoutDao.getWorkouts(testEmail);
        

        assertEquals(2, workouts.size());
        
        for (Workout toRemove : workouts) {
            workoutDao.removeWorkout(toRemove);
        }
    }

    @Test
    public void testUpdateWorkout() {
        workoutDao.putWorkout(createWorkout());

        List<Workout> workouts = workoutDao.getWorkouts(testEmail);
        Set<Integer> testDays2 = new HashSet<Integer>();
        
        testDays2.add(3);
        testDays2.add(4);
        
        Workout updatedWorkout = workouts.get(0);
        updatedWorkout.setDaysOfWeek(testDays2);

        workoutDao.updateWorkout(updatedWorkout);

        workouts = workoutDao.getWorkouts(testEmail);

        Set<Integer> checkDays = workouts.get(0).getDaysOfWeek();
        
        assertEquals(testDays2, workouts.get(0).getDaysOfWeek());
        assertEquals(2, checkDays.size());
    }


    @AfterClass
    public static void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}

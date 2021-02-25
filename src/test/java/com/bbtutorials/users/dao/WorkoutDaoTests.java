package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.local.embedded.DynamoDBEmbedded;
import com.amazonaws.services.dynamodbv2.model.*;
import com.bbtutorials.users.model.ExerciseWeight;
import com.bbtutorials.users.model.Workout;
import org.junit.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.Assert.*;

public class WorkoutDaoTests {
    private AmazonDynamoDB amazonDynamoDB;
    private DynamoDBMapper mapper;
    private WorkoutDao dao;

    private final String testEmail = "test@test.com";
    private final String testName = "Test Workout";
    private final Set<String> testExercises = new HashSet<>(Arrays.asList("exerciseID1", "exerciseID2"));
    private final Set<Integer> testDaysOfWeek = new HashSet<>(Arrays.asList(1, 3, 5));

    @Before
    public void setup() {
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

        dao = new WorkoutDao(mapper);
    }

    public Workout createTestWorkout() {
        Workout test = new Workout();
        test.setUserEmail(testEmail);
        test.setName(testName);
        test.setExercises(testExercises);
        test.setDaysOfWeek(testDaysOfWeek);

        return test;
    }

    @Test
    public void testPutGetDeleteOneWorkout() {
        dao.putWorkout(createTestWorkout());

        List<Workout> res = dao.getWorkouts(testEmail);

        assertEquals(1, res.size());
        assertEquals(testName, res.get(0).getName());
        assertEquals(testExercises, res.get(0).getExercises());
        assertEquals(testDaysOfWeek, res.get(0).getDaysOfWeek());

        dao.removeWorkout(res.get(0));

        res = dao.getWorkouts(testEmail);

        assertTrue(res.isEmpty());
    }

    @Test
    public void testGetMultipleWorkout() {
        dao.putWorkout(createTestWorkout());
        Workout test1 = createTestWorkout();
        test1.setName("Test Workout 2");

        dao.putWorkout(test1);

        List<Workout> res = dao.getWorkouts(testEmail);

        assertEquals(2, res.size());
    }

    @Test
    public void testUpdateWorkout() {
        dao.putWorkout(createTestWorkout());

        List<Workout> res = dao.getWorkouts(testEmail);

        Set<String> updatedExercises = new HashSet<>(Arrays.asList("exerciseID1", "exerciseID3"));
        Set<Integer> updatedDaysOfWeek = new HashSet<>(Arrays.asList(2, 4));
        Workout toUpdate = res.get(0);
        toUpdate.setExercises(updatedExercises);
        toUpdate.setDaysOfWeek(updatedDaysOfWeek);

        dao.updateWorkout(toUpdate);

        res = dao.getWorkouts(testEmail);

        assertEquals(1, res.size());
        assertEquals(updatedExercises, res.get(0).getExercises());
        assertEquals(updatedDaysOfWeek, res.get(0).getDaysOfWeek());
    }

    @After
    public void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}


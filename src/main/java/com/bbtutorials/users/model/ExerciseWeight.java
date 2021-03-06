package com.bbtutorials.users.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/**
 * The class used as the model for weight exercises in DynamoDB.
 * The id attribute serves as the primary key for indexing
 * the database table and is autogenerated whenever a new
 * item is saved to the table.
 *
 * The userEmail attribute is the email of the current user.
 * The exerciseType attribute is the type of exercise, which
 * can be either "Run" or "Weight", and is the latter here.
 *
 * @author Mark Farber
 */
@NoArgsConstructor
@AllArgsConstructor
@DynamoDBTable(tableName = "Exercises")
public class ExerciseWeight {
    private String id;
    private String userEmail;
    private String name;
    private Integer lbs;
    private Integer sets;
    private Integer reps;
    private String exerciseType;

    @DynamoDBHashKey(attributeName = "Id")
    @DynamoDBAutoGeneratedKey
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    @DynamoDBAttribute(attributeName = "UserEmail")
    public String getUserEmail() { return userEmail; }
    public void setUserEmail(String userEmail) { this.userEmail = userEmail; }

    @DynamoDBAttribute(attributeName = "Name")
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @DynamoDBAttribute(attributeName = "Lbs")
    public Integer getLbs() { return lbs; }
    public void setLbs(Integer lbs) { this.lbs = lbs; }

    @DynamoDBAttribute(attributeName = "Sets")
    public Integer getSets() { return sets; }
    public void setSets(Integer sets) { this.sets = sets; }

    @DynamoDBAttribute(attributeName = "Reps")
    public Integer getReps() { return reps; }
    public void setReps(Integer reps) { this.reps = reps; }

    @DynamoDBAttribute(attributeName = "ExerciseType")
    public String getExerciseType() { return exerciseType; }
    public void setExerciseType(String exerciseType) { this.exerciseType = exerciseType; }
}

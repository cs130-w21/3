package com.bbtutorials.users.model;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

/**
 * The class used as the model for run exercises in DynamoDB.
 * The id attribute serves as the primary key for indexing
 * the database table and is autogenerated whenever a new
 * item is saved to the table.
 *
 * The userEmail attribute is the email of the current user.
 * The exerciseType attribute is the type of exercise, which
 * can be either "Run" or "Weight", and is the former here.
 *
 * @author Mark Farber
 */
@NoArgsConstructor
@AllArgsConstructor
@DynamoDBTable(tableName = "Exercises")
public class ExerciseRun {
    private String id;
    private String userEmail;
    private String name;
    private Double miles;
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

    @DynamoDBAttribute(attributeName = "Miles")
    public Double getMiles() { return miles; }
    public void setMiles(Double miles) { this.miles = miles; }

    @DynamoDBAttribute(attributeName = "ExerciseType")
    public String getExerciseType() { return exerciseType; }
    public void setExerciseType(String exerciseType) { this.exerciseType = exerciseType; }
}

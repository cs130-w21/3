package com.bbtutorials.users.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@DynamoDBTable(tableName = "Accounts")
public class Account {
    private String email;
    private String username;
    private String password;
    private Set<String> friends;

    @DynamoDBHashKey(attributeName = "Email")
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    @DynamoDBAttribute(attributeName = "Username")
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    @DynamoDBAttribute(attributeName = "Password")
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    @DynamoDBAttribute(attributeName = "Friends")
    public Set<String> getFriends() { return friends; }
    public void setFriends(Set<String> friends) { this.friends = friends; }
}

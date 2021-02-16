package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.model.ConditionalCheckFailedException;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.bbtutorials.users.model.Account;
import lombok.extern.slf4j.Slf4j;
import org.jasypt.util.password.StrongPasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.security.auth.login.AccountException;
import javax.security.auth.login.FailedLoginException;
import java.util.HashMap;
import java.util.Map;

/**
 * The class used to interact with DynamoDB for accounts (and friends).
 * The DynamoDBMapper object is autowired in as a singleton to
 * ensure the proper credentials are used each time an API is
 * called.
 *
 * @author Mark Farber
 */
@Slf4j
@Component
public class AccountDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public AccountDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

    /**
     * Creates an account for a new user by taking in their username,
     * email, and password. The password is encrypted and then updated in
     * the account created that will be saved to DynamoDB. When creation
     * is successful, the newly created account is returned to make an
     * authentication key later on. When unsuccessful, an exception is thrown
     * to depict failure of the operation. Accounts initially start out with
     * no friends.
     * @param username the username for the new user
     * @param email the email address for the new user
     * @param password the plaintext password for the new user
     * @return the created account for the new user
     * @throws AccountException when the supplied user information is invalid
     */
    public Account createAccount(String username, String email, String password) throws AccountException {
        StrongPasswordEncryptor encryptor = new StrongPasswordEncryptor();
        String encrypted = encryptor.encryptPassword(password);

        Account newUser = new Account();
        newUser.setUsername(username);
        newUser.setEmail(email);
        newUser.setPassword(encrypted);
        newUser.setFriends(null);

        DynamoDBSaveExpression saveExpression = new DynamoDBSaveExpression();
        Map<String, ExpectedAttributeValue> eav = new HashMap<>();
        eav.put("Email", new ExpectedAttributeValue(false));
        saveExpression.setExpected(eav);

        try {
            mapper.save(newUser, saveExpression);
            return newUser;
        } catch (ConditionalCheckFailedException e) {
            log.info("User with specified email already exists.");
            throw new AccountException("Invalid info supplied!");
        }
    }

    /**
     * Returns the account for the user specified by the email argument
     * when the login is successful, wherein the decrypted password from
     * DynamoDB matches the plaintext one specified by the password argument.
     * When unsuccessful, due to either an invalid email or password supplied,
     * an exception is thrown to depict failure of the operation.
     * @param email the email address of the user logging in
     * @param password the plaintext password of the user logging in
     * @return the account for the logged in user
     * @throws FailedLoginException when the email or password supplied is invalid
     */
    public Account login(String email, String password) throws FailedLoginException {
        StrongPasswordEncryptor encryptor = new StrongPasswordEncryptor();

        Account res = mapper.load(Account.class, email);

        if (res == null) {
            log.info("No user exists with the specified email.");
            throw new FailedLoginException("Invalid email or password!");
        }

        if (encryptor.checkPassword(password, res.getPassword())) {
            log.info("Login successful!");
            return res;
        } else {
            log.info("Incorrect password!");
            throw new FailedLoginException("Invalid email or password!");
        }
    }
}

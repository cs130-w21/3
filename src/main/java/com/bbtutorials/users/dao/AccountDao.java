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

@Slf4j
@Component
public class AccountDao {

    @Autowired
    private DynamoDBMapper mapper;

    @Autowired
    public AccountDao(DynamoDBMapper mapper) {
        this.mapper = mapper;
    }

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

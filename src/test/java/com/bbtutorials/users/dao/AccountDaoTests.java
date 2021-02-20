package com.bbtutorials.users.dao;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.local.embedded.DynamoDBEmbedded;
import com.amazonaws.services.dynamodbv2.model.*;
import com.bbtutorials.users.model.Account;
import org.junit.*;

import javax.security.auth.login.AccountException;
import javax.security.auth.login.FailedLoginException;

import static org.junit.Assert.*;

public class AccountDaoTests {
    private AmazonDynamoDB amazonDynamoDB;
    private DynamoDBMapper mapper;
    private AccountDao dao;

    private final String testEmail = "test@test.com";
    private final String testUsername = "Tester";
    private final String testPassword = "test1234";

    private final String testFriendEmail = "friend@test.com";

    @Before
    public void setup() {
        System.setProperty("sqlite4java.library.path", "native-libs");

        amazonDynamoDB = DynamoDBEmbedded.create().amazonDynamoDB();//dynamoDB.getAmazonDynamoDB();
        mapper = new DynamoDBMapper(amazonDynamoDB);

        amazonDynamoDB.createTable(new CreateTableRequest()
                .withTableName("Accounts")
                .withKeySchema(new KeySchemaElement().withAttributeName("Email").withKeyType(KeyType.HASH))
                .withAttributeDefinitions(
                        new AttributeDefinition().withAttributeName("Email").withAttributeType(ScalarAttributeType.S))
                .withProvisionedThroughput(new ProvisionedThroughput(5L, 5L))
        );

        dao = new AccountDao(mapper);
    }

    @Test
    public void testCreateAccountAndLogin_Valid() throws AccountException, FailedLoginException {
        Account newAccount = dao.createAccount(testUsername, testEmail, testPassword);
        assertNotEquals(testPassword, newAccount.getPassword());

        Account loggedIn = dao.login(testEmail, testPassword);
        assertEquals(newAccount.getUsername(), loggedIn.getUsername());
    }

    @Test(expected = AccountException.class)
    public void testCreateAccount_Invalid() throws AccountException {
        dao.createAccount(testUsername, testEmail, testPassword);

        dao.createAccount(testUsername + "2", testEmail, testPassword);
    }

    @Test(expected = FailedLoginException.class)
    public void testCreateAccountAndLogin_Invalid() throws AccountException, FailedLoginException {
        dao.createAccount(testUsername, testEmail, testPassword);

        dao.login(testEmail, "testIncorrect");
    }

    @Test(expected = FailedLoginException.class)
    public void testLogin_Invalid() throws FailedLoginException {
        dao.login(testEmail, testPassword);
    }

    @Test
    public void testAddRemoveFriend_Valid() throws AccountException, FailedLoginException {
        dao.createAccount(testUsername, testEmail, testPassword);
        dao.createAccount("TestFriend", testFriendEmail, "test123");

        dao.addFriend(testEmail, testFriendEmail);

        Account loggedIn = dao.login(testEmail, testPassword);
        assertEquals(1, loggedIn.getFriends().size());
        assertTrue(loggedIn.getFriends().contains(testFriendEmail));

        dao.removeFriend(testEmail, testFriendEmail);
        loggedIn = dao.login(testEmail, testPassword);
        assertNull(loggedIn.getFriends());
    }

    @Test(expected = AccountException.class)
    public void testAddFriend_Invalid() throws AccountException {
        dao.createAccount(testUsername, testEmail, testPassword);

        dao.addFriend(testEmail, testFriendEmail);
    }

    @After
    public void shutdown() {
        if(amazonDynamoDB != null) {
            amazonDynamoDB.shutdown();
        }
    }
}

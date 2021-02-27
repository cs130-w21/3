# Sidero
Sidero Workout Planner

### Dependencies
### You will probably run into errors if you do not have these installed
- Java
- Node
- NPM
- Maven
- Gulp
    - `npm install --global gulp-cli` (inside root of directory)
### Setup Instructions

`git clone https://github.com/cs130-w21/3.git sidero`

`cd sidero`

`mvn clean install`
(Do not worry about Browserslist error)

## Running The Web App

**For complete build testing**

`mvn clean install //this will run tests`

`java -jar target/Sidero-0.0.2-SNAPSHOT.jar`

**For hot reloading**

`cd src/main/ui`

`npm start`

I personally love using material ui for front end inspiration
- https://material-ui.com/getting-started/templates/

### React Package Error

`cd src/main/ui`

`npm install **[MISSING PACKAGE]**`

## Deployment

To deploy the web app locally, simply run the jar as above (with proper AWS credentials set up).
To deploy to AWS, create an Elastic Beanstalk environment, upload the JAR, 
and add DynamoDB Admin access to the IAM EC2 role.

## CI/CD

For our CI pipeline, we used CircleCI, since there were issues with the specific processors used by TravisCI, 
while CircleCI had docker containers that were specifically configured to run OpenJDK, as we needed. 
Further, CircleCI had a preset for Maven builds and tests that generated a config file for us automatically 
that we could fine-tune to our needs, such as globally installing gulp, which was needed for packaging parts of our web app. 
The .yml config file can be found [here](https://github.com/cs130-w21/3/blob/master/.circleci/config.yml).
Every time code was pushed to a branch, a build would trigger, causing the script to run, which was a similar process to `mvn clean install`.

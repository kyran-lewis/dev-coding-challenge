# README

## Installation

Use node package manager (npm) to install the following in backend directory 

```
npm install express
```
```
npm install nodemon
```
```
npm install cors
```
```
npm install mongoose
```

Relocate to the frontend directory and Use node package manager (npm) to install the relevant packages by typing:
```
npm install
```

## Database Setup
Go to MongoDB official website. Setup an account and create a new database. When you've successfully created a database click
the connect button and click on drivers under "connect to your application". You will need to replace the connection string in
the current code with your own (look for mongoose.connect in server.js). 

## Importing JSON file to database
Navigate to the MongoImport page on MongoDB website. Link: https://www.mongodb.com/docs/database-tools/installation/installation/
This will give instructions on how to install MongoImport which we will use to import our JSON file. To make sure MongoImport is working
use the command:
```
mongoimport --version
```
This should give the latest version if there were no errors in the installation. 

Now we need to use MongoDB compass to import the JSON file. Like before on your database click the connect button but this time we click
on compass under "access your data tools through". This will give you another connection string which you will need to use in the next command. Go to the directory where you're keeping your JSON file. Then enter the follwoing command:
```
mongoimport <connectionstring> --collection jokes <nameofjsonfile>

```
Note: remember password won't be automatically entered in the connection string so you will have to enter this manually yourself.

Now navigate to your MongoDB page again and look at collection to make sure it imported the objects correctly.

## Running the servers
To run the backend server go to the backend directory and simply enter the following command into the terminal:
```
npm run dev
```
In a separate tab in your terminal relocate to the front-end\react-dev-test directory enter the following command to run the front end:
```
npm run dev
```
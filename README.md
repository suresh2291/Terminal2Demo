# Terminal2Demo
Hands On  Nodejs and MySQL Project.
# Terminal2Demo
Hands On  Nodejs and MySQL Project.

Instructions:
1. mySQL Setup
Set up MySQL Installer
https://dev.mysql.com/downloads/installer/

Set up Workbench
https://dev.mysql.com/downloads/workbench/

2.database creation.
create database name "testdb".

3.Clone the project
unzip the project and open in Visual Studio Code.

4.Setup Project and Configurations

check the db name in env.js in config folder app/config/env.js.
Add the respective db name if any error exits.

 {
    database: 'your db name',
    username: 'your username',
    password: 'your password',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
run the server.js file "node server"

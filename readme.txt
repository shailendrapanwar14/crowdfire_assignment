KEY POINTS to note
APIs are written using nodejs
framework - nestjs
languge- typescript
ORM- Sequelize
Database: MYSQL


Steps to run the project
to run the project edit .env file
change your db username and password to connect with Database
most import create Database name as users_data
if node modules are not there please open cmd and run "npm i" command to install packages 

to start the project 

"npm run start" command to run the project
server will start running on 3000 PORT

follow the API parameter to call the APIs from postman 
I am providing endpoints and payloads in json file

Validation are used to insure for insert proper data like duplicate username and email
password encryption
Swagger are implemented 
i was using bcrypt package for storing password but there are some issue in pkg so i commented that


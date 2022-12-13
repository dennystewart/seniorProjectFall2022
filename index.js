//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const { Connection, Request } = require("tedious");

//marlie eddie index.js
const path = require('path'); //why you need this eddie?
const axios = require('axios');
var bodyParser = require('body-parser')

var formRouters = require("./routers/formRouter");
var opportunityRouter = require("./routers/opportunityRouter");
//app
const app = express();
app.use(express.json());

//marlie pug
app.set('view engine', 'pug');
  
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use('/', formRouters);

//Rabani
app.use('/opportunity', opportunityRouter);

//port
const port = process.env.PORT || 3000;

//listener
const server = app.listen(port, () => 
console.log(`server is running on port ${port}`)
);


//db2
// Create connection to database
const config = {
    authentication: {
      options: {
        userName: "azureuserD4C", 
        password: "D4Change123" 
      },
      type: "default"
    },
    server: "d4cserver.database.windows.net", 
    options: {
      database: "d4cdb", 
      encrypt: true
    }
  };


const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("DATABASE CONNECTED");
    queryDatabase();
  }
 // connection.close();
});

connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // Read all rows from table
  const request = new Request(
    `INSERT INTO dbo.Users (2,'Denver','denveremail@gmail.com','Password123!')
     SELECT * FROM dbo.Users
     SELECT * FROM dbo.Reports`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);

  //middleware
app.use(morgan("dev"));
app.use(cors({ orgin: true, credentials: true}));
//routes
const testRoutes = require("./routers/test");
app.use("/", testRoutes);


}
// render home page
app.get('/', (req, res) => {
  res.render('home', {
      title: 'Home'
  });
});




















//do you need this line marlie?    
//app.listen(port);













/*to do list
*connect it to git hub
*connect it to database
*connect it to azure
*/
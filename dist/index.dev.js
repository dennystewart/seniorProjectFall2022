"use strict";

//import modules
var express = require('express');

var mongoose = require('mongoose');

var morgan = require('morgan');

var cors = require('cors');

require("dotenv").config();

var _require = require("tedious"),
    Connection = _require.Connection,
    Request = _require.Request; //marlie eddie index.js


var path = require('path'); //why you need this eddie?


var axios = require('axios');

var bodyParser = require('body-parser');

var formRouters = require("./routers/formRouter");

var opportunityRouter = require("./routers/opportunityRouter"); //app


var app = express();
app.use(express.json()); //marlie pug

app.set('view engine', 'pug');
app.use(urlencodedParser = bodyParser.urlencoded({
  extended: false
}));
app.use(express["static"](__dirname));
app.use('/', formRouters); //Rabani

app.use('/opportunity', opportunityRouter); //port

var port = process.env.PORT || 3000; //listener

var server = app.listen(port, function () {
  return console.log("server is running on port ".concat(port));
}); //db2
// Create connection to database

var config = {
  authentication: {
    options: {
      userName: "azureuserD4C",
      password: "D4Change123"
    },
    type: "default"
  },
  server: "dreamweeksqlserver.database.windows.net",
  options: {
    database: "dreamweekDatabase",
    encrypt: true
  }
};
var connection = new Connection(config); // Attempt to connect and execute queries if connection goes through

connection.on("connect", function (err) {
  if (err) {
    console.error(err.message);
  } else {
    console.log("DATABASE CONNECTED");
    queryDatabase();
  } // connection.close();

});
connection.connect();

function queryDatabase() {
  console.log("Reading rows from the Table..."); // Read all rows from table

  var request = new Request("SELECT * FROM SalesLT.Customer", function (err, rowCount) {
    if (err) {
      console.error(err.message);
    } else {
      console.log("".concat(rowCount, " row(s) returned"));
    }
  });
  request.on("row", function (columns) {
    columns.forEach(function (column) {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });
  connection.execSql(request); //middleware

  app.use(morgan("dev"));
  app.use(cors({
    orgin: true,
    credentials: true
  })); //routes

  var testRoutes = require("./routers/test");

  app.use("/", testRoutes);
} // render home page


app.get('/', function (req, res) {
  res.render('home', {
    title: 'Home'
  });
}); //do you need this line marlie?    
//app.listen(port);

/*to do list
*connect it to git hub
*connect it to database
*connect it to azure
*/
//# sourceMappingURL=index.dev.js.map

"use strict";

var express = require('express');

var opportunityRouter = express.Router();

var path = require('path');

var _require = require('../models/opportunityModel'),
    Opportunity = _require.Opportunity; // eventually should change the data from the database


var opportunities = []; // This is a hard code, but eventually need to be deleted.

var opp = new Opportunity();
opp.serviceProvider = "JSEB Access to Capital";
opp.serviceRequired = "Volunteer";
opp.contactNumber = "(904)123-1234";
opp.email = "ForExample@example.com";
opp.time = "10 - 11 am Est.";
opp.date = "Dec 20, 2022 - Dec 25, 2022";
opp.location = "Jax";
opp.additionalInfo = "This section is for any additional notes.";
opportunities.push(opp);
var opp2 = new Opportunity();
opp2.serviceProvider = "Jacksonville Chamber JAX Bridges";
opp2.serviceRequired = "Volunteer";
opp2.contactNumber = "(904)123-1111";
opp2.email = "Tom@example.com";
opp2.time = "9 - 10 am Est.";
opp2.date = "Dec 22, 2022";
opp2.location = "Beach";
opp2.additionalInfo = "This section is for any additional notes.";
opportunities.push(opp2);
var opp3 = new Opportunity();
opp3.serviceProvider = "Jim Moran Institute for Global Entrepreneurship";
opp3.serviceRequired = "Volunteer";
opp3.contactNumber = "(904)123-2222";
opp3.email = "Sam@example.com";
opp3.time = "1 - 3 pm Est.";
opp3.date = "Dec 23, 2022 - Dec 24, 2022";
opp3.location = "Jacksonville";
opp3.additionalInfo = "This section is for any additional notes.";
opportunities.push(opp3);
var opp4 = new Opportunity();
opp4.serviceProvider = "Florida First Capital Finance Corporation (FFCFC)";
opp4.serviceRequired = "Volunteer";
opp4.contactNumber = "(904)123-3333";
opp4.email = "Oppurtunity@example.com";
opp4.time = "3 - 4 pm Est.";
opp4.date = "Dec 26, 2022";
opp4.location = "Atlantic";
opp4.additionalInfo = "This section is for any additional notes.";
opportunities.push(opp4);
opportunityRouter.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "../views/opportunityForm.html"));
});
opportunityRouter.get('/PostedOpportunities', function (req, res) {
  res.render('../views/opportunities.pug', {
    opportunities: opportunities
  });
});
opportunityRouter.post('/form', function (req, res) {
  console.log(req.body);
  var opportunity = new Opportunity();
  var date = new Date();
  opportunity.createdDate = date;
  Object.assign(opportunity, req.body);
  opportunities.push(opportunity);
  console.log(opportunities);
  res.redirect('PostedOpportunities');
});
module.exports = opportunityRouter;
//# sourceMappingURL=opportunityRouter.dev.js.map

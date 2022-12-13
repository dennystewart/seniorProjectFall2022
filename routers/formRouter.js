var express = require('express');
var bodyParser = require('body-parser')
var formRouter = express.Router();
//changed from false, cant remeber why I put false first...
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var path = require('path');
const axios = require('axios');
const { Answers } = require('../models/formModel');

let answersArray = [];
 

formRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../views/form.html"));

});

formRouter.get('/completedForms', (req, res) => {
    //res.sendFile(path.join(__dirname, "../view/completedForm.html"));
    //res.send(answersArray);
  //const query = await axios.get('http://localhost:3000/form');
  const query = answersArray; 
  //res.render(path.join(__dirname, "../view/index.pug"), { answersArray: answersArray });
  res.render('../views/completedForms.pug', { answersArray: answersArray });
});

/* //original get shows array
formRouter.get('/completedForm', (req, res) => {
    //res.sendFile(path.join(__dirname, "../view/completedForm.html"));
    res.send(answersArray);
});
*/


formRouter.post('/form', (req, res) => {
    console.log(req.body);
    let sentAnswers = new Answers();
    let date = new Date();
    //let month = date.getUTCMonth() + 1; //months from 1-12
    //let day = date.getUTCDate() -1;
    //let year = date.getUTCFullYear();
    //newdate = month + "/" + day + "/" + year;
    //sentAnswers.createdDate = newdate;
    sentAnswers.createdDate = date;
    Object.assign(sentAnswers, req.body);
    //console.log(sentAnswers);
    answersArray.push(sentAnswers);
    console.log(answersArray);
    res.redirect('/');
    //res.send('ok');

});


module.exports = formRouter;
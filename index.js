var express = require('express');
var bodyParser = require('body-parser');

//Init Express
var app = express();

//Setup Middleware and Controllers
var user = require('./user'),
    skills = require('./skills'),
    middleware = require('./controllers/middleware.js'),
    mainCtrl = require('./controllers/mainCtrl');

//Setup Global Middleware
app.use(middleware.addHeaders);
app.use(bodyParser.json());


//GET Endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamily);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurants);
app.get('/skills', mainCtrl.getSkills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

//PUT Endpoints
app.put('/name/:name', mainCtrl.updateName);
app.put('/location/:location', mainCtrl.updateLocation);

//POST Endpoints
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations/:occupations', mainCtrl.addOccupations);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurants);
app.post('/skills', middleware.generateId, mainCtrl.addSkill);



app.listen(8000, function() {
  console.log('I pity 8000 fools');
});

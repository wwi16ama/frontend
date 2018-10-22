var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


// Planes
// List of all planes
app.get('/planes', cors(), function (req, res) {
  fs.readFile(__dirname + '/mock-data/plane.json', function (err, data) {
    if (err) {
      const errorMessage = { error: 'Nichts gefunden' };
      res.status(400).json(errorMessage);
    } else {
      var response = JSON.parse(data);
      res.status(200).json(response);
    }
  });
});

// Create a Plane
app.post('/planes', cors(), function (req, res) {
  trennlinie();
  console.log('post /planes hat erhalten:');
  console.log(req.body);
  trennlinie();
  req.body.id = 9001;
  res.status(200).send(req.body);
});

// Update a specific Plane
app.put('/planes/:id', cors(), function (req, res) {
  trennlinie();
  console.log('put /planes/:id hat erhalten:');
  console.log(req.body);
  trennlinie();
  res.statusCode = 204;
  res.send();
});


// Member
// List of all members
app.get('/members', cors(), function (req, res) {
  fs.readFile(__dirname + '/mock-data/memberlist.json', function (err, data) {
    if (err) {
      const errorMessage = { error: 'Nichts gefunden' };
      res.status(400).json(errorMessage);
    } else {
      var response = JSON.parse(data);
      res.status(200).json(response);
    }
  });
});

// Info for a specific Member
app.get('/members/:id', cors(), function (req, res) {
  fs.readFile(__dirname + '/mock-data/member' + req.params.id + '.json', function (err, data) {
    if (err) {
      const errorMessage = { error: 'Nichts gefunden' };
      res.status(400).json(errorMessage);
    } else {
      var response = JSON.parse(data);
      res.status(200).json(response);
    }
  });
});

// Update a specific Member
app.put('/members/:id', cors(), function (req, res) {
  trennlinie();
  console.log('put /members/:id hat erhalten:');
  console.log(req.body);
  trennlinie();
  res.statusCode = 204;
  res.send();
});


// Creditlist
app.get('/creditlist', cors(), function (req, res) {
  fs.readFile(__dirname + '/mock-data/creditlist.json', function (err, data) {
    if (err) {
      const errorMessage = { error: 'Nichts gefunden' };
      res.status(400).json(errorMessage);
    } else {
      var response = JSON.parse(data);
      res.status(200).json(response);
    }
  });
});


function trennlinie() {
  console.log('--------------------------------------------------------------------');
}

app.listen(3000, function () {
  console.log('Mock Server running on Port: 3000!');
});
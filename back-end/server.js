const express = require('express');
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: './tpscholar/public/images/scholarships',
  limits: {
    fileSize: 10000000
  }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/tpscholar', {
  useNewUrlParser: true
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  name: String,
  value: String,
  school: String,
  image: String,
  about: String
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);

const applicationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  university: String,
  student: String,
  gpa: String,
  essay: String,
  scholarshipAppliedFor: String,

});

// Create a model for items in the museum.
const Application = mongoose.model('Application', applicationSchema);

app.post('/api/applications', async (req, res) => {
    const application = new Application({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      university: req.body.university,
      student: req.body.student,
      gpa: req.body.gpa,
      essay: req.body.essay,
      scholarshipAppliedFor: req.body.scholarshipAppliedFor
    });
    try {
      await application.save();
      res.send(application);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });


// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items/:id', async (req, res) => {
    try {
      let item = await Item.findOne({ _id: req.params.id });
      res.send(item);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

app.listen(3000, () => console.log('Server listening on port 3000!'));
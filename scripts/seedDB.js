const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/jamSoft"
);

const userSeed = [
  {
    userName: "JamsoftJames",
    password: "Welcome123",
    username: "JamsoftJames",
    hash: "Welcome123",
    created: new Date(Date.now())
  }
]

const incidentSeed = [
  {
    shortDescription: "Testing - Test Incident",
    description: "This is a test incident",
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
    notes: {}
  },
  {
    shortDescription: "Test 2 - Electric Boogaloo",
    description: "This is the second test I've created",
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
    notes: {}
  }
]

db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Incident
  .deleteMany({})
  .then(() => db.Incident.collection.insertMany(incidentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
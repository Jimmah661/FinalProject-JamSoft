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
    client: "Erika Knowles",
    techGroup: "Service Centre",
    technician: "James Rudd",
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
    notes: []
  },
  {
    shortDescription: "Test 2 - Electric Boogaloo",
    description: "This is the second test I've created",
    client: "Jeremy Frank",
    techGroup: "Service Centre",
    technician: "James Rudd",
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
    notes: []
  },
  {
    shortDescription: "Test 2 - Electric Boogaloo",
    description: "This is the second test I've created",
    client: "Anton Fleece",
    techGroup: "Service Centre",
    technician: "James Rudd",
    created: new Date(Date.now()),
    updated: new Date(Date.now()),
    notes: [
      {note: "Note left on ticket", date: new Date(Date.now())},
      {note: "Second Note left on ticket", date: new Date(Date.now())}
    ]
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
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("./post-visualize-development-firebase-adminsdk-u9ze6-9475ef2e0c.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://post-visualize-development.firebaseio.com/"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();

// var plant = localStorage.getItem("plantName")

var ref = db.ref("Moroceli");

console.log(db)

ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

export function listofPlants(db) {
  var output = [];
  var x;
  for (x in db) {
    output.push(x);
  }
  return output;
}

class Reference {
  constructor(data = db) {
    this.db = db;
    this.plantNames = []];
  }
}

// Hardcoded list of plants, should be dynamically generated from firebase in the future
const plants = ["Agalteca", "Alauca", "Atima", "Cuatro Comunidades", "Otoro", "Marcala", "Moroceli", "Matias", "San Nicolas", "Tamara", "Las Vegas", "San Juan Guarita", "Zamorano", "Gracias"]

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

export function listOfPlants(db) {
  // var output = [];
  // var x;
  // for (x in db.DataSnapshot) {

  //   output.push(x);
  // }
  // return output;
  return plants;
}

/**
 * Wrapper class for the Firebase realtime database to allow for easy retrieval of
 * plant data
 */
class Reference {
  constructor(data = db) {
    this.db = db;
    this.plantNames = listOfPlants(db);
  }

  /**
   * Returns the list of plants
   * 
   * @returns The list of plants
   */
  getPlantNames() {
    return this.plantNames;
  }

  /**
   * Returns the data value that corresponds to the inputted
   * plant name
   * 
   * @param {*} plantName    The plant that data is requested for
   * @returns The reference to the data
   */
  getData(plantName) {
    return this.db.ref(plantName);
  }
}
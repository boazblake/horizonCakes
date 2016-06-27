var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/storage");

var config = {
    apiKey: "AIzaSyDO8vxHO79C9zEPlnpEJIdc2JnqPvJHSEY",
    authDomain: "project-8168779970786781903.firebaseapp.com",
    databaseURL: "https://project-8168779970786781903.firebaseio.com",
    storageBucket: "project-8168779970786781903.appspot.com",
};

firebase.initializeApp(config);

console.log('firebase>', firebase)


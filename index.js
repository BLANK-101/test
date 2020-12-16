var firebaseConfig = {
  apiKey: "AIzaSyDe7anCx-uBfNwY_K4RBzZnJUT-u2v2BbY",
  authDomain: "kerala-tourism-72db0.firebaseapp.com",
  databaseURL: "https://kerala-tourism-72db0.firebaseio.com",
  projectId: "kerala-tourism-72db0",
  storageBucket: "kerala-tourism-72db0.appspot.com",
  messagingSenderId: "12297400166",
  appId: "1:12297400166:web:49f6c4ee5c8f2060fba2a7",
  measurementId: "G-ECNYCD1XC9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// database reference
var refdb = firebase.database().ref("Subscriptions");

// button submission listener
document.getElementById("register").addEventListener("submit", send);

function send(e) {
  e.preventDefault();

  var mail = document.getElementById("email").value;

  //pass value to database
  sendinfo(mail);

  function sendinfo(m) {
    refdb.set({ Email: m });
  }

  // Show alert
  document.getElementById("alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.getElementById("alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("register").reset();
}

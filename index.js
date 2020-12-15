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

var refdb = firebase.database().ref("New Subscriptions");
document.getElementById("register").addEventListener("submit", submitfn);
function submitfn(e) {
  e.preventDefault();
  var info = refdb.push();
  var em = document.getElementById(email).value;
  info.set({ email: em });
  alert("yes");
}

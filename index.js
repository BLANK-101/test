var messagesRef = firebase.database().ref("New Subscription");

// Listen for form submit
document.getElementById("register").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var email = document.getElementById(id).value;

  // Save message
  saveMessage(email);

  // Show alert
  document.querySelector("alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector("alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("register").reset();
}

// Save message to firebase
function saveMessage(email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
  });
}

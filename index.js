var messagesRef = firebase.database().ref("New Registrations");

// Listen for form submit
document.getElementById("register").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var email = getInputVal("email");

  // Save message
  saveMessage(email);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("register").reset();
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, status) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
  });
}

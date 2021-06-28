
document.getElementById("myBtn").addEventListener("submit", validateForm);

function validateForm() {

  if (document.feedback.firstname.value == "") {
    alert("First Name must be filled out");
    return false;
  }

  if (document.feedback.lastname.value == "") {
    alert("Last Name must be filled out");
    return false;
  }

  if (document.feedback.email.value == "") {
    alert("Email must be filled out");
    return false;
  }

  if (document.feedback.comment.value == "") {
    alert("Feedback must be filled out");
    return false;
  }
  return true;
}

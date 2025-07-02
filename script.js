function getFormvalue(event) {
  event.preventDefault(); // prevent page reload

  const form = document.getElementById("form1");
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  if (firstName || lastName) {
    alert(`${firstName} ${lastName}`);
  } else {
    alert("Please enter your name.");
  }

  return false; // prevent form submission
}

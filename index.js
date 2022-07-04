const passField = document.getElementById("pass");
const confirmField = document.getElementById("confirm");
const form = document.getElementById("form");

const errorElement = document.getElementById(`error`);

form.addEventListener("submit", (e) => {
  let messages = [];
  if (passField.value != confirmField.value) {
    messages.push("Passwords do not match");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    errorElement.style.cssText = "color:red;";
  }
});

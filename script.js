// get the form and return message
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();

    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let response = document.getElementById("response");

    response.innerHTML = `Hello, <strong>${user}</strong>!<br>I will get back to you soon regarding <strong>${subject}</strong>.<br>
        Make sure to check your email, <em>${email}</em>, for junk mail.<br><br>
        Toodaloo!`;
  });
});

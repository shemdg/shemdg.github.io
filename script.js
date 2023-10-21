emailjs.init("cV2ncF5ltpbFqt_8d"); // OK!!

const sendBtn = document.querySelector(".send-btn");
const result = document.querySelector(".result");

sendBtn.addEventListener("click", sendEmail);

function sendEmail() {
  //form data
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  //send
  emailjs
    .send("service_e38oqn1", "template_y8vb5c7", {
      to_email: to,
      subject: subject,
      message: message,
    })
    .then(
      function () {
        result.innerHTML = "Email sent successfully!";
        result.style.opacity = 1;
      },
      function (error) {
        result.innerHTML = "Email sending failed!";
        result.style.opacity = 1;
        console.log(error);
      }
    );
}

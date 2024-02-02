const form = document.querySelector('form');
const yourName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Your Name: ${yourName.value}<br>Email: ${email.value}<br>
    Subject: ${subject.value}<br>Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "projectexample22130011@gmail.com",
    Password: "2985DF54F0FB69E1F5F515C420845905F90E",
    To: 'projectexample130011@gmail.com',
    From: "projectexample130011@gmail.com",
    Subject: subject.value,
    Body: bodyMessage
  }).then(
    message => {
      if(message=="OK") {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});
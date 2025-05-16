(function () {
  emailjs.init("bgPMvjgJ9C-HJ3z9j");
})();
const btn = document.getElementsByClassName("button-text")[0];
const inputs = document.getElementsByClassName("inputs-wrapper")[0];
const msgBox = document.getElementsByClassName("message-sent-box")[0];

const submittersName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.textContent = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ntiih57';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
       btn.textContent = "Submit";
        submittersName.value = "";
        email.value = "";
        message.value = "";
        inputs.classList.toggle("subdued");
        msgBox.classList.toggle("show");
    }, (err) => {
      btn.textContent = 'Send Email';
      alert(JSON.stringify(err));
    });
});
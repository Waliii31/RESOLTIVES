
document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".whatsapp-button");

  button.addEventListener("click", function (e) {
    e.preventDefault();
    openWhatsAppChat();
  });

  function openWhatsAppChat() {
    var phoneNumber = "+44 7456 274663";
    var message = "Hello, I have a question."; // Replace with your default message

    // Format the WhatsApp API URL
    var url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(message);

    // Open the WhatsApp window
    window.open(url, "_blank", "width=500,height=600");
  }
});

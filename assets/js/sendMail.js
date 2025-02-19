document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    emailjs
      .send("service_3wgsqdd", "template_ewb13bz", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      })
      .then(
        function (response) {
          // alert("Email sent successfully!");
          document.getElementById("form-submit").innerHTML = `
    <div style="display: flex; align-items: center; font-size: 1.2em; color: green; opacity: 50px; animation: fadeIn 2s forwards;">
        <div style="width: 20px; height: 20px; margin-right: 10px; background-color: blue; mask: url('tick.svg') no-repeat center; mask-size: contain;"></div>
        Message Sent Successfully!
    </div>
    <style>
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    </style>
`;

  // Clear all fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Reset the submit button after 5 seconds
  setTimeout(function () {
    document.getElementById("form-submit").innerHTML = `
      Send Message Again
    `;
  }, 3000);

        },
        function (error) {
          alert("Failed to send email: " + JSON.stringify(error));
        }
      );
  });

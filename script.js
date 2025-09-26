src="https://cdn.emailjs.com/dist/email.min.js">

    emailjs.init("YOUR_USER_ID");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            name: form.querySelector('input[name="name"]').value,
            email: form.querySelector('input[name="email"]').value,
            message: form.querySelector('textarea[name="message"]').value
        }).then(() => {
            window.location.href = "success.html";
        }, () => {
            errorMessage.style.display = "block";
            emailDetails.textContent = "Failed to send email. Please email wawerumb@gmail.com directly.";
            emailDetails.style.display = "block";
        });
    });

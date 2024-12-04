document.getElementById("sendButton").addEventListener("click", () => {
    // Get form and input values
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct the mailto link
    const mailtoLink = `mailto:tyagidevansh3@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=Email: ${encodeURIComponent(email)}%0A%0A${encodeURIComponent(message)}`;

    // Open the mailto link (trigger email client)
    window.location.href = mailtoLink;

    // Clear the form after the mailto link is opened
    form.reset();
});
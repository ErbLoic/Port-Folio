
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérez les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envoyez l'email via EmailJS
    emailjs.send("service_uoi2jox", "template_9t6ro7q", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        alert('Votre message a été envoyé avec succès !');
    }, function(error) {
        alert('Il y a eu une erreur lors de l\'envoi de votre message. Veuillez réessayer.');
    });
});

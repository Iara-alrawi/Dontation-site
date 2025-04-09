// Hanterar dark-theme toggle
document.getElementById('first-button').addEventListener('click', function () { 
    document.body.classList.toggle('dark-theme'); 
});



    // Hanterar donation-formuläret
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra att sidan laddas om

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('Email').value;
    const amount = document.getElementById('amount').value;

    // Visa ett meddelande
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'block';
  
    // Skapa meddelandet med formvärden
    responseMessage.innerHTML = `
      Tack, ${firstName} ${lastName}! <br>
      Vi har mottagit en donation på ${amount} kr. <br>
      En bekräftelse har skickats till ${email}.
    `;
});

// Hanterar meny toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active'); // Lägg till eller ta bort 'active' klassen
    });
});

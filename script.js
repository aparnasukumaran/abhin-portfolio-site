

// scrol reveal
ScrollReveal({
    // reset : true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.w3-jumbo, .w3-text-light-grey,.main-heading', { origin: 'top' });
ScrollReveal().reveal('.w3-image,.portfolio-container,.bx', { origin: 'bottom' });
ScrollReveal().reveal('.gd,.w3-section', { origin: 'left' });
ScrollReveal().reveal('#submit-btn,#dwnld_btn,.w3-wide', { origin: 'right' });


// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Graphic Designer.'],
    typeSpeed: 100,
    backSpeed: 100,
});


// dwnld_btn
document.getElementById("dwnld_btn").addEventListener("click", function () {
    window.open("./resume/resume.pdf");
});



// form
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappMessage =
        `Hello, I am ${name}%0A` +
        `Email: ${email}%0A` +
        `Subject: ${subject}%0A` +
        `Message: ${message}`;

    const whatsappURL = `https://wa.me/918921769418?text=${whatsappMessage}`;

    // Fix: Use proper string interpolation in email body
    const emailBody = `Hi, I am ${name}.\nEmail: ${email}\n\nMessage:\n${message}`;
    const emailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=abhinkrishna418@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    if (confirm("Would you like to send this message via WhatsApp?\nClick Cancel to send via Email instead.")) {
        window.open(whatsappURL, "_blank");
    } else {
        window.open(emailURL, "_blank");
    }

    this.reset();
});







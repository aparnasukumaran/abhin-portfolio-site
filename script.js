ScrollReveal().reveal('.reveal-on-scroll', {
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false,
    viewFactor: 0.3,
    mobile: true      
});

ScrollReveal().reveal('.w3-jumbo,.main-heading', { origin: 'top' });
ScrollReveal().reveal('.w3-section', { origin: 'left' });
ScrollReveal().reveal('#submit-btn,#dwnld_btn', { origin: 'right' });



// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Graphic Designer.'],
    typeSpeed: 100,
    backSpeed: 100,
});


//  resume download
document.getElementById("dwnld_btn").addEventListener("click", function () {
    window.open("./resume/Abhinkrishnaus.resume.pdf", "_blank");
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

    const emailBody = `Hi, I am ${name}.\nEmail: ${email}\n\nMessage:\n${message}`;

    // Detect if mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Set email link depending on device
    let emailURL;
    if (isMobile) {
        emailURL = `mailto:abhinkrishna418@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    } else {
        emailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=abhinkrishna418@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    }

    if (confirm("Would you like to send this message via WhatsApp?\nClick Cancel to send via Email instead.")) {
        window.open(whatsappURL, "_blank");
    } else {
        window.open(emailURL, "_blank");
    }

    this.reset();
});







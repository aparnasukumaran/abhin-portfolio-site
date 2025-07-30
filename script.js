
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


// // form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `Hello, I am ${name}%0A` +
        `Email: ${email}%0A` +
        `Subject: ${subject}%0A` +
        `Message: ${message}`;

    const whatsappURL = `https://wa.me/918921769418?text=${whatsappMessage}`;
    const emailURL = `mailto:abhinkrishna418@gmail.com?subject=${subject}&body=Hi, I am {name}. Message: ${message} `;

    if (confirm("Would you like to send this message via Whatsapp? Click cancel to send via Email instead. ")) {
        window.open(whatsappURL, "_blank");
    } else {
        window.location.href = emailURL;
    }

    document.getElementById("contactForm").reset();
});


// dwnld_btn
document.getElementById("dwnld_btn").addEventListener("click",function(){
    window.open("./resume/resume.pdf");
});







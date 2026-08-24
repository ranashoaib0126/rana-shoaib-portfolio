console.log("WELCOME MY FIRST WEBSITE");


// ==========================
// PROJECT COUNTER
// ==========================

const project = document.getElementById("project");

if (project) {

    let count = 0;
    const target = 15;

    const interval = setInterval(() => {

        count++;

        project.textContent = count + "+";

        if (count >= target) {
            clearInterval(interval);
        }

    }, 100);

}


// ==========================
// CLIENT COUNTER
// ==========================

const client = document.getElementById("client");

if (client) {

    let count = 0;
    const target = 30;

    const interval = setInterval(() => {

        count++;

        client.textContent = count + "+";

        if (count >= target) {
            clearInterval(interval);
        }

    }, 70);

}


// ==========================
// LEARNING COUNTER
// ==========================

const learning = document.getElementById("learning");

if (learning) {

    let count = 0;
    const target = 100;

    const interval = setInterval(() => {

        count++;

        learning.textContent = count + "+";

        if (count >= target) {
            clearInterval(interval);
        }

    }, 20);

}


// ==========================
// PASSION COUNTER
// ==========================

const passion = document.getElementById("passion");

if (passion) {

    let count = 0;
    const target = 100;

    const interval = setInterval(() => {

        count++;

        passion.textContent = count + "%";

        if (count >= target) {
            clearInterval(interval);
        }

    }, 20);

}


// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLightMode =
            document.body.classList.contains("light-mode");

        themeBtn.textContent = isLightMode
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";

    });

}


// ==========================
// TYPING ANIMATION
// ==========================

const words = [
    "Sales Executive | TXEND",
    "Front-End Developer",
    "HTML | CSS | JavaScript",
    "B2B Sales Expert"
];

const typing = document.getElementById("typing");

if (typing) {

    let wordIndex = 0;

    typing.textContent = words[wordIndex];

    setInterval(() => {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        typing.style.opacity = "0";

        setTimeout(() => {

            typing.textContent = words[wordIndex];

            typing.style.opacity = "1";

        }, 250);

    }, 2000);

}


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            formMessage.textContent =
                "Please fill all fields.";

            return;
        }


        formMessage.textContent =
            "Message sent successfully!";

        contactForm.reset();

    });

}


// ==========================
// MOBILE HAMBURGER MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    // Close menu after clicking a navigation link

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// ==========================
// SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll(
    ".about, .skills, .services, .projects, #contact"
);


function showSections() {

    sections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;


        if (sectionTop < screenHeight - 100) {

            section.classList.add("show");

        }

    });

}


window.addEventListener("scroll", showSections);

showSections();


// ==========================
// BACK TO TOP ON PAGE LOAD
// ==========================

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});

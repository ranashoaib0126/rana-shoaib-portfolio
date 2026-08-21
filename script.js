console.log("WELCOME MY FIRST WEBSITE");


// ==========================
// PROJECT COUNTER
// ==========================

let project = document.getElementById("project");

if (project) {

    let count1 = 0;

    let interval1 = setInterval(function () {

        count1++;

        project.innerHTML = count1 + "+";

        if (count1 == 15) {
            clearInterval(interval1);
        }

    }, 100);

}


// ==========================
// CLIENT COUNTER
// ==========================

let client = document.getElementById("client");

if (client) {

    let count2 = 0;

    let interval2 = setInterval(function () {

        count2++;

        client.innerHTML = count2 + "+";

        if (count2 == 30) {
            clearInterval(interval2);
        }

    }, 70);

}


// ==========================
// LEARNING COUNTER
// ==========================

let learning = document.getElementById("learning");

if (learning) {

    let count3 = 0;

    let interval3 = setInterval(function () {

        count3++;

        learning.innerHTML = count3 + "+";

        if (count3 == 100) {
            clearInterval(interval3);
        }

    }, 20);

}


// ==========================
// PASSION COUNTER
// ==========================

let passion = document.getElementById("passion");

if (passion) {

    let count4 = 0;

    let interval4 = setInterval(function () {

        count4++;

        passion.innerHTML = count4 + "%";

        if (count4 == 100) {
            clearInterval(interval4);
        }

    }, 20);

}


// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.onclick = function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.innerHTML = "🌙 Dark Mode";

        } else {

            themeBtn.innerHTML = "☀️ Light Mode";

        }

    };

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

let wordIndex = 0;

const typing = document.getElementById("typing");

if (typing) {

    typing.textContent = words[0];

    setInterval(function () {

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        typing.textContent = words[wordIndex];

    }, 2000);

}


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const message = document.getElementById("message").value;


        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please fill all fields.";

        } else {

            formMessage.textContent = "Message sent successfully!";

            contactForm.reset();

        }

    });

}


// ==========================
// MOBILE HAMBURGER MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}
// ==========================
// SCROLL ANIMATION
// ==========================

const sections = document.querySelectorAll(
    ".about, .skills, .services, .projects, #contact"
);

function showSections() {

    sections.forEach(function(section) {

        const sectionTop = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", showSections);

showSections();
// ==========================
// WELCOME MESSAGE
// ==========================

console.log("WELCOME TO RANA SHOAIB PORTFOLIO");


// ==========================
// PROJECT COUNTER
// ==========================

function startCounter(id, target, speed, symbol) {

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    let count = 0;

    const interval = setInterval(function () {

        count++;

        element.textContent = count + symbol;

        if (count >= target) {

            clearInterval(interval);

        }

    }, speed);

}


startCounter("project", 15, 100, "+");

startCounter("client", 30, 70, "+");

startCounter("learning", 100, 20, "+");

startCounter("passion", 100, 20, "%");


// ==========================
// DARK / LIGHT MODE
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.textContent = "🌙 Dark Mode";

        } else {

            themeBtn.textContent = "☀️ Light Mode";

        }

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

let wordIndex = 0;

if (typing) {

    typing.textContent = words[0];

    setInterval(function () {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        typing.textContent = words[wordIndex];

    }, 2200);

}


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();


        if (name === "" || email === "" || message === "") {

            formMessage.textContent =
                "Please fill in all fields.";

            return;

        }


        formMessage.textContent =
            "Message sent successfully!";

        contactForm.reset();

    });

}


// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });


    // Close menu after clicking a link

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


// ==========================
// SCROLL ANIMATION
// ==========================

const animatedSections = document.querySelectorAll(
    ".about, .skills, .services, .projects, .contact"
);

function showSections() {

    animatedSections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 80) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", showSections);

showSections();

// ==========================
// WELCOME MESSAGE
// ==========================

console.log("WELCOME TO RANA SHOAIB PORTFOLIO");


// ==========================
// PROJECT COUNTER
// ==========================

function startCounter(id, target, speed, symbol) {

    const element = document.getElementById(id);

    if (!element) return;

    let count = 0;

    const interval = setInterval(() => {

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

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    if (themeBtn) {
        themeBtn.textContent = "🌙 Dark Mode";
    }

} else {

    if (themeBtn) {
        themeBtn.textContent = "☀️ Light Mode";
    }
}


if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeBtn.textContent = "🌙 Dark Mode";

            localStorage.setItem("theme", "light");

        } else {

            themeBtn.textContent = "☀️ Light Mode";

            localStorage.setItem("theme", "dark");
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
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (isDeleting) {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;
    }


    let speed = isDeleting ? 50 : 90;


    if (!isDeleting && charIndex === currentWord.length) {

        speed = 1500;

        isDeleting = true;
    }


    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 400;
    }


    setTimeout(typeEffect, speed);
}


if (typing) {
    typeEffect();
}


// ==========================
// CONTACT FORM
// ==========================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


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


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

        });

    });

}


// ==========================
// SCROLL REVEAL
// ==========================

const animatedSections = document.querySelectorAll(
    ".about, .skills, .services, .projects, .contact, .why-me"
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


// ==========================
// NAVBAR AUTO CLOSE
// ==========================

window.addEventListener("resize", function () {

    if (window.innerWidth > 700 && navLinks) {

        navLinks.classList.remove("active");

    }

});


// ==================================================
// INTERACTIVE PROJECT PREVIEW
// ==================================================


// Project information

const projectData = {

    1: {
        title: "Personal Portfolio Website",
        description:
            "A modern responsive personal portfolio website created to showcase my skills, experience, services and projects.",
        technologies:
            "HTML • CSS • JavaScript",
        status:
            "Completed"
    },

    2: {
        title: "Business Web Development",
        description:
            "Professional business website solutions focused on clean design, responsive layouts and better online presence.",
        technologies:
            "HTML • CSS • JavaScript • Responsive Design",
        status:
            "In Progress"
    },

    3: {
        title: "B2B Sales & Outreach",
        description:
            "B2B lead generation and LinkedIn outreach workflow focused on finding prospects, connecting with decision makers and generating business opportunities.",
        technologies:
            "LinkedIn • Lead Generation • B2B Sales",
        status:
            "Active"
    }

};


// Find project buttons

const projectButtons =
    document.querySelectorAll(".project-card .btn");


// Create popup

const modal = document.createElement("div");

modal.className = "project-modal";

modal.innerHTML = `

    <div class="project-modal-box">

        <button class="modal-close" id="modalClose">
            ×
        </button>

        <div class="modal-icon">
            💻
        </div>

        <h2 id="modalTitle">
            Project Title
        </h2>

        <p id="modalDescription">
            Project Description
        </p>

        <div class="modal-info">

            <div>
                <strong>Technologies</strong>
                <span id="modalTech">
                    HTML • CSS • JavaScript
                </span>
            </div>

            <div>
                <strong>Status</strong>
                <span id="modalStatus">
                    Completed
                </span>
            </div>

        </div>

        <button class="modal-action" id="modalAction">
            Close Preview
        </button>

    </div>

`;

document.body.appendChild(modal);


// Open project popup

projectButtons.forEach(function (button, index) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const projectNumber = index + 1;

        const project = projectData[projectNumber];

        if (!project) return;


        document.getElementById("modalTitle").textContent =
            project.title;

        document.getElementById("modalDescription").textContent =
            project.description;

        document.getElementById("modalTech").textContent =
            project.technologies;

        document.getElementById("modalStatus").textContent =
            project.status;


        modal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});


// Close popup function

function closeProjectModal() {

    modal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


// Close button

const modalClose =
    document.getElementById("modalClose");


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


// Close action button

const modalAction =
    document.getElementById("modalAction");


if (modalAction) {

    modalAction.addEventListener(
        "click",
        closeProjectModal
    );

}


// Close when clicking outside popup

modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeProjectModal();

    }

});


// Close with ESC key

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProjectModal();

    }

});


// ==========================
// PROJECT HOVER MESSAGE
// ==========================

projectButtons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "translateY(-3px)";

    });


    button.addEventListener("mouseleave", function () {

        button.style.transform = "translateY(0)";

    });

});


console.log("Interactive Project Preview Loaded 🚀");

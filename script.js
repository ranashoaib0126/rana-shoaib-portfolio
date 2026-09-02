/* =========================
   WELCOME MESSAGE
========================= */

console.log("Welcome to Rana Shoaib Portfolio 🚀");


/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

function startCounters() {

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute("data-target"));
        let count = 0;

        const speed = Math.max(10, 1500 / target);

        function updateCounter() {

            if (count < target) {

                count++;
                counter.textContent = count + "+";

                setTimeout(updateCounter, speed);

            } else {

                counter.textContent = target + "+";

            }
        }

        updateCounter();
    });
}

const counterSection = document.querySelector(".stats");

if (counterSection) {

    const observer = new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

                observer.disconnect();
            }
        },
        {
            threshold: 0.4
        }
    );

    observer.observe(counterSection);
}


/* =========================
   DARK / LIGHT MODE
========================= */

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeToggle.textContent = "🌙";

    } else {

        themeToggle.textContent = "☀️";
    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const isLight =
            document.body.classList.contains("light-mode");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        themeToggle.textContent =
            isLight ? "🌙" : "☀️";
    });
}


/* =========================
   PREMIUM TYPING ANIMATION
========================= */

const typingElement =
    document.getElementById("typing");

const roles = [
    "Sales Executive | TXEND",
    "Front-End Developer",
    "HTML | CSS | JavaScript",
    "B2B Sales Expert"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole =
        roles[roleIndex];


    /* TYPING */

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        /* FINISHED TYPING */

        if (
            charIndex ===
            currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }


    /* DELETING */

    } else {

        typingElement.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        /* FINISHED DELETING */

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (
                roleIndex ===
                roles.length
            ) {

                roleIndex = 0;
            }
        }
    }


    setTimeout(
        typeEffect,
        isDeleting ? 50 : 90
    );
}

typeEffect();


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;
            }


            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();
        }
    );
}


/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

            menuToggle.classList.toggle(
                "active"
            );
        }
    );


    /* CLOSE MENU AFTER CLICK */

    navLinks
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );
                }
            );
        });
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".about, .skills, .services, .projects, .contact, .why-me"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );
                }
            });
        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   NAVBAR RESIZE FIX
========================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 700 &&
            navLinks
        ) {

            navLinks.classList.remove(
                "active"
            );

            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );
            }
        }
    }
);


/* =========================
   PROJECT DATA
========================= */

const projectData = {

    1: {

        title: "Business Portfolio Website",

        description:
            "A modern and responsive business portfolio website designed to create a professional online presence and showcase services effectively.",

        tech:
            "HTML, CSS, JavaScript",

        status:
            "Completed",

        icon:
            "💼"
    },


    2: {

        title: "Sales Landing Page",

        description:
            "A conversion-focused landing page designed to present a business service clearly and encourage visitors to take action.",

        tech:
            "HTML, CSS, JavaScript",

        status:
            "Completed",

        icon:
            "🚀"
    },


    3: {

        title: "Interactive Web Interface",

        description:
            "An interactive front-end interface focused on clean design, smooth animations and a better user experience.",

        tech:
            "HTML, CSS, JavaScript",

        status:
            "In Progress",

        icon:
            "⚡"
    }
};


/* =========================
   PROJECT MODAL
========================= */

const projectButtons =
    document.querySelectorAll(
        ".project-card .project-btn"
    );


/* CREATE MODAL */

const modal =
    document.createElement("div");

modal.className =
    "project-modal";

modal.innerHTML = `

    <div class="project-modal-box">

        <button class="modal-close">
            ×
        </button>

        <div class="modal-icon" id="modalIcon">
            💼
        </div>

        <h2 id="modalTitle">
            Project Title
        </h2>

        <p id="modalDescription">
            Project description
        </p>

        <div class="modal-info">

            <div>

                <strong>
                    TECHNOLOGY
                </strong>

                <span id="modalTech">
                    HTML, CSS, JavaScript
                </span>

            </div>


            <div>

                <strong>
                    STATUS
                </strong>

                <span id="modalStatus">
                    Completed
                </span>

            </div>

        </div>


        <button
            class="modal-action"
            id="modalAction"
        >
            View Project
        </button>

    </div>

`;

document.body.appendChild(modal);


/* MODAL ELEMENTS */

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalTech =
    document.getElementById(
        "modalTech"
    );

const modalStatus =
    document.getElementById(
        "modalStatus"
    );

const modalIcon =
    document.getElementById(
        "modalIcon"
    );

const modalAction =
    document.getElementById(
        "modalAction"
    );

const modalClose =
    modal.querySelector(
        ".modal-close"
    );


/* OPEN MODAL */

projectButtons.forEach(
    (button, index) => {

        button.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const project =
                    projectData[index + 1];

                if (!project) return;


                modalTitle.textContent =
                    project.title;

                modalDescription.textContent =
                    project.description;

                modalTech.textContent =
                    project.tech;

                modalStatus.textContent =
                    project.status;

                modalIcon.textContent =
                    project.icon;


                modal.classList.add(
                    "active"
                );

                document.body.classList.add(
                    "modal-open"
                );
            }
        );
    }
);


/* CLOSE MODAL */

function closeProjectModal() {

    modal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "modal-open"
    );
}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );
}


/* CLOSE WHEN CLICKING OUTSIDE */

modal.addEventListener(
    "click",
    function (e) {

        if (
            e.target === modal
        ) {

            closeProjectModal();
        }
    }
);


/* CLOSE WITH ESC KEY */

document.addEventListener(
    "keydown",
    function (e) {

        if (
            e.key === "Escape" &&
            modal.classList.contains(
                "active"
            )
        ) {

            closeProjectModal();
        }
    }
);


/* =========================
   PROJECT HOVER EFFECT
========================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-8px)";
        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";
        }
    );
});


/* =========================


/* =========================
   SMOOTH NAVIGATION
========================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            function (e) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );

                if (
                    !targetId ||
                    targetId === "#"
                ) return;


                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        );
    });


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >=
                    sectionTop &&
                window.scrollY <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );
            }
        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );
            }
        });

    }
);


/* =========================
   PAGE LOAD
========================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);

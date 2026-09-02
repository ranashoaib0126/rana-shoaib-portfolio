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

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


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

            if (formMessage) {

                formMessage.textContent =
                    "Please fill in all fields.";

            }

            return;

        }


        if (formMessage) {

            formMessage.textContent =
                "Message sent successfully!";

        }

        contactForm.reset();

    });

}


// ==========================
// MOBILE MENU
// ==========================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


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

const animatedSections =
    document.querySelectorAll(
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


window.addEventListener(
    "scroll",
    showSections
);

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


// ==========================
// FIND PROJECT BUTTONS
// ==========================

const projectButtons =
    document.querySelectorAll(
        ".project-card .project-btn"
    );


// ==========================
// CREATE PROJECT MODAL
// ==========================

const modal =
    document.createElement("div");

modal.className =
    "project-modal";

modal.innerHTML = `

    <div class="project-modal-box">

        <button
            class="modal-close"
            id="modalClose"
        >
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

                <strong>
                    Technologies
                </strong>

                <span id="modalTech">
                    HTML • CSS • JavaScript
                </span>

            </div>

            <div>

                <strong>
                    Status
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
            Close Preview
        </button>

    </div>

`;

document.body.appendChild(modal);


// ==========================
// OPEN PROJECT MODAL
// ==========================

projectButtons.forEach(function (button, index) {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const projectNumber =
            index + 1;

        const project =
            projectData[projectNumber];

        if (!project) return;


        document.getElementById(
            "modalTitle"
        ).textContent =
            project.title;


        document.getElementById(
            "modalDescription"
        ).textContent =
            project.description;


        document.getElementById(
            "modalTech"
        ).textContent =
            project.technologies;


        document.getElementById(
            "modalStatus"
        ).textContent =
            project.status;


        modal.classList.add("active");

        document.body.classList.add(
            "modal-open"
        );

    });

});


// ==========================
// CLOSE PROJECT MODAL
// ==========================

function closeProjectModal() {

    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

}


const modalClose =
    document.getElementById(
        "modalClose"
    );


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );

}


const modalAction =
    document.getElementById(
        "modalAction"
    );


if (modalAction) {

    modalAction.addEventListener(
        "click",
        closeProjectModal
    );

}


modal.addEventListener(
    "click",
    function (event) {

        if (event.target === modal) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProjectModal();

        }

    }
);


// ==========================
// PROJECT BUTTON HOVER
// ==========================

projectButtons.forEach(function (button) {

    button.addEventListener(
        "mouseenter",
        function () {

            button.style.transform =
                "translateY(-3px)";

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            button.style.transform =
                "translateY(0)";

        }
    );

});


// ==================================================
// ASK SHOAIB ASSISTANT
// ==================================================

const assistantBtn =
    document.getElementById(
        "assistantBtn"
    );

const assistantPanel =
    document.getElementById(
        "assistantPanel"
    );

const assistantClose =
    document.getElementById(
        "assistantClose"
    );

const assistantInput =
    document.getElementById(
        "assistantInput"
    );

const assistantSend =
    document.getElementById(
        "assistantSend"
    );

const assistantMessages =
    document.getElementById(
        "assistantMessages"
    );

const assistantQuestions =
    document.querySelectorAll(
        ".assistant-question"
    );


// ==========================
// OPEN ASSISTANT
// ==========================

if (assistantBtn && assistantPanel) {

    assistantBtn.addEventListener(
        "click",
        function () {

            assistantPanel.classList.toggle(
                "active"
            );

            if (
                assistantPanel.classList.contains(
                    "active"
                )
            ) {

                setTimeout(function () {

                    if (assistantInput) {
                        assistantInput.focus();
                    }

                }, 200);

            }

        }
    );

}


// ==========================
// CLOSE ASSISTANT
// ==========================

if (assistantClose && assistantPanel) {

    assistantClose.addEventListener(
        "click",
        function () {

            assistantPanel.classList.remove(
                "active"
            );

        }
    );

}


// ==================================================
// ASSISTANT ANSWERS
// ==================================================

const assistantAnswers = {

    skills:
        "Shoaib's main skills include HTML, CSS, JavaScript, Front-End Development, B2B Sales and LinkedIn Outreach. 💻",

    services:
        "Shoaib offers Web Development, Front-End Development, B2B Sales and LinkedIn Outreach services. 🚀",

    sales:
        "Shoaib focuses on B2B prospecting, lead generation, LinkedIn outreach and connecting with decision makers. 📈",

    technology:
        "Shoaib currently works with HTML, CSS and JavaScript for modern and responsive websites. 🌐",

    contact:
        "You can contact Shoaib through the contact section of this portfolio. You can also use the phone and email details shown there. 📞",

    about:
        "Shoaib is a Sales Executive and Front-End Developer who combines web development with B2B sales and professional outreach. 👋"

};


// ==================================================
// ADD MESSAGE
// ==================================================

function addAssistantMessage(
    text,
    type
) {

    if (!assistantMessages) return;


    const message =
        document.createElement("div");


    if (type === "user") {

        message.className =
            "assistant-message user-message";

        message.innerHTML = `

            <div class="message-content">
                ${text}
            </div>

        `;

    } else {

        message.className =
            "assistant-message bot-message";

        message.innerHTML = `

            <div class="message-icon">
                🤖
            </div>

            <div class="message-content">
                ${text}
            </div>

        `;

    }


    assistantMessages.appendChild(
        message
    );


    assistantMessages.scrollTop =
        assistantMessages.scrollHeight;

}


// ==================================================
// GET ASSISTANT RESPONSE
// ==================================================

function getAssistantResponse(
    question
) {

    const text =
        question.toLowerCase();


    if (
        text.includes("skill") ||
        text.includes("html") ||
        text.includes("css") ||
        text.includes("javascript")
    ) {

        return assistantAnswers.skills;

    }


    if (
        text.includes("service") ||
        text.includes("offer") ||
        text.includes("website")
    ) {

        return assistantAnswers.services;

    }


    if (
        text.includes("sales") ||
        text.includes("b2b") ||
        text.includes("lead") ||
        text.includes("client")
    ) {

        return assistantAnswers.sales;

    }


    if (
        text.includes("technology") ||
        text.includes("tech") ||
        text.includes("develop")
    ) {

        return assistantAnswers.technology;

    }


    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("phone") ||
        text.includes("number")
    ) {

        return assistantAnswers.contact;

    }


    if (
        text.includes("about") ||
        text.includes("shoaib") ||
        text.includes("who are")
    ) {

        return assistantAnswers.about;

    }


    return "I can tell you about Shoaib's skills, services, B2B sales, technologies, contact information and background. Try asking about one of these. 😊";

}


// ==================================================
// SEND ASSISTANT MESSAGE
// ==================================================

function sendAssistantMessage() {

    if (!assistantInput) return;


    const question =
        assistantInput.value.trim();


    if (question === "") return;


    addAssistantMessage(
        question,
        "user"
    );


    assistantInput.value = "";


    setTimeout(function () {

        const answer =
            getAssistantResponse(
                question
            );

        addAssistantMessage(
            answer,
            "bot"
        );

    }, 400);

}


// ==========================
// SEND BUTTON
// ==========================

if (assistantSend) {

    assistantSend.addEventListener(
        "click",
        sendAssistantMessage
    );

}


// ==========================
// ENTER KEY
// ==========================

if (assistantInput) {

    assistantInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                sendAssistantMessage();

            }

        }
    );

}


// ==================================================
// QUICK QUESTIONS
// ==================================================

assistantQuestions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    button.dataset.question;


                if (!question) return;


                addAssistantMessage(
                    button.textContent.trim(),
                    "user"
                );


                setTimeout(
                    function () {

                        const answer =
                            assistantAnswers[
                                question
                            ] ||
                            "Sorry, I don't have an answer for that yet.";

                        addAssistantMessage(
                            answer,
                            "bot"
                        );

                    },
                    400
                );

            }
        );

    }
);


// ==================================================
// SCROLL PROGRESS BAR
// ==================================================

const scrollProgress =
    document.createElement("div");

scrollProgress.id =
    "scrollProgress";

document.body.appendChild(
    scrollProgress
);


// ==================================================
// BACK TO TOP
// ==================================================

const backToTop =
    document.createElement("button");

backToTop.id =
    "backToTop";

backToTop.innerHTML =
    "↑";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(
    backToTop
);


// ==========================
// UPDATE SCROLL UI
// ==========================

function updateScrollUI() {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    let progress = 0;


    if (documentHeight > 0) {

        progress =
            (scrollTop / documentHeight) * 100;

    }


    scrollProgress.style.width =
        progress + "%";


    if (scrollTop > 500) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }

}


window.addEventListener(
    "scroll",
    updateScrollUI
);

updateScrollUI();


// ==========================
// BACK TO TOP CLICK
// ==========================

backToTop.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ==========================
// FINAL
// ==========================

console.log(
    "RANA SHOAIB PORTFOLIO FULLY LOADED 🚀"
);

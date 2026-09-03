/* =========================================================
   RANA SHOAIB PORTFOLIO
   NEXT-LEVEL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR / MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    function closeMobileMenu() {
        if (!navLinks || !menuBtn) return;

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    }

    if (menuBtn && navLinks) {

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.addEventListener("click", (event) => {
            event.stopPropagation();

            const isOpen = navLinks.classList.toggle("active");

            menuBtn.textContent = isOpen ? "×" : "☰";
            menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                closeMobileMenu();
            });
        });
    }


    /* =====================================================
       DARK / LIGHT MODE
    ===================================================== */

    const themeBtn = document.getElementById("themeBtn");

    function applyTheme(theme) {
        const isLight = theme === "light";

        document.body.classList.toggle("light-mode", isLight);

        if (themeBtn) {
            themeBtn.textContent = isLight ? "☾ Dark" : "☀ Light";
            themeBtn.setAttribute(
                "aria-label",
                isLight ? "Switch to dark mode" : "Switch to light mode"
            );
        }
    }

    const savedTheme = localStorage.getItem("shoaib-theme");

    if (savedTheme === "light") {
        applyTheme("light");
    } else {
        applyTheme("dark");
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const isCurrentlyLight =
                document.body.classList.contains("light-mode");

            const newTheme = isCurrentlyLight ? "dark" : "light";

            applyTheme(newTheme);

            localStorage.setItem("shoaib-theme", newTheme);
        });
    }


    /* =====================================================
       TYPING ANIMATION
    ===================================================== */

    const typingElement = document.getElementById("typing");

    const typingWords = [
        "Sales Executive | TXEND",
        "Front-End Developer",
        "HTML | CSS | JavaScript",
        "B2B Sales Expert",
        "LinkedIn Outreach Specialist"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        if (!typingElement) return;

        const currentWord = typingWords[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 1600);

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % typingWords.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 45 : 80
        );
    }

    typeEffect();


    /* =====================================================
       3D PORTFOLIO WORLD
    ===================================================== */

    const portfolioWorld =
        document.querySelector(".portfolio-world");

    if (portfolioWorld) {

        const canTilt =
            window.matchMedia("(pointer: fine)").matches;

        if (canTilt) {

            portfolioWorld.addEventListener(
                "mousemove",
                (event) => {

                    const rect =
                        portfolioWorld.getBoundingClientRect();

                    if (!rect.width || !rect.height) return;

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 18;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -18;

                    portfolioWorld.style.setProperty(
                        "--mx",
                        `${rotateY}deg`
                    );

                    portfolioWorld.style.setProperty(
                        "--my",
                        `${rotateX}deg`
                    );
                }
            );

            portfolioWorld.addEventListener(
                "mouseleave",
                () => {

                    portfolioWorld.style.setProperty(
                        "--mx",
                        "0deg"
                    );

                    portfolioWorld.style.setProperty(
                        "--my",
                        "0deg"
                    );
                }
            );
        }
    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    const scrollProgress =
        document.getElementById("scrollProgress");

    function updateScrollProgress() {

        if (!scrollProgress) return;

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            documentHeight > 0
                ? (scrollTop / documentHeight) * 100
                : 0;

        scrollProgress.style.width =
            `${Math.min(100, Math.max(0, percentage))}%`;
    }

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        { passive: true }
    );

    updateScrollProgress();


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        function updateBackToTop() {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        }

        window.addEventListener(
            "scroll",
            updateBackToTop,
            { passive: true }
        );

        updateBackToTop();

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .skill-card, .service-card, .project-card, .why-card, .info-card, .contact-card, .counter-card"
        );

    const revealStyle =
        document.createElement("style");

    revealStyle.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;

    document.head.appendChild(revealStyle);

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );
                        }
                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach((element) => {

            element.style.opacity = "0";

            element.style.transform =
                "translateY(25px)";

            element.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";

            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("revealed");
        });
    }


    /* =====================================================
       COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(
            ".counter-card h3, .counter-card h1"
        );

    let countersStarted = false;

    function startCounters() {

        if (countersStarted) return;

        countersStarted = true;

        counters.forEach((counter) => {

            const target =
                Number(counter.dataset.target);

            if (!Number.isFinite(target)) return;

            let current = 0;

            const duration = 1300;

            const startTime =
                performance.now();

            const originalText =
                counter.textContent;

            const suffix =
                originalText.includes("%") ||
                target === 100
                    ? "%"
                    : "+";

            function animateCounter(currentTime) {

                const progress =
                    Math.min(
                        (currentTime - startTime) /
                        duration,
                        1
                    );

                const eased =
                    1 -
                    Math.pow(
                        1 - progress,
                        3
                    );

                current =
                    Math.floor(
                        eased * target
                    );

                counter.textContent =
                    `${current}${suffix}`;

                if (progress < 1) {

                    requestAnimationFrame(
                        animateCounter
                    );

                } else {

                    counter.textContent =
                        `${target}${suffix}`;
                }
            }

            requestAnimationFrame(
                animateCounter
            );
        });
    }

    const counterSection =
        document.querySelector(
            ".counter-container"
        );

    if (counterSection && "IntersectionObserver" in window) {

        const counterObserver =
            new IntersectionObserver(
                (entries) => {

                    if (entries[0].isIntersecting) {

                        startCounters();

                        counterObserver.disconnect();
                    }
                },
                {
                    threshold: 0.25
                }
            );

        counterObserver.observe(
            counterSection
        );

    } else if (counters.length) {

        startCounters();
    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    const formMessage =
        document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const nameInput =
                    document.getElementById("name");

                const emailInput =
                    document.getElementById("email");

                const messageInput =
                    document.getElementById("message");

                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";

                const message =
                    messageInput
                        ? messageInput.value.trim()
                        : "";

                if (!name || !email || !message) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please fill in all fields.";

                        formMessage.style.color =
                            "#e53935";
                    }

                    return;
                }

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(email)) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please enter a valid email.";

                        formMessage.style.color =
                            "#e53935";
                    }

                    return;
                }

                if (formMessage) {

                    formMessage.textContent =
                        "Message ready! Email service can be connected next.";

                    formMessage.style.color =
                        "#35c759";
                }

                contactForm.reset();
            }
        );
    }


    /* =====================================================
       PROJECT MODAL
    ===================================================== */

    const projectModal =
        document.getElementById("projectModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalAction =
        document.getElementById("modalAction");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalTech =
        document.getElementById("modalTech");

    const modalType =
        document.getElementById("modalType");

    const projectButtons =
        document.querySelectorAll(".project-btn");


    const projectData = [

        {
            title: "Portfolio Website",

            description:
                "A modern responsive portfolio experience combining front-end development, animations, interactive components and professional presentation.",

            tech:
                "HTML · CSS · JavaScript",

            type:
                "Personal Portfolio"
        },

        {
            title: "B2B Outreach System",

            description:
                "A structured business development workflow for finding companies, identifying decision makers, creating personalized messages and generating qualified opportunities.",

            tech:
                "ICP · LinkedIn · B2B Sales",

            type:
                "Sales System"
        },

        {
            title: "Interactive Web Experience",

            description:
                "A creative front-end concept focused on modern UI, responsive design, animations and interactive user experiences.",

            tech:
                "HTML · CSS · JavaScript",

            type:
                "Front-End Project"
        }
    ];


    function openProject(index) {

        const project =
            projectData[index];

        if (!project || !projectModal) return;

        if (modalTitle) {
            modalTitle.textContent =
                project.title;
        }

        if (modalDescription) {
            modalDescription.textContent =
                project.description;
        }

        if (modalTech) {
            modalTech.textContent =
                project.tech;
        }

        if (modalType) {
            modalType.textContent =
                project.type;
        }

        projectModal.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    function closeProject() {

        if (!projectModal) return;

        projectModal.classList.remove("active");

        document.body.style.overflow = "";
    }


    projectButtons.forEach(
        (button, index) => {

            button.addEventListener(
                "click",
                () => {
                    openProject(index);
                }
            );
        }
    );


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProject
        );
    }


    if (modalAction) {

        modalAction.addEventListener(
            "click",
            closeProject
        );
    }


    if (projectModal) {

        projectModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    projectModal
                ) {
                    closeProject();
                }
            }
        );
    }


    /* =====================================================
       ASK SHOAIB AI ASSISTANT
    ===================================================== */

    const assistantBtn =
        document.getElementById("assistantBtn");

    const assistantPanel =
        document.getElementById("assistantPanel");

    const assistantClose =
        document.getElementById("assistantClose");

    const assistantInput =
        document.getElementById("assistantInput");

    const assistantSend =
        document.getElementById("assistantSend");

    const assistantMessages =
        document.getElementById("assistantMessages");

    const assistantQuestions =
        document.querySelectorAll(
            ".assistant-question"
        );


    function toggleAssistant() {

        if (!assistantPanel) return;

        const isOpen =
            assistantPanel.classList.toggle("active");

        if (
            isOpen &&
            assistantInput
        ) {

            setTimeout(
                () => {
                    assistantInput.focus();
                },
                200
            );
        }
    }


    if (assistantBtn) {

        assistantBtn.addEventListener(
            "click",
            toggleAssistant
        );
    }


    if (assistantClose) {

        assistantClose.addEventListener(
            "click",
            () => {

                if (assistantPanel) {

                    assistantPanel.classList.remove(
                        "active"
                    );
                }
            }
        );
    }


    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;
    }


    function addAssistantMessage(
        text,
        isUser = false
    ) {

        if (!assistantMessages) return;

        const wrapper =
            document.createElement("div");

        wrapper.className =
            isUser
                ? "assistant-message user-message"
                : "assistant-message";

        const icon =
            isUser
                ? ""
                : '<div class="message-icon">🤖</div>';

        wrapper.innerHTML = `
            ${icon}

            <div class="message-content">
                ${escapeHTML(text)}
            </div>
        `;

        assistantMessages.appendChild(wrapper);

        assistantMessages.scrollTop =
            assistantMessages.scrollHeight;
    }


    function getAssistantAnswer(question) {

        const q =
            question.toLowerCase();


        if (
            q.includes("skill") ||
            q.includes("technology") ||
            q.includes("tech")
        ) {

            return (
                "Shoaib's core skills include HTML5, CSS3, JavaScript, responsive UI development, B2B sales, LinkedIn outreach and ICP research."
            );
        }


        if (
            q.includes("service") ||
            q.includes("offer") ||
            q.includes("do")
        ) {

            return (
                "Shoaib works with website development, landing pages, front-end UI, B2B sales, lead generation and LinkedIn outreach."
            );
        }


        if (
            q.includes("about") ||
            q.includes("who")
        ) {

            return (
                "Rana Shoaib is a Sales Executive and Front-End Developer who combines technology, business communication and B2B sales."
            );
        }


        if (
            q.includes("sales") ||
            q.includes("client") ||
            q.includes("lead")
        ) {

            return (
                "Shoaib focuses on B2B sales, ICP research, finding decision makers, personalized outreach, qualification and lead generation."
            );
        }


        if (
            q.includes("contact") ||
            q.includes("email") ||
            q.includes("phone")
        ) {

            return (
                "You can contact Shoaib at r.shoaib0126@gmail.com or +92 315 6109300."
            );
        }


        if (
            q.includes("project") ||
            q.includes("portfolio")
        ) {

            return (
                "The portfolio includes a personal portfolio website, a B2B outreach system and an interactive web experience."
            );
        }


        if (
            q.includes("html") ||
            q.includes("css") ||
            q.includes("javascript") ||
            q.includes(" js")
        ) {

            return (
                "Shoaib uses HTML for structure, CSS for responsive design and JavaScript for interaction and dynamic website features."
            );
        }


        return (
            "I can tell you about Shoaib's skills, services, projects, B2B sales experience, front-end development or contact information."
        );
    }


    function sendAssistantMessage() {

        if (!assistantInput) return;

        const question =
            assistantInput.value.trim();

        if (!question) return;

        addAssistantMessage(
            question,
            true
        );

        assistantInput.value = "";

        setTimeout(
            () => {

                const answer =
                    getAssistantAnswer(
                        question
                    );

                addAssistantMessage(
                    answer
                );

            },
            450
        );
    }


    if (assistantSend) {

        assistantSend.addEventListener(
            "click",
            sendAssistantMessage
        );
    }


    if (assistantInput) {

        assistantInput.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendAssistantMessage();
                }
            }
        );
    }


    assistantQuestions.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const question =
                        button.dataset.question;

                    if (!question) return;

                    addAssistantMessage(
                        question,
                        true
                    );

                    setTimeout(
                        () => {

                            addAssistantMessage(
                                getAssistantAnswer(
                                    question
                                )
                            );

                        },
                        400
                    );
                }
            );
        }
    );


    /* =====================================================
       CAREER QUEST
    ===================================================== */

    const startGameBtn =
        document.getElementById("startGameBtn");

    const gameStart =
        document.getElementById("gameStart");

    const missionSelection =
        document.getElementById("missionSelection");

    const challengeArea =
        document.getElementById("challengeArea");

    const gameResult =
        document.getElementById("gameResult");

    const gameXP =
        document.getElementById("gameXP");

    const gameQuestionNumber =
        document.getElementById("gameQuestionNumber");

    const gameMissionName =
        document.getElementById("gameMissionName");

    const gameQuestion =
        document.getElementById("gameQuestion");

    const gameOptions =
        document.getElementById("gameOptions");

    const gameFeedback =
        document.getElementById("gameFeedback");

    const finalXP =
        document.getElementById("finalXP");

    const finalRank =
        document.getElementById("finalRank");

    const restartGameBtn =
        document.getElementById("restartGameBtn");

    const missionButtons =
        document.querySelectorAll(".mission-card");


    const missions = {

        website: {

            name: "Web Developer",

            questions: [

                {
                    question:
                        "Which language is mainly used to structure a web page?",

                    options: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Python"
                    ],

                    answer: 0
                },

                {
                    question:
                        "Which CSS feature is commonly used to create responsive layouts?",

                    options: [
                        "Media Queries",
                        "Variables",
                        "Console",
                        "Arrays"
                    ],

                    answer: 0
                },

                {
                    question:
                        "Which language adds interactivity to websites?",

                    options: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "SQL"
                    ],

                    answer: 2
                }
            ]
        },


        client: {

            name: "Client Hunter",

            questions: [

                {
                    question:
                        "Who is usually an important person to contact when selling B2B services?",

                    options: [
                        "Random Employee",
                        "Decision Maker",
                        "Visitor",
                        "Competitor"
                    ],

                    answer: 1
                },

                {
                    question:
                        "What makes a cold message stronger?",

                    options: [
                        "Sending the same message to everyone",
                        "Writing a personalized relevant message",
                        "Using only emojis",
                        "Making it extremely long"
                    ],

                    answer: 1
                },

                {
                    question:
                        "What should you identify before trying to sell a service?",

                    options: [
                        "Fit and business need",
                        "Favorite color",
                        "Phone model",
                        "Office size"
                    ],

                    answer: 0
                }
            ]
        },


        leads: {

            name: "Lead Master",

            questions: [

                {
                    question:
                        "What does ICP stand for?",

                    options: [
                        "Ideal Customer Profile",
                        "Internet Client Process",
                        "Internal Company Plan",
                        "Ideal Coding Project"
                    ],

                    answer: 0
                },

                {
                    question:
                        "Which platform can be useful for B2B prospecting?",

                    options: [
                        "LinkedIn",
                        "Calculator",
                        "Notepad",
                        "Paint"
                    ],

                    answer: 0
                },

                {
                    question:
                        "What is a good approach for LinkedIn outreach?",

                    options: [
                        "Mass spam",
                        "Relevant personalized outreach",
                        "No research",
                        "Random messages"
                    ],

                    answer: 1
                }
            ]
        }
    };


    let selectedMission = null;
    let currentQuestion = 0;
    let currentXP = 0;


    function showGameScreen(screen) {

        [
            gameStart,
            missionSelection,
            challengeArea,
            gameResult
        ].forEach((element) => {

            if (element) {
                element.classList.add("hidden");
            }
        });

        if (screen) {
            screen.classList.remove("hidden");
        }
    }


    if (startGameBtn) {

        startGameBtn.addEventListener(
            "click",
            () => {

                currentXP = 0;
                currentQuestion = 0;
                selectedMission = null;

                showGameScreen(
                    missionSelection
                );
            }
        );
    }


    missionButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const mission =
                        button.dataset.mission;

                    if (!missions[mission]) return;

                    selectedMission =
                        missions[mission];

                    currentQuestion = 0;
                    currentXP = 0;

                    if (gameMissionName) {
                        gameMissionName.textContent =
                            selectedMission.name;
                    }

                    if (gameXP) {
                        gameXP.textContent =
                            currentXP;
                    }

                    showGameScreen(
                        challengeArea
                    );

                    loadQuestion();
                }
            );
        }
    );


    function loadQuestion() {

        if (
            !selectedMission ||
            currentQuestion >=
            selectedMission.questions.length
        ) {

            finishGame();

            return;
        }

        const question =
            selectedMission.questions[
                currentQuestion
            ];


        if (gameQuestionNumber) {

            gameQuestionNumber.textContent =
                `Question ${currentQuestion + 1} / ${selectedMission.questions.length}`;
        }


        if (gameQuestion) {

            gameQuestion.textContent =
                question.question;
        }


        if (gameFeedback) {

            gameFeedback.textContent = "";
            gameFeedback.style.color = "";
        }


        if (!gameOptions) return;

        gameOptions.innerHTML = "";


        question.options.forEach(
            (option, index) => {

                const button =
                    document.createElement("button");

                button.className =
                    "game-option";

                button.type = "button";

                button.textContent =
                    option;

                button.addEventListener(
                    "click",
                    () => {

                        answerQuestion(
                            index,
                            question.answer
                        );
                    }
                );

                gameOptions.appendChild(
                    button
                );
            }
        );
    }


    function answerQuestion(
        selectedAnswer,
        correctAnswer
    ) {

        if (!gameOptions) return;

        const optionButtons =
            gameOptions.querySelectorAll(
                ".game-option"
            );

        optionButtons.forEach(
            (button) => {
                button.disabled = true;
            }
        );


        if (
            selectedAnswer ===
            correctAnswer
        ) {

            currentXP += 10;

            if (gameXP) {
                gameXP.textContent =
                    currentXP;
            }

            if (gameFeedback) {

                gameFeedback.textContent =
                    "✓ Correct! +10 XP";

                gameFeedback.style.color =
                    "#35c759";
            }

            if (optionButtons[selectedAnswer]) {

                optionButtons[selectedAnswer]
                    .classList.add("correct");
            }

        } else {

            if (gameFeedback) {

                gameFeedback.textContent =
                    "✕ Not quite. Keep going!";

                gameFeedback.style.color =
                    "#e53935";
            }

            if (optionButtons[selectedAnswer]) {

                optionButtons[selectedAnswer]
                    .classList.add("wrong");
            }

            if (optionButtons[correctAnswer]) {

                optionButtons[correctAnswer]
                    .classList.add("correct");
            }
        }


        setTimeout(
            () => {

                currentQuestion++;

                loadQuestion();

            },
            1000
        );
    }


    function finishGame() {

        showGameScreen(
            gameResult
        );


        if (finalXP) {

            finalXP.textContent =
                `${currentXP} XP`;
        }


        let rank =
            "Beginner 🌱";


        if (currentXP >= 30) {

            rank =
                "Career Master 🏆";

        } else if (currentXP >= 20) {

            rank =
                "Pro Explorer 🚀";

        } else if (currentXP >= 10) {

            rank =
                "Rising Star ⭐";
        }


        if (finalRank) {

            finalRank.textContent =
                rank;
        }
    }


    if (restartGameBtn) {

        restartGameBtn.addEventListener(
            "click",
            () => {

                currentXP = 0;
                currentQuestion = 0;
                selectedMission = null;

                showGameScreen(
                    missionSelection
                );
            }
        );
    }


    /* =====================================================
       CINEMATIC SCROLL EFFECT
    ===================================================== */

    const cinematicSection =
        document.querySelector(
            ".cinematic-section"
        );

    const cinematicContent =
        document.querySelector(
            ".cinematic-content"
        );


    if (
        cinematicSection &&
        cinematicContent
    ) {

        function cinematicScroll() {

            const rect =
                cinematicSection.getBoundingClientRect();

            const windowHeight =
                window.innerHeight;

            const progress =
                Math.max(
                    0,
                    Math.min(
                        1,
                        1 -
                        (rect.top / windowHeight)
                    )
                );


            const move =
                progress * 35;

            const scale =
                0.92 +
                progress * 0.08;


            cinematicContent.style.transform =
                `translateY(${move}px) scale(${scale})`;

            cinematicContent.style.opacity =
                Math.min(
                    1,
                    0.35 + progress * 0.9
                );
        }


        window.addEventListener(
            "scroll",
            cinematicScroll,
            { passive: true }
        );

        cinematicScroll();
    }


    /* =====================================================
       PARALLAX HERO ORBITS
    ===================================================== */

    const hero =
        document.querySelector(".hero");

    if (hero) {

        const orbitOne =
            document.querySelector(".orbit-one");

        const orbitTwo =
            document.querySelector(".orbit-two");


        function updateParallax() {

            const scroll =
                window.scrollY;

            if (orbitOne) {

                orbitOne.style.transform =
                    `translateY(${scroll * 0.12}px)`;
            }

            if (orbitTwo) {

                orbitTwo.style.transform =
                    `translateY(${scroll * -0.08}px)`;
            }
        }


        window.addEventListener(
            "scroll",
            updateParallax,
            { passive: true }
        );

        updateParallax();
    }


    /* =====================================================
       ACTIVE NAV LINK
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "header[id], section[id]"
        );

    const navAnchors =
        document.querySelectorAll(
            ".nav-links a"
        );


    const activeNavStyle =
        document.createElement("style");

    activeNavStyle.textContent = `
        .nav-links a.active-nav {
            color: var(--red);
        }

        .nav-links a.active-nav::after {
            width: 100%;
        }
    `;

    document.head.appendChild(
        activeNavStyle
    );


    if (
        sections.length &&
        navAnchors.length &&
        "IntersectionObserver" in window
    ) {

        const activeObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                const id =
                                    entry.target.id;

                                navAnchors.forEach(
                                    (anchor) => {

                                        anchor.classList.remove(
                                            "active-nav"
                                        );

                                        if (
                                            anchor.getAttribute("href") ===
                                            `#${id}`
                                        ) {

                                            anchor.classList.add(
                                                "active-nav"
                                            );
                                        }
                                    }
                                );
                            }
                        }
                    );
                },
                {
                    threshold: 0.35
                }
            );


        sections.forEach(
            (section) => {

                activeObserver.observe(
                    section
                );
            }
        );
    }


    /* =====================================================
       CLOSE MOBILE MENU OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                navLinks &&
                menuBtn &&
                navLinks.classList.contains("active")
            ) {

                if (
                    !navLinks.contains(event.target) &&
                    !menuBtn.contains(event.target)
                ) {

                    closeMobileMenu();
                }
            }
        }
    );


    /* =====================================================
       KEYBOARD ACCESSIBILITY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMobileMenu();

                if (assistantPanel) {

                    assistantPanel.classList.remove(
                        "active"
                    );
                }

                closeProject();
            }
        }
    );


    /* =====================================================
       WELCOME MESSAGE
    ===================================================== */

    console.log(
        "%c RANA SHOAIB | PORTFOLIO ",
        "background:#e53935;color:#fff;font-size:16px;font-weight:bold;padding:8px;"
    );

    console.log(
        "🚀 Portfolio system initialized successfully."
    );

    console.log(
        "💻 Front-End Developer | 💼 Sales Executive"
    );

});

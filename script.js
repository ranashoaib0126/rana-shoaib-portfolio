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
            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
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
                isLight
                    ? "Switch to dark mode"
                    : "Switch to light mode"
            );
        }
    }

    const savedTheme = localStorage.getItem("shoaib-theme");

    applyTheme(savedTheme === "light" ? "light" : "dark");

    if (themeBtn) {
        themeBtn.addEventListener("click", (event) => {
            event.preventDefault();

            const light =
                document.body.classList.contains("light-mode");

            const newTheme = light ? "dark" : "light";

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

        const word = typingWords[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                word.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex >= word.length) {
                deleting = true;

                setTimeout(typeEffect, 1600);
                return;
            }
        } else {
            typingElement.textContent =
                word.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex <= 0) {
                charIndex = 0;
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
       NEXT-LEVEL 3D PORTFOLIO WORLD
    ===================================================== */

    const portfolioWorld =
        document.querySelector(".portfolio-world");

    if (portfolioWorld) {

        const finePointer =
            window.matchMedia("(pointer: fine)").matches;

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        let worldAnimation = null;

        const particles =
            portfolioWorld.querySelectorAll(
                ".world-particles span"
            );

        function animate3DWorld(time) {

            currentX +=
                (targetX - currentX) * 0.075;

            currentY +=
                (targetY - currentY) * 0.075;

            portfolioWorld.style.setProperty(
                "--mx",
                `${currentX.toFixed(2)}deg`
            );

            portfolioWorld.style.setProperty(
                "--my",
                `${currentY.toFixed(2)}deg`
            );

            particles.forEach((particle, index) => {

                const driftX =
                    Math.sin(
                        time / 1100 + index
                    ) * 3;

                const driftY =
                    Math.cos(
                        time / 1300 + index
                    ) * 3;

                particle.style.setProperty(
                    "--drift-x",
                    `${driftX.toFixed(2)}px`
                );

                particle.style.setProperty(
                    "--drift-y",
                    `${driftY.toFixed(2)}px`
                );
            });

            worldAnimation =
                requestAnimationFrame(animate3DWorld);
        }

        if (finePointer && !reducedMotion) {

            portfolioWorld.addEventListener(
                "pointermove",
                (event) => {

                    const rect =
                        portfolioWorld.getBoundingClientRect();

                    if (!rect.width || !rect.height) {
                        return;
                    }

                    const x =
                        (event.clientX - rect.left) /
                        rect.width - 0.5;

                    const y =
                        (event.clientY - rect.top) /
                        rect.height - 0.5;

                    targetX =
                        Math.max(
                            -8,
                            Math.min(8, x * 16)
                        );

                    targetY =
                        Math.max(
                            -8,
                            Math.min(8, y * -16)
                        );
                }
            );

            portfolioWorld.addEventListener(
                "pointerleave",
                () => {
                    targetX = 0;
                    targetY = 0;
                }
            );

            worldAnimation =
                requestAnimationFrame(
                    animate3DWorld
                );
        }
    }


    /* =====================================================
       PROJECT CARD 3D TILT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    if (
        projectCards.length &&
        window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        projectCards.forEach((card) => {

            card.addEventListener("pointermove", (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height - 0.5;

                card.style.setProperty(
                    "--rx",
                    `${y * -8}deg`
                );

                card.style.setProperty(
                    "--ry",
                    `${x * 8}deg`
                );

                card.style.setProperty(
                    "--px",
                    `${(x + 0.5) * 100}%`
                );

                card.style.setProperty(
                    "--py",
                    `${(y + 0.5) * 100}%`
                );
            });

            card.addEventListener("pointerleave", () => {

                card.style.setProperty(
                    "--rx",
                    "0deg"
                );

                card.style.setProperty(
                    "--ry",
                    "0deg"
                );
            });
        });
    }


    /* =====================================================
       SKILL CARD 3D TILT
    ===================================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");

    if (
        skillCards.length &&
        window.matchMedia("(pointer: fine)").matches &&
        !window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        skillCards.forEach((card) => {

            card.addEventListener("pointermove", (event) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    (event.clientX - rect.left) /
                    rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height - 0.5;

                card.style.setProperty(
                    "--rx",
                    `${y * -7}deg`
                );

                card.style.setProperty(
                    "--ry",
                    `${x * 7}deg`
                );
            });

            card.addEventListener("pointerleave", () => {

                card.style.setProperty(
                    "--rx",
                    "0deg"
                );

                card.style.setProperty(
                    "--ry",
                    "0deg"
                );
            });
        });
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

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            maxScroll > 0
                ? (scrollTop / maxScroll) * 100
                : 0;

        scrollProgress.style.width =
            `${Math.min(
                100,
                Math.max(0, percentage)
            )}%`;
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

            backToTop.classList.toggle(
                "show",
                window.scrollY > 500
            );
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
       ROBUST COUNTERS
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-target]"
        );

    const counterRunning =
        new WeakSet();

    function runCounter(counter) {

        if (counterRunning.has(counter)) {
            return;
        }

        const target =
            Number(counter.dataset.target);

        if (!Number.isFinite(target)) {
            return;
        }

        counterRunning.add(counter);

        const original =
            counter.textContent.trim();

        const suffix =
            counter.dataset.suffix !== undefined
                ? counter.dataset.suffix
                : (
                    original.includes("%") ||
                    target === 100
                        ? "%"
                        : "+"
                );

        const duration = 1400;
        const startTime = performance.now();

        function animateCounter(now) {

            const progress =
                Math.min(
                    (now - startTime) / duration,
                    1
                );

            const eased =
                1 - Math.pow(1 - progress, 3);

            const value =
                Math.round(target * eased);

            counter.textContent =
                `${value}${suffix}`;

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
    }

    if (counters.length) {

        if ("IntersectionObserver" in window) {

            const counterObserver =
                new IntersectionObserver(
                    (entries) => {

                        entries.forEach((entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                runCounter(
                                    entry.target
                                );

                                counterObserver.unobserve(
                                    entry.target
                                );
                            }
                        });
                    },
                    {
                        threshold: 0.2
                    }
                );

            counters.forEach((counter) => {
                counterObserver.observe(counter);
            });

        } else {

            counters.forEach(runCounter);
        }
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

                const name =
                    document.getElementById("name");

                const email =
                    document.getElementById("email");

                const message =
                    document.getElementById("message");

                if (
                    !name ||
                    !email ||
                    !message
                ) {
                    return;
                }

                const nameValue =
                    name.value.trim();

                const emailValue =
                    email.value.trim();

                const messageValue =
                    message.value.trim();

                if (
                    !nameValue ||
                    !emailValue ||
                    !messageValue
                ) {

                    if (formMessage) {
                        formMessage.textContent =
                            "Please fill in all fields.";
                    }

                    return;
                }

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!emailPattern.test(emailValue)) {

                    if (formMessage) {
                        formMessage.textContent =
                            "Please enter a valid email.";
                    }

                    return;
                }

                if (formMessage) {
                    formMessage.textContent =
                        "Message ready to send.";
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

    function closeProject() {

        if (!projectModal) return;

        projectModal.classList.remove("active");
        document.body.classList.remove(
            "modal-open"
        );
    }

    projectButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const card =
                    button.closest(".project-card");

                if (!card || !projectModal) {
                    return;
                }

                const title =
                    card.dataset.title ||
                    card.querySelector("h3")?.textContent ||
                    "Project";

                const description =
                    card.dataset.description ||
                    card.querySelector("p")?.textContent ||
                    "Portfolio project.";

                const tech =
                    card.dataset.tech ||
                    card.querySelector(".project-tech")?.textContent ||
                    "";

                const type =
                    card.dataset.type ||
                    "Web Project";

                if (modalTitle) {
                    modalTitle.textContent = title;
                }

                if (modalDescription) {
                    modalDescription.textContent =
                        description;
                }

                if (modalTech) {
                    modalTech.textContent = tech;
                }

                if (modalType) {
                    modalType.textContent = type;
                }

                projectModal.classList.add(
                    "active"
                );

                document.body.classList.add(
                    "modal-open"
                );
            }
        );
    });

    if (modalClose) {
        modalClose.addEventListener(
            "click",
            closeProject
        );
    }

    if (projectModal) {
        projectModal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === projectModal
                ) {
                    closeProject();
                }
            }
        );
    }

    if (modalAction) {
        modalAction.addEventListener(
            "click",
            () => {

                const projects =
                    document.getElementById(
                        "projects"
                    );

                closeProject();

                if (projects) {
                    projects.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );
    }


    /* =====================================================
       AI ASSISTANT
    ===================================================== */

    const assistantBtn =
        document.getElementById("assistantBtn");

    const assistantPanel =
        document.getElementById("assistantPanel");

    const assistantClose =
        document.getElementById("assistantClose");

    const assistantMessages =
        document.getElementById(
            "assistantMessages"
        );

    const assistantInput =
        document.getElementById(
            "assistantInput"
        );

    const assistantSend =
        document.getElementById(
            "assistantSend"
        );

    const assistantQuestions =
        document.querySelectorAll(
            ".assistant-question"
        );

    function openAssistant() {

        if (!assistantPanel) return;

        assistantPanel.classList.add(
            "active"
        );

        if (assistantInput) {
            setTimeout(
                () => assistantInput.focus(),
                200
            );
        }
    }

    function closeAssistant() {

        if (!assistantPanel) return;

        assistantPanel.classList.remove(
            "active"
        );
    }

    if (assistantBtn) {
        assistantBtn.addEventListener(
            "click",
            openAssistant
        );
    }

    if (assistantClose) {
        assistantClose.addEventListener(
            "click",
            closeAssistant
        );
    }

    function addAssistantMessage(
        text,
        type = "bot"
    ) {

        if (!assistantMessages) return;

        const message =
            document.createElement("div");

        message.className =
            `assistant-message ${type}`;

        message.textContent = text;

        assistantMessages.appendChild(
            message
        );

        assistantMessages.scrollTop =
            assistantMessages.scrollHeight;
    }

    function getAssistantReply(question) {

        const q =
            question.toLowerCase();

        if (
            q.includes("skill") ||
            q.includes("skills")
        ) {
            return "My core skills include HTML5, CSS3, JavaScript, UI Design, B2B Sales and LinkedIn Outreach.";
        }

        if (
            q.includes("service") ||
            q.includes("services")
        ) {
            return "I provide front-end development, UI-focused web solutions, B2B sales support and LinkedIn outreach.";
        }

        if (
            q.includes("project") ||
            q.includes("projects")
        ) {
            return "You can explore my projects in the Projects section. Each project highlights the technologies and work involved.";
        }

        if (
            q.includes("contact") ||
            q.includes("hire") ||
            q.includes("work")
        ) {
            return "You can contact me through the Contact section for collaboration, web development or B2B sales opportunities.";
        }

        if (
            q.includes("who") ||
            q.includes("about")
        ) {
            return "I'm Rana Shoaib, a Front-End Developer and Sales Executive at TXEND, focused on web development and B2B sales.";
        }

        return "I can help you learn more about my skills, services, projects, experience or how to contact me.";
    }

    function askAssistant(question) {

        const text =
            question.trim();

        if (!text) return;

        addAssistantMessage(
            text,
            "user"
        );

        if (assistantInput) {
            assistantInput.value = "";
        }

        setTimeout(() => {

            addAssistantMessage(
                getAssistantReply(text),
                "bot"
            );

        }, 450);
    }

    assistantQuestions.forEach(
        (question) => {

            question.addEventListener(
                "click",
                () => {
                    askAssistant(
                        question.textContent
                    );
                }
            );
        }
    );

    if (assistantSend) {

        assistantSend.addEventListener(
            "click",
            () => {

                if (assistantInput) {
                    askAssistant(
                        assistantInput.value
                    );
                }
            }
        );
    }

    if (assistantInput) {

        assistantInput.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" &&
                    !event.shiftKey
                ) {

                    event.preventDefault();

                    askAssistant(
                        assistantInput.value
                    );
                }
            }
        );
    }


    /* =====================================================
       CAREER QUEST
    ===================================================== */

    const gameStart =
        document.getElementById("gameStart");

    const missionSelection =
        document.getElementById(
            "missionSelection"
        );

    const challengeArea =
        document.getElementById(
            "challengeArea"
        );

    const gameResult =
        document.getElementById(
            "gameResult"
        );

    const missionCards =
        document.querySelectorAll(
            ".mission-card"
        );

    let currentMission = null;
    let currentQuestion = 0;
    let score = 0;

    const missions = {
        sales: [
            {
                question:
                    "What is the first step in B2B outreach?",
                options: [
                    "Send random messages",
                    "Find the right company and decision maker",
                    "Send a proposal immediately",
                    "Ask for payment"
                ],
                answer: 1
            },
            {
                question:
                    "What does ICP stand for?",
                options: [
                    "Ideal Customer Profile",
                    "Internal Company Process",
                    "Internet Contact Program",
                    "Ideal Campaign Plan"
                ],
                answer: 0
            }
        ],

        frontend: [
            {
                question:
                    "Which language is used to structure a webpage?",
                options: [
                    "CSS",
                    "HTML",
                    "SQL",
                    "Python"
                ],
                answer: 1
            },
            {
                question:
                    "Which language adds interactivity to webpages?",
                options: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "SQL"
                ],
                answer: 2
            }
        ]
    };

    function showElement(element) {

        if (!element) return;

        element.style.display = "";
        element.classList.add("active");
    }

    function hideElement(element) {

        if (!element) return;

        element.classList.remove("active");
    }

    function loadQuestion() {

        if (!challengeArea) return;

        const question =
            missions[currentMission][
                currentQuestion
            ];

        const questionElement =
            document.getElementById(
                "questionText"
            );

        const optionsContainer =
            document.getElementById(
                "options"
            );

        if (questionElement) {
            questionElement.textContent =
                question.question;
        }

        if (optionsContainer) {

            optionsContainer.innerHTML = "";

            question.options.forEach(
                (option, index) => {

                    const button =
                        document.createElement(
                            "button"
                        );

                    button.className =
                        "option-btn";

                    button.textContent =
                        option;

                    button.addEventListener(
                        "click",
                        () => {

                            if (
                                index ===
                                question.answer
                            ) {
                                score++;
                            }

                            currentQuestion++;

                            if (
                                currentQuestion <
                                missions[
                                    currentMission
                                ].length
                            ) {
                                loadQuestion();
                            } else {
                                finishMission();
                            }
                        }
                    );

                    optionsContainer.appendChild(
                        button
                    );
                }
            );
        }
    }

    function finishMission() {

        hideElement(challengeArea);
        showElement(gameResult);

        const scoreElement =
            document.getElementById(
                "finalScore"
            );

        if (scoreElement) {
            scoreElement.textContent =
                `${score}/${missions[currentMission].length}`;
        }
    }

    missionCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                currentMission =
                    card.dataset.mission ||
                    card.dataset.type ||
                    "frontend";

                if (
                    !missions[currentMission]
                ) {
                    currentMission = "frontend";
                }

                currentQuestion = 0;
                score = 0;

                hideElement(gameStart);
                hideElement(missionSelection);
                hideElement(gameResult);

                showElement(challengeArea);

                loadQuestion();
            }
        );
    });


    /* =====================================================
       CINEMATIC SCROLL
    ===================================================== */

    const cinematic =
        document.querySelector(
            ".cinematic-section"
        );

    const cinematicContent =
        cinematic?.querySelector(
            ".cinematic-content"
        );

    if (cinematic && cinematicContent) {

        function cinematicScroll() {

            const rect =
                cinematic.getBoundingClientRect();

            const height =
                cinematic.offsetHeight;

            const viewport =
                window.innerHeight;

            const progress =
                Math.min(
                    1,
                    Math.max(
                        0,
                        (viewport - rect.top) /
                        (height + viewport)
                    )
                );

            const move =
                (progress - 0.5) * 35;

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
       HERO ORBIT PARALLAX
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
                                            anchor.getAttribute(
                                                "href"
                                            ) === `#${id}`
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

        sections.forEach((section) => {
            activeObserver.observe(section);
        });
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
                navLinks.classList.contains(
                    "active"
                )
            ) {

                if (
                    !navLinks.contains(
                        event.target
                    ) &&
                    !menuBtn.contains(
                        event.target
                    )
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
                closeAssistant();
                closeProject();
            }
        }
    );


    /* =====================================================
       CONSOLE
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

/* ========================================= */
/* KUSHU BIRTHDAY WEBSITE */
/* ========================================= */

/* ========================================= */
/* OPENING SCREEN */
/* ========================================= */

const openButton = document.getElementById("openButton");
const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");

if (openButton) {
    openButton.addEventListener("click", () => {
        birthdayExplosion();

        openingScreen.classList.add("hidden");

        setTimeout(() => {
            mainContent.classList.remove("hidden");
            mainContent.classList.add("visible");
            window.scrollTo(0, 0);
        }, 500);
    });
}


/* ========================================= */
/* TRAIT CARDS */
/* ========================================= */

const traitCards = document.querySelectorAll(".trait-card");

traitCards.forEach(card => {
    card.addEventListener("click", () => {
        const message = card.dataset.message;

        if (message) {
            showMemoryModal(
                card.querySelector("h3")?.textContent || "Kushu",
                message
            );
        }
    });
});


/* ========================================= */
/* MEMORY GARDEN */
/* ========================================= */

const memoryFlowers = document.querySelectorAll(".memory-flower");

const memoryMessages = {
    sleeping:
        "Those nights when we would just leave the chat open while sleeping... somehow doing absolutely nothing together still felt like being close. ♡",

    series:
        "Downloading series, uploading them to Drive, making sure you had something to watch... tiny things, but I genuinely liked doing them for you.",

    questions:
        "All those random questions and stupid little conversations. Half the time I probably had no idea where the conversation was going either. 😂",

    like:
        "That one little \"I like you\" meant way more to me than you probably realised. I still remember it.",

    smile:
        "Sometimes you don't even have to do anything. Just having you around somehow makes my day a little better."
};

memoryFlowers.forEach(flower => {
    flower.addEventListener("click", () => {
        const key = flower.dataset.memory;
        const message = memoryMessages[key];

        if (message) {
            showMemoryModal(
                "A little Kushu memory ♡",
                message
            );
        }
    });
});


/* ========================================= */
/* MEMORY MODAL */
/* ========================================= */

const memoryModal = document.getElementById("memoryModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

function showMemoryModal(title, text) {
    if (!memoryModal) return;

    if (modalTitle) modalTitle.textContent = title;
    if (modalText) modalText.textContent = text;

    memoryModal.classList.remove("hidden");
}

if (modalClose) {
    modalClose.addEventListener("click", () => {
        memoryModal.classList.add("hidden");
    });
}

if (memoryModal) {
    memoryModal.addEventListener("click", event => {
        if (event.target === memoryModal) {
            memoryModal.classList.add("hidden");
        }
    });
}


/* ========================================= */
/* HAMSTERS */
/* ========================================= */

const hamsters = document.querySelectorAll(".hamster");

const hamsterMessages = {
    1: "Tiny hamster says: you are very, very loved. 🐹♡",
    2: "This hamster has been assigned to protect your happiness.",
    3: "He knows about the mhmm. He will not tell anyone.",
    4: "Emergency hamster delivery! One friendship. One smile. No refunds.",
    5: "This hamster would absolutely share dal chawal with you.",
    6: "He has decided that you are cute. His decision is final.",
    7: "A hamster has entered the chat. Please remain calm.",
    8: "This one is just here because you like hamsters. Valid reason.",
    9: "He heard you say shutup and immediately became concerned.",
    10: "Halfway through the hamster department. Still no signs of professionalism.",
    11: "This hamster has one job: make Kushu smile.",
    12: "He has watched Demon Slayer and now thinks he is extremely powerful.",
    13: "A tiny creature carrying a very large amount of affection.",
    14: "This hamster would probably panic if you said 'shutup' to him.",
    15: "Certified Kushu appreciation hamster. Officially licensed.",
    16: "He doesn't understand the situation, but he supports you anyway.",
    17: "Panda hamster? No. Hamster hamster. Still adorable.",
    18: "One more hamster after this. The department is almost finished.",
    19: "This is hamster number 19. Yes, I remembered you. 🐹",
    20: "The final hamster has arrived. Happy Birthday, Kushu. ♡"
};


hamsters.forEach((hamster, index) => {

    hamster.addEventListener("click", () => {

        const number = String(index + 1);

        const message =
            hamsterMessages[number] ||
            "This hamster forgot what he was supposed to say. 🐹";


        /* Remove any old hamster dialogue */

        document.querySelectorAll(".hamster-dialogue").forEach(dialogue => {
            dialogue.remove();
        });


        /* Create the dialogue */

        const dialogue = document.createElement("div");

        dialogue.className = "hamster-dialogue";

        dialogue.textContent = message;


        /* Position it near the hamster */

        const rect = hamster.getBoundingClientRect();

        dialogue.style.position = "fixed";

        dialogue.style.left =
            `${rect.left + rect.width / 2}px`;

        dialogue.style.top =
            `${rect.top - 15}px`;

        dialogue.style.transform =
            "translate(-50%, -100%)";

        dialogue.style.zIndex = "10001";

        dialogue.style.maxWidth = "280px";

        dialogue.style.padding =
            "12px 16px";

        dialogue.style.borderRadius =
            "18px";

        dialogue.style.background =
            "white";

        dialogue.style.color =
            "#5d3b50";

        dialogue.style.fontSize =
            "14px";

        dialogue.style.lineHeight =
            "1.4";

        dialogue.style.textAlign =
            "center";

        dialogue.style.boxShadow =
            "0 8px 25px rgba(0,0,0,0.12)";

        dialogue.style.border =
            "2px solid #f3c6dc";

        dialogue.style.pointerEvents =
            "none";

        dialogue.style.opacity =
            "0";

        dialogue.style.transition =
            "opacity 0.2s ease, transform 0.2s ease";


        document.body.appendChild(dialogue);


        /* Little pop-in animation */

        requestAnimationFrame(() => {

            dialogue.style.opacity = "1";

            dialogue.style.transform =
                "translate(-50%, -110%)";
        });


        /* Make hamster bounce */

        hamster.animate(
            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(1.12) rotate(-4deg)"
                },
                {
                    transform: "scale(1.08) rotate(4deg)"
                },
                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );


        /* Remove dialogue after a few seconds */

        setTimeout(() => {

            dialogue.style.opacity = "0";

            dialogue.style.transform =
                "translate(-50%, -100%)";

            setTimeout(() => {
                dialogue.remove();
            }, 250);

        }, 3500);

    });

});


/* ========================================= */
/* LETTER */
/* ========================================= */

const letterSection = document.querySelector(".letter-section");

if (letterSection) {
    const letter = letterSection.querySelector(".letter");

    if (letter) {
        letter.addEventListener("click", () => {
            createHeart(
                window.innerWidth / 2,
                window.innerHeight / 2
            );
        });
    }
}


/* ========================================= */
/* QUESTION GAME */
/* ========================================= */

const questionStart = document.getElementById("questionStart");
const questionIntro = document.getElementById("questionIntro");
const questionGame = document.getElementById("questionGame");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const yesResult = document.getElementById("yesResult");
const noResult = document.getElementById("noResult");

const answerArea = document.querySelector(".answer-area");


/* ----------------------------------------- */
/* START QUESTION */
/* ----------------------------------------- */

if (questionStart) {
    questionStart.addEventListener("click", () => {
        questionIntro.classList.add("hidden");

        if (questionGame) {
            questionGame.classList.remove("hidden");
        }

        setupNoButton();
    });
}


/* ========================================= */
/* YES BUTTON */
/* ========================================= */

if (yesButton) {
    yesButton.addEventListener("click", () => {

        if (questionGame) {
            questionGame.classList.add("hidden");
        }

        if (yesResult) {
            yesResult.classList.remove("hidden");
        }

        birthdayExplosion();

        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createHeart(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 100);
        }
    });
}


/* ========================================= */
/* NO BUTTON */
/* ========================================= */

let noButtonReady = false;
let lastNoMove = 0;

function setupNoButton() {

    if (!noButton || noButtonReady) return;

    noButtonReady = true;

    /*
        IMPORTANT:

        The NO button is removed from the answer box
        and positioned relative to the entire browser window.
    */

    noButton.style.position = "fixed";
    noButton.style.zIndex = "9999";

    moveNoButton(true);


    /* ------------------------------------- */
    /* DESKTOP */
/* ------------------------------------- */

    document.addEventListener("mousemove", event => {

        if (!noButton || noButton.classList.contains("hidden")) {
            return;
        }

        const rect = noButton.getBoundingClientRect();

        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        const dx = event.clientX - buttonCenterX;
        const dy = event.clientY - buttonCenterY;

        const distance = Math.sqrt(
            dx * dx + dy * dy
        );

        /*
            If the mouse comes within 120px,
            RUN.
        */

        if (distance < 120) {
            moveNoButton();
        }
    });


    /* ------------------------------------- */
    /* CLICK */
/* ------------------------------------- */

    noButton.addEventListener("click", event => {

        /*
            The button NEVER accepts the click.
            It immediately escapes.
        */

        event.preventDefault();
        event.stopPropagation();

        moveNoButton();
    });


    /* ------------------------------------- */
    /* TOUCH */
/* ------------------------------------- */

    noButton.addEventListener("touchstart", event => {

        event.preventDefault();
        event.stopPropagation();

        moveNoButton();
    }, {
        passive: false
    });
}


/* ========================================= */
/* MOVE NO BUTTON */
/* ========================================= */

function moveNoButton(initial = false) {

    if (!noButton) return;

    const now = Date.now();

    /*
        Prevent it from teleporting hundreds of times
        in the same millisecond when the cursor is close.
    */

    if (!initial && now - lastNoMove < 180) {
        return;
    }

    lastNoMove = now;


    const buttonWidth = noButton.offsetWidth || 100;
    const buttonHeight = noButton.offsetHeight || 50;

    const padding = 25;


    /*
        FULL SCREEN movement.

        The button can now appear anywhere on the
        visible screen.
    */

    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;

    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;


    let randomX =
        padding +
        Math.random() * Math.max(1, maxX - padding);

    let randomY =
        padding +
        Math.random() * Math.max(1, maxY - padding);


    /*
        Make sure it doesn't accidentally appear
        directly underneath the cursor.
    */

    const mouseX = window.innerWidth / 2;
    const mouseY = window.innerHeight / 2;

    if (!initial) {

        const distanceFromMouse = Math.sqrt(
            Math.pow(randomX - mouseX, 2) +
            Math.pow(randomY - mouseY, 2)
        );

        if (distanceFromMouse < 180) {

            randomX =
                padding +
                Math.random() * Math.max(1, maxX - padding);

            randomY =
                padding +
                Math.random() * Math.max(1, maxY - padding);
        }
    }


    noButton.style.position = "fixed";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    noButton.style.transition =
        "left 0.12s ease, top 0.12s ease";

    /*
        Little shake when it escapes.
    */

    noButton.animate(
        [
            {
                transform: "scale(1) rotate(0deg)"
            },
            {
                transform: "scale(1.08) rotate(-4deg)"
            },
            {
                transform: "scale(1) rotate(4deg)"
            },
            {
                transform: "scale(1) rotate(0deg)"
            }
        ],
        {
            duration: 180,
            easing: "ease-out"
        }
    );
}


/* ========================================= */
/* WINDOW RESIZE */
/* ========================================= */

window.addEventListener("resize", () => {

    if (!noButton || !noButtonReady) {
        return;
    }

    /*
        If the screen changes size, immediately
        relocate the NO button so it cannot end
        up outside the viewport.
    */

    moveNoButton(true);
});


/* ========================================= */
/* CURSOR HEART */
/* ========================================= */

const cursorHeart = document.getElementById("cursorHeart");

if (cursorHeart) {

    document.body.style.cursor = "none";

    cursorHeart.style.opacity = "1";
    cursorHeart.style.position = "fixed";
    cursorHeart.style.pointerEvents = "none";
    cursorHeart.style.zIndex = "10000";

    document.addEventListener("mousemove", event => {

        cursorHeart.style.left = `${event.clientX}px`;
        cursorHeart.style.top = `${event.clientY}px`;
    });
}


/* ========================================= */
/* CLICK HEARTS */
/* ========================================= */

document.addEventListener("click", event => {

    /*
        Don't create extra hearts when clicking
        the NO button.
    */

    if (event.target === noButton) {
        return;
    }

    createHeart(
        event.clientX,
        event.clientY
    );
});


function createHeart(x, y) {

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    heart.textContent = "♡";

    heart.style.position = "fixed";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9998";
    heart.style.opacity = "1";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(0.5)",
                opacity: 0
            },
            {
                transform: "translate(-50%, -70%) scale(1.2)",
                opacity: 1
            },
            {
                transform: "translate(-50%, -130%) scale(0.8)",
                opacity: 0
            }
        ],
        {
            duration: 900,
            easing: "ease-out"
        }
    ).onfinish = () => {
        heart.remove();
    };
}


/* ========================================= */
/* BIRTHDAY EXPLOSION */
/* ========================================= */

function birthdayExplosion() {

    const symbols = [
        "♡",
        "♥",
        "🎀",
        "🐹",
        "✦",
        "♡"
    ];

    for (let i = 0; i < 20; i++) {

        const particle = document.createElement("div");

        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        particle.style.position = "fixed";
        particle.style.left =
            `${Math.random() * window.innerWidth}px`;

        particle.style.top =
            `${Math.random() * window.innerHeight}px`;

        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9998";
        particle.style.fontSize =
            `${18 + Math.random() * 18}px`;

        particle.style.opacity = "1";

        document.body.appendChild(particle);

        particle.animate(
            [
                {
                    transform: "translateY(0) scale(0.5) rotate(0deg)",
                    opacity: 0
                },
                {
                    transform: "translateY(-50px) scale(1.2) rotate(15deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(-${100 + Math.random() * 150}px)
                         scale(0.7)
                         rotate(${Math.random() * 180 - 90}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 1400 + Math.random() * 700,
                easing: "ease-out"
            }
        ).onfinish = () => {
            particle.remove();
        };
    }
}


/* ========================================= */
/* CUSTOM LEAVE POPUP */
/* ========================================= */

function showLeavePopup() {

    const popup = document.getElementById("leavePopup");

    if (!popup) return;

    popup.classList.remove("hidden");
}


/* ========================================= */
/* ESC KEY FOR MODAL */
/* ========================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (memoryModal) {
            memoryModal.classList.add("hidden");
        }
    }
});

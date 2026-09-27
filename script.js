/* =========================================
   KUSHU'S BIRTHDAY WEBSITE
========================================= */


/* =========================================
   OPENING SCREEN
========================================= */

const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");
const openButton = document.getElementById("openButton");

if (openButton) {

    openButton.addEventListener("click", () => {

        if (openingScreen) {
            openingScreen.classList.add("hidden");
        }

        setTimeout(() => {

            if (mainContent) {
                mainContent.classList.remove("hidden");
                mainContent.classList.add("visible");
            }

        }, 300);

        birthdayExplosion();

    });

}


/* =========================================
   TRAIT CARDS
========================================= */

const traitCards =
    document.querySelectorAll(".trait-card");

const traitResponse =
    document.getElementById("traitResponse");


traitCards.forEach(card => {

    card.addEventListener("click", () => {

        const response =
            card.dataset.message;

        if (traitResponse && response) {

            traitResponse.textContent =
                response;

            traitResponse.classList.remove("show");

            setTimeout(() => {

                traitResponse.classList.add("show");

            }, 50);

        }

    });

});


/* =========================================
   MEMORY GARDEN
========================================= */

const memoryFlowers =
    document.querySelectorAll(".memory-flower");

const memoryModal =
    document.getElementById("memoryModal");

const modalClose =
    document.getElementById("modalClose");

const modalIcon =
    document.getElementById("modalIcon");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");


const memories = {

    sleeping: {

        icon: "🌙",

        title: "The sleepy little moments",

        text:
            "Those times when we just left the chat open and eventually fell asleep... there was something strangely comforting about knowing you were there."

    },

    series: {

        icon: "📺",

        title: "The series department",

        text:
            "Downloading series, putting them on Drive, and basically becoming an extremely unofficial streaming service because I wanted you to have something nice to watch."

    },

    questions: {

        icon: "🌸",

        title: "Your random questions",

        text:
            "Some of the cutest conversations came from the completely random things you asked. Somehow even the most ordinary conversations became memorable."

    },

    like: {

        icon: "♡",

        title: "That one sentence",

        text:
            "When you actually said 'I like you'... yeah. That sentence definitely got permanently archived in my brain."

    },

    smile: {

        icon: "☀️",

        title: "Just you being there",

        text:
            "Sometimes you don't even have to do anything. Somehow just knowing you're around is enough to make an ordinary day feel a little better."

    }

};


memoryFlowers.forEach(flower => {

    flower.addEventListener("click", () => {

        const memoryName =
            flower.dataset.memory;

        const memory =
            memories[memoryName];

        if (!memory || !memoryModal) {
            return;
        }

        if (modalIcon) {
            modalIcon.textContent =
                memory.icon;
        }

        if (modalTitle) {
            modalTitle.textContent =
                memory.title;
        }

        if (modalText) {
            modalText.textContent =
                memory.text;
        }

        /*
            IMPORTANT:
            Remove "hidden" so the modal
            can actually become visible.
        */

        memoryModal.classList.remove("hidden");
        memoryModal.classList.add("show");

    });

});


if (modalClose) {

    modalClose.addEventListener("click", () => {

        if (memoryModal) {

            memoryModal.classList.remove("show");
            memoryModal.classList.add("hidden");

        }

    });

}


if (memoryModal) {

    memoryModal.addEventListener("click", event => {

        if (event.target === memoryModal) {

            memoryModal.classList.remove("show");
            memoryModal.classList.add("hidden");

        }

    });

}


/* =========================================
   20 HAMSTERS
========================================= */

const hamsterMessages = {

    mhmm:
        "mhmm... ;_;",

    shutup:
        "SHUTUP 😳",

    birthday:
        "HAPPY BIRTHDAY KUSHU!! 🎀",

    business:
        "I have important hamster business to attend to.",

    equation:
        "Hamster + Kushu = excessive cuteness.",

    dal:
        "DAL CHAWAL. THIS IS NOT A DISCUSSION. 🍚",

    gothic:
        "Cute on the outside. Gothic hamster on the inside. 🖤",

    panda:
        "I would like to formally request a panda friend. 🐼",

    dog:
        "WOOF. I have been informed that Kushu likes dogs.",

    overthinking:
        "STOP OVERTHINKING. THE HAMSTER HAS SPOKEN. 🐹",

    cute:
        "This hamster has officially classified you as cute.",

    sleep:
        "shhh... hamster is sleepy... 💤",

    series:
        "Did somebody say another series? 👀",

    hehe:
        "hehe. 🎀",

    flustered:
        "WARNING: KUSHU IS FLUSTERED. EVACUATE IMMEDIATELY.",

    love:
        "Love department says: you're very important. ♡",

    important:
        "Extremely important hamster meeting in progress.",

    tiny:
        "tiny hamster. gigantic responsibilities.",

    queen:
        "The hamster council recognizes the birthday queen. 👑",

    final:
        "Happy birthday, Kushu. ♡ From all 20 of us."

};


const hamsters =
    document.querySelectorAll(".hamster");

let foundHamsters =
    new Set();


hamsters.forEach(hamster => {

    hamster.addEventListener("click", () => {

        const hamsterType =
            hamster.dataset.hamster;

        const message =
            hamsterMessages[hamsterType];

        if (message) {
            showHamsterMessage(message);
        }

        hamster.classList.add("found");

        foundHamsters.add(hamsterType);

        if (foundHamsters.size === 20) {

            setTimeout(() => {

                showHamsterMessage(
                    "YOU FOUND ALL 20 HAMSTERS. THE COUNCIL APPROVES. 🐹🎀"
                );

            }, 400);

        }

    });

});


function showHamsterMessage(message) {

    let messageBox =
        document.getElementById("hamsterMessage");

    if (!messageBox) {

        messageBox =
            document.createElement("div");

        messageBox.id =
            "hamsterMessage";

        document.body.appendChild(
            messageBox
        );

    }

    messageBox.textContent =
        message;

    messageBox.classList.remove("show");

    setTimeout(() => {

        messageBox.classList.add("show");

    }, 20);

    clearTimeout(
        window.hamsterMessageTimeout
    );

    window.hamsterMessageTimeout =
        setTimeout(() => {

            messageBox.classList.remove("show");

        }, 2500);

}


/* =========================================
   CURSOR HEART EFFECT
========================================= */

document.addEventListener("mousemove", event => {

    if (Math.random() > 0.92) {

        createHeart(
            event.clientX,
            event.clientY
        );

    }

});


document.addEventListener("click", event => {

    createHeart(
        event.clientX,
        event.clientY
    );

});


function createHeart(x, y) {

    const heart =
        document.createElement("span");

    heart.className =
        "cursor-heart";

    heart.textContent =
        Math.random() > 0.5
            ? "♡"
            : "♥";

    heart.style.left =
        `${x}px`;

    heart.style.top =
        `${y}px`;

    document.body.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 1000);

}


/* =========================================
   BIRTHDAY EXPLOSION
========================================= */

function birthdayExplosion() {

    const symbols = [

        "♡",
        "♥",
        "🎀",
        "🐹",
        "🌸",
        "✨",
        "💗",
        "⭐"

    ];


    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const particle =
                document.createElement("div");

            particle.className =
                "birthday-particle";

            particle.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            particle.style.position =
                "fixed";

            particle.style.pointerEvents =
                "none";

            particle.style.zIndex =
                "9998";

            particle.style.left =
                `${Math.random() * 100}vw`;

            particle.style.top =
                `${Math.random() * 100}vh`;

            particle.style.fontSize =
                `${18 + Math.random() * 18}px`;

            document.body.appendChild(
                particle
            );


            particle.animate(
                [
                    {
                        opacity: 1,
                        transform:
                            "translateY(0) scale(1)"
                    },

                    {
                        opacity: 0,
                        transform:
                            "translateY(-120px) scale(1.4) rotate(180deg)"
                    }

                ],
                {
                    duration: 1800,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );


            setTimeout(() => {

                particle.remove();

            }, 1800);

        }, i * 35);

    }

}


/* =========================================
   FINAL QUESTION GAME
========================================= */

const questionStart =
    document.getElementById("questionStart");

const questionIntro =
    document.getElementById("questionIntro");

const questionGame =
    document.getElementById("questionGame");

const yesButton =
    document.getElementById("yesButton");

const noButton =
    document.getElementById("noButton");

const yesResult =
    document.getElementById("yesResult");

const noResult =
    document.getElementById("noResult");

const noMessage =
    document.getElementById("noMessage");

const answerArea =
    document.getElementById("answerArea");


let noAttempts = 0;


/* =========================================
   START QUESTION
========================================= */

if (questionStart) {

    questionStart.addEventListener("click", () => {

        /*
            Hide the intro.
        */

        if (questionIntro) {

            questionIntro.classList.add(
                "hidden"
            );

            questionIntro.classList.remove(
                "show"
            );

        }


        /*
            Show the actual question.
        */

        setTimeout(() => {

            if (questionGame) {

                questionGame.classList.remove(
                    "hidden"
                );

                questionGame.classList.add(
                    "show"
                );

            }

        }, 500);

    });

}


/* =========================================
   NO BUTTON
========================================= */

function moveNoButton() {

    if (!noButton) {
        return;
    }

    noAttempts++;

    const container =
        noButton.parentElement;

    if (!container) {
        return;
    }

    const containerRect =
        container.getBoundingClientRect();

    const maxX =
        Math.max(
            0,
            containerRect.width -
            noButton.offsetWidth
        );

    const maxY =
        Math.max(
            0,
            containerRect.height -
            noButton.offsetHeight
        );

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noButton.style.position =
        "absolute";

    noButton.style.left =
        `${randomX}px`;

    noButton.style.top =
        `${randomY}px`;


    if (noMessage) {

        if (noAttempts < 3) {

            noMessage.textContent =
                "Kushu pls T_T";

        }

        else if (noAttempts < 6) {

            noMessage.textContent =
                "WHY ARE YOU CHASING IT T_T";

        }

        else if (noAttempts < 9) {

            noMessage.textContent =
                "THE BUTTON IS SCARED.";

        }

        else {

            noMessage.textContent =
                "Okay T_T you caught me. That button never counted as an answer anyway. ♡";

        }

        noMessage.classList.add("show");

    }

}


/* =========================================
   NO BUTTON - DESKTOP
========================================= */

if (noButton) {

    noButton.addEventListener(
        "mouseenter",
        () => {

            if (noAttempts < 9) {
                moveNoButton();
            }

        }
    );


    /* Mobile */

    noButton.addEventListener(
        "touchstart",
        event => {

            if (noAttempts < 9) {

                event.preventDefault();

                moveNoButton();

            }

        },
        {
            passive: false
        }
    );


    /* Click fallback */

    noButton.addEventListener(
        "click",
        event => {

            if (noAttempts < 9) {

                event.preventDefault();

                moveNoButton();

            }

        }
    );

}


/* =========================================
   YES BUTTON
========================================= */

if (yesButton) {

    yesButton.addEventListener("click", () => {

        if (answerArea) {

            answerArea.classList.add(
                "answered"
            );

        }


        /*
            Hide the question itself.
        */

        if (questionGame) {

            questionGame.classList.add(
                "hidden"
            );

            questionGame.classList.remove(
                "show"
            );

        }


        /*
            Show YES result.
        */

        if (yesResult) {

            yesResult.classList.remove(
                "hidden"
            );

            yesResult.classList.add(
                "show"
            );

        }


        if (noResult) {

            noResult.classList.add(
                "hidden"
            );

            noResult.classList.remove(
                "show"
            );

        }


        birthdayExplosion();


        for (
            let i = 0;
            i < 15;
            i++
        ) {

            setTimeout(() => {

                createHeart(
                    Math.random() *
                    window.innerWidth,

                    Math.random() *
                    window.innerHeight
                );

            }, i * 100);

        }

    });

}


/* =========================================
   CUSTOM LEAVING POPUP
========================================= */

let leavePopup = null;


function createLeavePopup() {

    if (
        document.getElementById("leavePopup")
    ) {

        leavePopup =
            document.getElementById(
                "leavePopup"
            );

        return;

    }


    leavePopup =
        document.createElement("div");


    leavePopup.id =
        "leavePopup";


    leavePopup.innerHTML = `

        <div class="leave-popup-box">

            <div class="leave-popup-bow">
                🎀
            </div>

            <h2>
                Wait... you're leaving already?
            </h2>

            <p>
                The hamster council would like to
                formally request that you stay for
                approximately 37 more seconds.
            </p>

            <div class="leave-popup-buttons">

                <button
                    id="stayButton"
                    type="button"
                >
                    Stay a little longer ♡
                </button>

                <button
                    id="leaveButton"
                    type="button"
                >
                    I really have to go
                </button>

            </div>

            <div class="leave-popup-hamster">
                🐹
            </div>

        </div>

    `;


    document.body.appendChild(
        leavePopup
    );


    const stayButton =
        document.getElementById(
            "stayButton"
        );

    const leaveButton =
        document.getElementById(
            "leaveButton"
        );


    if (stayButton) {

        stayButton.addEventListener(
            "click",
            () => {

                closeLeavePopup();

            }
        );

    }


    if (leaveButton) {

        leaveButton.addEventListener(
            "click",
            () => {

                closeLeavePopup();

            }
        );

    }


    leavePopup.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                leavePopup
            ) {

                closeLeavePopup();

            }

        }
    );

}


/* =========================================
   OPEN LEAVING POPUP
========================================= */

function openLeavePopup() {

    createLeavePopup();

    if (leavePopup) {

        leavePopup.classList.add(
            "show"
        );

    }

}


/* =========================================
   CLOSE LEAVING POPUP
========================================= */

function closeLeavePopup() {

    if (leavePopup) {

        leavePopup.classList.remove(
            "show"
        );

    }

}


/* =========================================
   OPTIONAL LEAVE BUTTON
========================================= */

const leaveSiteButton =
    document.getElementById(
        "leaveSite"
    );


if (leaveSiteButton) {

    leaveSiteButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openLeavePopup();

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            if (memoryModal) {

                memoryModal.classList.remove(
                    "show"
                );

                memoryModal.classList.add(
                    "hidden"
                );

            }

            closeLeavePopup();

        }

    }
);


/* =========================================
   FINAL LITTLE TOUCH
========================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            const openingBow =
                document.querySelector(
                    ".opening-bow"
                );

            if (openingBow) {

                openingBow.classList.add(
                    "wiggle"
                );

            }

        }, 1000);

    }
);
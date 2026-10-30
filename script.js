const typewriterSound = new Audio("./typewriter.wav");
typewriterSound.volume = 0.5;
typewriterSound.preload = "auto";

const title = document.querySelector(".paper-content h1");

if(title) {
    const titleText = title.textContent;

    title.textContent = "";
    title.style.width = "auto";
    title.style.borderRight = "none";

    let letterIndex = 0;

    function writeTitle() {
        if (letterIndex < titleText.length) {
            title.textContent += titleText.charAt(letterIndex);
            
            if (!typewriterSound.paused) {
                typewriterSound.pause();
            }

            typewriterSound.currentTime=0;

            typewriterSound.play().catch(error=> {
                console.log("Typewriter audio failed:", error);
            });
            
            letterIndex++;

            setTimeout(writeTitle,110);
        }
    }


    setTimeout(writeTitle,500);
}



const patches = document.querySelectorAll(".stamp-card");

patches.forEach(function (patch) {
    patch.addEventListener("click",function(){
        patch.classList.toggle("flipped");
    });
});



const stars = document.querySelectorAll(
    ".star1, .star2, .star3, .STAR1, .STAR2, .star4"
);

stars.forEach(function(star) {
    star.addEventListener("mouseenter", function(){
         star.style.transition = "transform 4s linear";
         star.style.transform  = "rotate(360deg)";
     });


     star.addEventListener("mouseleave", function(){
         star.style.transform = "rotate(0deg)";
     });
  });



 const scrapbookCat = document.querySelector(".cat");

const catMessages = [
    "Meow! Hey there little visitor.",
    "Welcome to my home.",
    "Meow",
    "This website is powered by sleepless nights and coffee.",
    "Go explore the this little corner of the world! "
];

if (scrapbookCat) {
    scrapbookCat.style.cursor = "pointer";

    scrapbookCat.addEventListener("click", function () {
        const message =
            catMessages[
                Math.floor(Math.random() * catMessages.length)
            ];

        showScrapbookMessage(message);




        scrapbookCat.animate(
            [
                { rotate: "0deg" },
                { rotate: "-8deg" },
                { rotate: "8deg" },
                { rotate: "-6deg" },
                { rotate: "0deg" }
            ],
            {
                duration: 550,
                easing: "ease-in-out"
            }
        );
    });
}



function showScrapbookMessage(message) {
    let popup = document.querySelector(".scrapbook-popup");

    if (!popup) {
        popup = document.createElement("div");
        popup.className = "scrapbook-popup";

Object.assign(popup.style, {
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "9999",
            background: "#fff3c4",
            color:"#633d2b",
            padding: "14px 22px",
            border: "2px solid #633d2b",
            borderRadius: "8px",
            fontFamily: "Caveat, cursive",
            fontSize: "22px",
            textAlign: "center",
            maxWidth: "85vw",
            boxShadow: "3px 4px 0 rgba(70, 40, 20, 0.2)"
        });

        document.body.appendChild(popup);
    }

    popup.textContent = message;

    popup.animate(
        [
            { opacity: 0, translate: "0 12px" },
            { opacity: 1, translate: "0 0" }
        ],
        {
            duration: 300,
            fill: "forwards"
        }
    );
}



const polaroids = document.querySelectorAll(
    ".polaroid1, .polaroid2, .polaroid3, " +
    ".polaroid4, .polaroid5, .strip1, .strip2"
);

polaroids.forEach(function (photo) {
    photo.style.transition =
        "scale 0.3s ease, filter 0.3s ease";

    photo.addEventListener("mouseenter", function () {
        photo.style.scale = "1.06";
        photo.style.filter =
            "drop-shadow(5px 7px 5px rgba(0,0,0,0.25))";
        photo.style.zIndex = "20";
    });

     photo.addEventListener("mouseleave", function () {
          photo.style.scale = "1";
          photo.style.filter = "none";
          photo.style.zIndex = "";
        });
    });



    const homeStars = document.querySelectorAll(
    ".star1, .star2, .star3"
);

const clickedStars = new Set();

homeStars.forEach(function (star, index) {
    star.addEventListener("click", function () {
        clickedStars.add(star);



    star.animate(
            [
                { scale: "1" },
                { scale: "1.25" },
                { scale: "1" }
            ],
            {
                duration: 400,
                easing: "ease-out"
            }
        );

        if (
            clickedStars.size === homeStars.length &&
            homeStars.length > 0
        ) {
            showScrapbookMessage(
                " You found all the stars! " +
                "Welcome to my little universe. "
            );

            clickedStars.clear();
        }
    });

});



const cameraSticker = document.querySelector(".camera");

if (cameraSticker) {
    cameraSticker.style.cursor = "pointer";

    cameraSticker.addEventListener("click", function () {
        const flash = document.createElement("div");

        Object.assign(flash.style, {
            position: "fixed",
            inset: "0",
            background: "white",
            opacity: "0",
            pointerEvents: "none",
            zIndex: "10000"
        });

        document.body.appendChild(flash);

        const animation = flash.animate(
            [
                { opacity: 0 },
                { opacity: 0.95, offset: 0.25 },
                { opacity: 0 }
            ],
            {
                duration: 450,
                easing: "ease-out"
            }
        );

        animation.onfinish = function () {
            flash.remove();
        };

        showScrapbookMessage(" A memory for the archive!");
    });
}



const journalStickers = document.querySelectorAll(
    ".tomato-sticker, .blueberry-sticker, " +
    ".face-sticker, .girl-sticker"
);

const stickerMessages = [
    "A tiny tomato for your tiny scrapbook ",
    "A blueberry-sized reminder to keep creating 🫐",
    "Every page holds a little piece of a story.",
    "Thanks for visiting my scrapbook! "
];

journalStickers.forEach(function (sticker, index) {
    sticker.style.cursor = "pointer";

    sticker.addEventListener("click", function () {
        showScrapbookMessage(stickerMessages[index]);

        sticker.animate(
            [
                { rotate: "0deg", scale: "1" },
                { rotate: "-7deg", scale: "1.08" },
                { rotate: "7deg", scale: "1.08" },
                { rotate: "0deg", scale: "1" }
            ],
            {
                duration: 500,
                easing: "ease-in-out"
            }
        );
    });
});



const photoViewerImages = document.querySelectorAll(
    ".polaroid1, .polaroid2, .polaroid3, " +
    ".polaroid4, .polaroid5, .strip1, .strip2"
);

photoViewerImages.forEach(function (photo) {
    photo.style.cursor = "zoom-in";

    photo.addEventListener("click", function () {
        const viewer = document.createElement("div");

        Object.assign(viewer.style, {
            position: "fixed",
            inset: "0",
            background: "rgba(35, 22, 18, 0.88)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px",
            zIndex: "10001",
            cursor: "zoom-out"
        });

        const enlargedPhoto = document.createElement("img");
        enlargedPhoto.src = photo.src;
        enlargedPhoto.alt = photo.alt || "Scrapbook photograph";

        Object.assign(enlargedPhoto.style, {
            maxWidth: "90%",
            maxHeight: "85vh",
            objectFit: "contain",
            background: "#fff8e8",
            padding: "12px",
            boxShadow: "0 10px 40px #0008"
        });

        viewer.appendChild(enlargedPhoto);
        document.body.appendChild(viewer);

        viewer.addEventListener("click", function () {
            viewer.remove();
        });

        enlargedPhoto.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        function closeWithEscape(event) {
            if (event.key === "Escape") {
                viewer.remove();
                document.removeEventListener("keydown", closeWithEscape);
            }
        }

        document.addEventListener("keydown", closeWithEscape);
    });
});



document.addEventListener("click", function (event) {
    // Don't create sparkles when clicking controls or links
    if (event.target.closest("a, button, input, textarea")) {
        return;
    }

    const sparkleSymbols = ["✦", "✧", "✶", "⋆"];

    for (let i = 0; i < 4; i++) {
        const sparkle = document.createElement("span");

        sparkle.textContent =
            sparkleSymbols[
                Math.floor(Math.random() * sparkleSymbols.length)
            ];

        Object.assign(sparkle.style, {
            position: "fixed",
            left: event.clientX + (Math.random() * 40 - 20) + "px",
            top: event.clientY + (Math.random() * 40 - 20) + "px",
            color: "#d9a72e",
            fontSize: (14 + Math.random() * 14) + "px",
            pointerEvents: "none",
            zIndex: "10002"
        });

        document.body.appendChild(sparkle);

        const animation = sparkle.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0) scale(0.5) rotate(0deg)"
                },
                {
                    opacity: 0,
                    transform: "translateY(-35px) scale(1.4) rotate(90deg)"
                }
            ],
            {
                duration: 750,
                easing: "ease-out"
            }
        );

        animation.onfinish = function () {
            sparkle.remove();
        };
    }
});



const revealElements = document.querySelectorAll(
    ".journal-content, .content1, .content2, " +
    ".content3, .content4, .film-content, " +
    ".film-content2, .film-content3, .film-content4"
);

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.animate(
                    [
                        { opacity: 0.15 },
                        { opacity: 1 }
                    ],
                    {
                        duration: 900,
                        easing: "ease-out",
                        fill: "forwards"
                    }
                );

                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});



(function scrapbookquestEnging() {
    "use strict";



    const STORAGE_KEY = "behindScreensQuestV1";

    const defaultData = {
        collected: [],
        achievements: [],
        soundEnabled: false,
        nightMode: false,
        promptsUsed: 0,
        visits: 0,
        secretFond: false
    };


let savedData;

try{
    savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
} catch (error) {
    savedData =null;
}

const data ={
    ...defaultData,
    ...(savedData && typeof savedData === "object"
        ? savedData
        : {})

};

function saveProgress() {
    try{
        localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
    } catch(error) {
        console.warn("Progress could not be saved.", error);

    }
}

data.visits += 1;
saveProgress();



document.head.appendChild(engineStyles);



const progressTrack = document.getElementById("quest-progress-track");
const progressFill = document.getElementById("quest-progress-fill");

function updateScrollProgress() {
    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percentage = scrollableHeight > 0
    ? (window.scrollY/ scrollableHeight) * 100
    : 0;

progressFill.style.width =
    Math.min(100, Math.max(0, percentage)) + "%";
}

window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

window.addEventListener("resize", updateScrollProgress);

updateScrollProgress();

const menuButton = document.getElementById("quest-menu-button");

const panel = document.getElementById("quest-panel");
const notification = document.getElementById("quest-notification");

menuButton.addEventListener("click", function () {
    panel.hidden = !panel.hidden;

    if (!panel.hidden){
        renderdashboard();
    }
});

const closeButton = document.getElementById("quest-close");

closeButton = document.getElementById("click", function (){
    panel.hidden = true;
});


let notificationAnimation = null;
let notificationTimer = null;

function announce(message) {
    notification.textContent = message;

    if (notificationAnimation) {
        notificationAnimation.cancel();
    }

    clearTimeout(notificationTimer);

    notificationAnimation = notification.animate(
        [
            {
                opacity: 1,
                transform: "translate(-50%, 0)"
            },
            {
                opacity:0,
                transform: "translate(-50%, 12px)"
            }

        ],
        {
            duration: 250,
            fill: "forwards"
        }
    );

    notificationTimer = setTime(function () {
        notificationAnimation = notification.animate(
            [
                {
                    opacity: 1,
                    transform: "translate(-50%, 0)"
                },
                {
                    opacity: 0,
                    transform: "translate(-50%, 12px)"
                }
            ],
            {
                duration: 250,
                fill: "forwards"
            }
        );
    }, 2500);
}

const moodMessage = {
    happy:"Keep this little sunshine with you today!",
    sleepy: "A reminder that resting is productive too",
    creative: "Your next big idea might start with a doodle.",
    chaotic: "A little chaos makes the best stories."
};

document.querySelectorAll("[data-mood]").forEach(function (button) {
    button.aadEventListener("click", function () {
        const mood = button.dataset.mood;

        document.querySelector("#mood-message").textContent =
            moodMessage[mood];

        document.querySelectorAll("[data-mood]").forEach(function (item) {
            item.classList.remove("mood-selected");
        });

        button.classList.add("mood-selected");
    });
});


const diaryButton = document.querySelector("#diary-open-button");
const diaryEntry = document.querySelector("#diary-entry");

if (diaryButton && diaryEntry) {
    diaryButton.addEventListener("click", function () {
        const isOpening = diaryEntry.hidden;

        diaryEntry.hidden = !isOpening;
        diaryButton.textContent= isOpening ? "Close Diary" : "Open Diary";
        diaryButton.setAttribute("aria-expanded", String(isOpening));
    });
}
})()

const stickers = [
    "🌷", "🐈", "🍓", "🦋",
    "🎀", "⭐", "🍒", "🌙",
    "🧸", "💌", "🪻", "🍰"
];

const findStickersButton = document.getElementById("find-sticker");
const stickerDisplay = document.getElementById("sticker-display");
const stickerCount = document.getElementById("sticker-count");

function renderStickers() {
    stickerDisplay.textContent = "";

    data.collected.forEach(function (sticker) {
        const stickerElement = document.createElement("span");
        stickerElement.textContent = sticker + " ";
        stickerElement.className = "collected-sticker";

        stickerDisplay.appendchilp(stickerElement);
    });

    stickerCount.textContent =
        data.collected.length + "stickers collected";
}

findStickersButton.addEventListener("click",function() {
    const availableStickers = stickers.finter(function (sticker) {
        return !data.collected.inludes(sticker);
    });

    if(availableStickers.lenth === 0) {
        announce("You found every sticker! You're acollector! 🎀");
        return;
    }

    const randomIndex = Math.floor(
        Math.random() * availableStickers.length
    );

    const newSticker = availableStickers[randomIndex];

    data.collected.push(newSticker);

    saveProgress();
    renderStickers();

    announce("You discovered a new sticker: " + newSticker);
});

renderStickers();

const compliments = [
    "You creativity deserves alittle applause. ✨",
    "You make ordinary things feel magical.🌷",
    "keep creating, even when things get messy .🎨",
    "You ideas deserve to exist.♡",
    "Every little achievment counts.⭐",
    "this scrapbook wouldn't be the same without you!"
];

const complimenTextButton = 
    document.getElementById("compliment-button");

const complimentText =
    document.getElementById("compliment-text");
    
complimenTextButton.addEventListener("click", function () {
    const randomIndex = Math.floor(
        Math.random() * compliments.length
    ); complimentText.textContent = compliments[randomIndex];
});

const secretSequence = [
    "b","e","h","i","n","d"
];

let typeKeys = [];

document.addEventListener("keydown", function (event) {
    if (
        event.target.matches("input, textarea") ||
        event.target.isContentEditable
    ) {
        return;
    }


    typeKeys.push(event.key.toLowerCase());if (typedKeys.length > secretSequence.length) {
        typedKeys.shift();
    }

    const correctSequence = secretSequence.every(
        function (key, index) {
            return typedKeys[index] === key;
        }
    );

    if (
        correctSequence &&
        typedKeys.length === secretSequence.length
    ) {
        announce("SECRET UNLOCKED! You found the hidden page! 🐈‍⬛");

        data.secretFound = true;
        saveProgress();

        typedKeys = [];
    }
});

const challenges = [
    "Draw something using only three colours.",
    "Write a tiny story in five sentences.",
    "Take a photograph of something beautiful.",
    "Create a new scrapbook sticker.",
    "Write down three things you learned.",
    "Make a doodle of your favourite animal."
];

const challengeText =
    document.getElementById("challenge-text");

const completeChallenge =
    document.getElementById("complete-challenge");

const today = new Date().toDateString();

const dailyIndex = Math.floor(
    new Data(today).getTime() / 86400000
) % challenges.length;

challengeText.textContent = challenges[dailyIndex];

completeChallenge.addEventListener("click", function () {
    if (data.lastChallenge === today) {
        announce("You have already completed today's challenge!");
        return;

    }

    data.lastChallenge= today;
    data.achievements.push("Daily challenge completed");

    saveProgress();

    announce("Challenge completed! Amazing work bro");
});





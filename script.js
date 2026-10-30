fetch("./typewriter.wav")
    .then(response => {
        console.log("Audio file status:", response.status);
    })
    .catch(error => console.log("Audio loading error:", error));

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


if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", writeTitle);
} else {
    writeTitle();
}

const patches = document.querySelectorAll(".stamp-card");

patches.forEach(function (patch) {
    patch.addEventListener("click",function(){
        patch.classList.toggle("flipped");
    });
});



const stars = document.querySelectorAll(
    ".star1, .star2, .star3, .STAR1 img, .STAR2 img, .star4"
);

stars.forEach(function(star) {
    star.addEventListener("mouseenter", function(){
         star.style.transition = "transform 4s linear";
         star.style.transformOrigin = "center center";
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

}




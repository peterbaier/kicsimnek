// === RANDOM MISSION ===
    (function () {
      const missions = [
        "Find the fanciest tuna steak on the menu and order it like royalty. Bonus points if we toast to 'Her Majesty Kicsim'.",
        "Pick a tuna place purely based on vibes. If the lighting is romantic and the chairs are comfy, it’s destiny.",
        "No phones allowed during tuna time… except to take one perfect photo of you and your steak.",
        "Order one tuna for you, something different for me, and then we trade bites like suspicious but loving scientists.",
        "Ask the waiter what they would recommend for ‘the most wonderful Kat in the world’ and follow their advice.",
        "Pretend this is a secret tuna review mission: we rate the steak, the atmosphere, Peterski's shirt.",
        "After tuna, go for a small walk and name three things from the day you’d like to remember forever."
      ];

      const btn = document.getElementById("missionButton");
      const text = document.getElementById("missionText");

      if (btn && text) {
        btn.addEventListener("click", function () {
          const index = Math.floor(Math.random() * missions.length);
          text.textContent = missions[index];
        });
      }
    })();

    // === HALL OF FAME LIGHTBOX ===
    (function () {
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightboxImage");
      const lightboxClose = document.getElementById("lightboxClose");
      const backdrop = lightbox ? lightbox.querySelector(".lightbox-backdrop") : null;

      const buttons = document.querySelectorAll(".hof-photo-btn");

      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          if (!lightbox || !lightboxImg) return;
          const fullSrc = btn.getAttribute("data-full") || btn.querySelector("img")?.src;
          if (fullSrc) {
            lightboxImg.src = fullSrc;
            lightbox.classList.add("visible");
          }
        });
      });

      function hideLightbox() {
        if (lightbox) {
          lightbox.classList.remove("visible");
        }
      }

      if (lightboxClose) {
        lightboxClose.addEventListener("click", hideLightbox);
      }
      if (backdrop) {
        backdrop.addEventListener("click", hideLightbox);
      }

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          hideLightbox();
        }
      });
    })();

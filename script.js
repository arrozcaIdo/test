const N = 100; // number of "I love you"
const ui = document.getElementById("ui");

for (let i = 1; i <= N; i++) {
  const love = document.createElement("div");
  love.className = "love";
  love.style.setProperty("--i", i);

  const h = document.createElement("div");
  h.className = "love_horizontal";

  const v = document.createElement("div");
  v.className = "love_vertical";

  const word = document.createElement("div");
  word.className = "love_word";
  word.textContent = "I love you";

  v.appendChild(word);
  h.appendChild(v);
  love.appendChild(h);
  ui.appendChild(love);
}

// Typewriter effect for Valentine text
setTimeout(() => {
  const text = document.createElement("div");
  text.id = "valentine-text";
  document.body.appendChild(text);

  const message = "Will you be my valentine?";
  let i = 0;

  ui.style.filter = "blur(3px) brightness(0.6)";

  function typeWriter() {
    if (i < message.length) {
      text.textContent += message[i];
      i++;
      setTimeout(typeWriter, 120);
    } else {
      createButtons();
    }
  }
  typeWriter();
}, 2100);

function createButtons() {
  const btnContainer = document.createElement("div");
  btnContainer.id = "valentine-btns";
  btnContainer.style.display = "flex";
  btnContainer.style.justifyContent = "center";
  btnContainer.style.alignItems = "center";

  const yesBtn = document.createElement("button");
  yesBtn.className = "valentine-btn";
  yesBtn.textContent = "Yes";

  const noBtn = document.createElement("button");
  noBtn.className = "valentine-btn";
  noBtn.textContent = "No";

  btnContainer.appendChild(yesBtn);
  btnContainer.appendChild(noBtn);
  document.body.appendChild(btnContainer);

  // Fade in buttons
  requestAnimationFrame(() => {
    btnContainer.style.opacity = 1;
  });

  let yesSize = 3;
  const messages = ["luh", "???", "di mo na ba ak mahal", "baby naman", "ihhhh", "🙁"];
  let hoverCount = 0;

  function showMessage(msg) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = msg;
    msgDiv.style.position = "absolute";
    msgDiv.style.top = "40%";
    msgDiv.style.left = "50%";
    msgDiv.style.transform = "translateX(-50%)";
    msgDiv.style.fontFamily = "'Courier New', Courier, monospace";
    msgDiv.style.fontSize = "2rem";
    msgDiv.style.color = "#fff";
    msgDiv.style.textShadow = "0 0 10px #fff, 0 0 20px #ff5fa2";
    msgDiv.style.opacity = 1;
    msgDiv.style.zIndex = 101;
    document.body.appendChild(msgDiv);

    setTimeout(() => {
      msgDiv.style.transition = "opacity 0.8s ease";
      msgDiv.style.opacity = 0;
    }, 1000);

    setTimeout(() => document.body.removeChild(msgDiv), 1800);
  }

  yesBtn.id = "yes-btn";
  noBtn.id = "no-btn";

  noBtn.addEventListener("mouseenter", () => {
    hoverCount++;
    if (hoverCount > 10) {
      noBtn.style.display = "none";
      yesBtn.style.fontSize = "6rem";
      yesBtn.style.width = "80%";
      yesBtn.style.transition = "all 0.5s ease";
      yesBtn.textContent = "YES!!!!!";
      showMessage("wala kanang magagawa 😜🤗");
      yesBtn.style.fontWeight = "bold"; // permanently bold
      return;
    }

    const yesOrder = yesBtn.style.order || "0";
    const noOrder = noBtn.style.order || "1";
    yesBtn.style.order = noOrder;
    noBtn.style.order = yesOrder;

    // Grow Yes button
    yesSize += 0.3;
    yesBtn.style.fontSize = yesSize + "rem";

    if (hoverCount % 2 === 1) {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      showMessage(randomMsg);
    }
  });


yesBtn.addEventListener("click", () => {
  yesBtn.classList.add("shine");

  setTimeout(() => {
    // Remove hearts & buttons
    ui.remove();
    document.getElementById("valentine-btns").remove();
    document.getElementById("valentine-text").remove();

    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.animationDelay = Math.random() * 2 + "s";
      document.body.appendChild(star);
    }

    // --- LOGO ---
    const logo = document.createElement("img");
    logo.id = "valentine-logo";
    logo.src = "logo.jpg";
    document.body.appendChild(logo);

    // --- CENTRAL MESSAGE ---
    const message = document.createElement("div");
    message.id = "valentine-message";
    message.textContent = "I love you, my sweetest";
    document.body.appendChild(message);

    // --- FILM STRIP IMAGES ---
    const images = [
      "photo1.jpg",
      "photo2.jpg",
      "photo3.jpg",
      "photo4.jpg",
      "photo5.jpg"
    ];

    const film = document.createElement("div");
    film.id = "film-strip";

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      film.appendChild(img);
    });

    document.body.appendChild(film);

  }, 500); // matches shine duration
});



}

function startSlideshow() {
  document.body.innerHTML = "";

  // Overlay text
  const overlay = document.createElement("div");
  overlay.textContent = "heheheheh i love you so much baby";
  Object.assign(overlay.style, {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: "3rem",
    color: "#fff",
    textShadow: "0 0 10px #d27b7b, 0 0 20px #ff5fa2",
    zIndex: 100,
  });
  document.body.appendChild(overlay);

  // Slideshow container
  const img = document.createElement("img");
  Object.assign(img.style, {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "80%",
    borderRadius: "20px",
    boxShadow: "0 0 20px #fff",
    opacity: 0,
    transition: "opacity 1s ease",
  });
  document.body.appendChild(img);

  let current = 0;

  function nextSlide() {
    // Fade out
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = images[current];
      // Fade in
      img.style.opacity = 1;
      current++;
      if (current >= images.length) current = 0;
    }, 1000); // match fade duration
  }

  nextSlide();
  setInterval(nextSlide, 3000); // change slide every 3s
}

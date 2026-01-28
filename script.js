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
}// Typewriter effect for Valentine text
setTimeout(() => {
  const text = document.createElement("div");
  text.id = "valentine-text";
  document.body.appendChild(text);

  const message = "Will you be my valentine?";
  let i = 0;

  // Blur hearts when typing starts
  const ui = document.getElementById("ui");
  ui.style.filter = "blur(3px) brightness(0.6)";

  function typeWriter() {
    if (i < message.length) {
      text.textContent += message[i];
      i++;
      setTimeout(typeWriter, 120);
    } else {
      // Create Yes/No buttons
      const btnContainer = document.createElement("div");
      btnContainer.id = "valentine-btns";

      const yesBtn = document.createElement("button");
      yesBtn.className = "valentine-btn";
      yesBtn.textContent = "Yes!";

      const noBtn = document.createElement("button");
      noBtn.className = "valentine-btn";
      noBtn.textContent = "no";

      btnContainer.appendChild(yesBtn);
      btnContainer.appendChild(noBtn);
      document.body.appendChild(btnContainer);

      // Fade in buttons
      requestAnimationFrame(() => {
        btnContainer.style.opacity = 1;
      });

      // Yes button click
      let yesSize = 3; // starting font size in rem
      yesBtn.addEventListener("click", () => alert("hehehehhee i love you baby"));

      // No button swaps places with Yes on hover
      noBtn.addEventListener("mouseenter", () => {
        // Swap text content (optional) or just positions
        const yesPos = yesBtn.style.order || "0";
        const noPos = noBtn.style.order || "1";

        // Swap their order in flexbox container
        yesBtn.style.order = noPos;
        noBtn.style.order = yesPos;

        // Grow Yes a little
        yesSize += 0.3;
        yesBtn.style.fontSize = yesSize + "rem";
      });
    }
  }

  typeWriter();
}, 2100);

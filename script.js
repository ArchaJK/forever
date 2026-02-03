/* ================= MUSIC ================= */
const music = document.getElementById("bgMusic");
let isPlaying = false;

function setMusic(src) {
  if (!music) return;
  music.src = src;
  music.play();
  isPlaying = true;
}

function toggleMusic() {
  if (!music) return;
  if (isPlaying) {
    music.pause();
    isPlaying = false;
  } else {
    music.play();
    isPlaying = true;
  }
}

/* ================= SLIDESHOW (CARD STYLE) ================= */
let slideIndex = 0;

function startSlideshow() {
  const slides = document.querySelectorAll(".slideshow img");
  if (slides.length === 0) return;

  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(startSlideshow, 3000);

/* ================= BACKGROUND SLIDESHOW ================= */
const bgSlides = document.querySelectorAll(".bg-slideshow img");
let bgIndex = 0;

if (bgSlides.length > 0) {
  setInterval(() => {
    bgSlides.forEach(s => s.classList.remove("active"));
    bgIndex = (bgIndex + 1) % bgSlides.length;
    bgSlides[bgIndex].classList.add("active");
  }, 3000);
}

/* ================= NO BUTTON ESCAPE ================= */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNoBtn);
  noBtn.addEventListener("touchstart", moveNoBtn);
}

function moveNoBtn() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* ================= YES HEART BLAST ================= */
function yes() {
  const secret = document.getElementById("secret");
  if (secret) secret.style.display = "block";
  blastHearts();
}

function blastHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "blast-heart";
    heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💖";

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.setProperty("--x", `${Math.random() * 400 - 200}px`);
    heart.style.setProperty("--y", `${Math.random() * 400 - 200}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

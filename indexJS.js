const btn = document.getElementById("birthdayBtn");
const cake = document.getElementById("cake");
const song = document.getElementById("birthdaySong");
const body = document.body;
const fireworksContainer = document.getElementById("fireworksContainer");
const balloonContainer = document.getElementById("balloonContainer");
const happyText = document.getElementById("happyText");
const gameBtn = document.getElementById("gameBtn");

let fireworkInterval;
let balloonInterval;

btn.addEventListener("click", () => {
  btn.style.display = "none";
  cake.style.display = "block";
  body.style.backgroundColor = "#1a1a1a";
  song.play();
  startFireworks();
  startBalloons();
});

song.addEventListener("ended", () => {
  // وقف المؤثرات
  clearInterval(fireworkInterval);
  clearInterval(balloonInterval);

  // إزالة الألعاب النارية والبالونات
  fireworksContainer.innerHTML = "";
  balloonContainer.innerHTML = "";

  // تغيير خلفية الجسم للون الأصلي الفاتح
  body.style.backgroundColor = "#ffd1ef";

  // عرض الكعكة (إذا كانت مخفية)
  cake.style.display = "block";

  // إظهار كلمة Happy Birthday وزر GAME ON؟
  happyText.style.display = "block";
  gameBtn.style.display = "block";

  // إخفاء زر START
  btn.style.display = "none";
});

function startFireworks() {
  fireworkInterval = setInterval(() => {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    fireworksContainer.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
  }, 500);
}

function startBalloons() {
  const colors = ["red", "blue", "green", "yellow", "pink", "purple"];
  balloonInterval = setInterval(() => {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    balloon.style.left = Math.random() * 100 + "vw";
    balloonContainer.appendChild(balloon);
    setTimeout(() => balloon.remove(), 9000);
  }, 300);
}

// ===== باسورد =====
function checkPass() {
  const pass = document.getElementById("pass");
  if (!pass) return;

  if (pass.value === "10112006") {
    window.location.href = "rose.html";
  } else {
    pass.classList.add("shake");
    setTimeout(() => pass.classList.remove("shake"), 400);
    alert("مش عارفه تاريخ ميلادك 😡");
  }
}

// ===== قلوب الخلفية (أخف للموبايل) =====
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 14 + 14 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3500);
}, 600); // كان 300 → خففناه

// ===== صفحة الوردة =====
function showLove() {
  ["♥️","🫶🏻","😍"].forEach((emoji, i) => {
    setTimeout(() => {
      const e = document.createElement("div");
      e.textContent = emoji;
      e.style.position = "absolute";
      e.style.bottom = "0";
      e.style.left = Math.random() * 100 + "vw";
      e.style.fontSize = "36px";
      e.style.animation = "floatUp 3s linear forwards";
      document.body.appendChild(e);
      setTimeout(()=>e.remove(),3000);
    }, i * 250);
  });

  const note = document.getElementById("note");
  if (note) note.style.display = "block";
setTimeout(()=> note.classList.add("show"), 50);

}

function goNext(){
  window.location.href = "memories.html";
}

// ===== صفحة الذكريات =====
let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;

function changePhoto(){
  const img = document.getElementById("photo");
  if (!img) return;

  index = (index + 1) % photos.length;
  img.classList.remove("photo-animate");
  void img.offsetWidth; // reset animation
  img.src = photos[index];
  img.classList.add("photo-animate");

  spawnHeart();
}

// قلب مع كل صورة
function spawnHeart(){
  const h = document.createElement("div");
  h.textContent = "💗";
  h.style.position = "absolute";
  h.style.left = "50%";
  h.style.bottom = "30%";
  h.style.transform = "translateX(-50%)";
  h.style.fontSize = "28px";
  h.style.animation = "floatUp 2s ease forwards";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),2000);
}

// ===== العداد =====
const startDate = new Date("2025-11-09T19:20:00");

setInterval(() => {
  const counter = document.getElementById("counter");
  if (!counter) return;

  const now = new Date();
  const diff = Math.max(0, now - startDate);

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  counter.innerHTML = `💗 مع بعض بقالنا ${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}, 1000);

function goFinal(){
  window.location.href = "final.html";
}

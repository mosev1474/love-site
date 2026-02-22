<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>هديتي ليك 💖</title>

<style>
/* ===== نفس ستايلك تقريباً ===== */
body{
    font-family:Segoe UI;
    background:linear-gradient(145deg,#ffdde1,#ee9ca7);
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    overflow:hidden;
}

.card{
    background:rgba(255,255,255,.7);
    padding:25px;
    border-radius:30px;
    text-align:center;
    width:100%;
    max-width:450px;
}

input,button{
    width:100%;
    padding:12px;
    margin:10px 0;
    border:none;
    border-radius:50px;
    font-size:18px;
}

button{
    background:#ff4da6;
    color:white;
    cursor:pointer;
}

#counter{
    margin:15px 0;
    font-weight:bold;
}

.hidden{display:none;}

.heart{
    position:fixed;
    bottom:-20px;
    animation:floatUp 4s linear forwards;
    pointer-events:none;
}

@keyframes floatUp{
    to{transform:translateY(-120vh);opacity:0;}
}

.shake{animation:shake .3s;}
@keyframes shake{
0%,100%{transform:translateX(0)}
25%{transform:translateX(-5px)}
75%{transform:translateX(5px)}
}
</style>
</head>

<body>

<!-- ===== صفحة الباسورد ===== -->
<div class="card" id="page-login">
    <h2>ادخل تاريخ الميلاد 💖</h2>
    <input id="pass" placeholder="اكتب هنا">
    <button onclick="checkPass()">دخول</button>
</div>

<!-- ===== صفحة الوردة ===== -->
<div class="card hidden" id="page-love">
    <h2>🌹 مفاجأة!</h2>
    <button onclick="showLove()">اضغط هنا</button>
    <p id="note" class="hidden">أنت أحلى حاجة حصلت 💕</p>
    <button onclick="goNext()">التالي</button>
</div>

<!-- ===== صفحة الذكريات ===== -->
<div class="card hidden" id="page-memory">
    <h2>ذكرياتنا 💗</h2>
    <img id="photo" src="photo1.jpg" style="width:100%;border-radius:20px;">
    <button onclick="changePhoto()">غير الصورة</button>
    <div id="counter"></div>
</div>

<script>
/* ===== إدارة الصفحات ===== */
function showPage(id){
    document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

/* ===== القلوب ===== */
setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML=["💖","💗","💕"][Math.floor(Math.random()*3)];
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(20+Math.random()*20)+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4000);
},900);

/* ===== الباسورد ===== */
function checkPass(){
    const pass=document.getElementById("pass");
    if(pass.value==="2652006"){
        showPage("page-love");
    }else{
        pass.classList.add("shake");
        setTimeout(()=>pass.classList.remove("shake"),300);
        alert("مش عارفة تاريخ ميلادك 😡");
    }
}

/* ===== صفحة الحب ===== */
function showLove(){
    document.getElementById("note").classList.remove("hidden");
}

function goNext(){
    showPage("page-memory");
}

/* ===== الصور ===== */
let photos=["photo1.jpg","photo2.jpg","photo3.jpg"];
let index=0;

function changePhoto(){
    index=(index+1)%photos.length;
    document.getElementById("photo").src=photos[index];
}

/* ===== العداد ===== */
const startDate=new Date("2023-10-10T12:56:00");

function updateCounter(){
    const counter=document.getElementById("counter");
    if(!counter) return;

    const diff=new Date()-startDate;

    const d=Math.floor(diff/86400000);
    const h=Math.floor(diff/3600000)%24;
    const m=Math.floor(diff/60000)%60;
    const s=Math.floor(diff/1000)%60;

    counter.innerHTML=`💗 مع بعض بقالنا ${d} يوم ${h} ساعة ${m} دقيقة ${s} ثانية`;
}

setInterval(updateCounter,1000);
updateCounter();
</script>

</body>
</html>
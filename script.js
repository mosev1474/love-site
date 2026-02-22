<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>هديتي ليك 💖</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(145deg, #ffdde1 0%, #ee9ca7 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 20px;
            position: relative;
            overflow-x: hidden;
        }

        /* بطاقة المحتوى */
        .card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-radius: 40px;
            padding: 30px 25px;
            box-shadow: 0 25px 40px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(255, 255, 255, 0.5);
            text-align: center;
            width: 100%;
            max-width: 500px;
            margin: 20px auto;
            border: 1px solid rgba(255, 255, 255, 0.6);
        }

        h1, h2 {
            color: #b34180;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.8);
            margin-bottom: 20px;
            font-size: clamp(28px, 7vw, 48px);
        }

        input, button {
            border: none;
            outline: none;
            border-radius: 60px;
            font-size: 20px;
            padding: 15px 30px;
            margin: 15px 0;
            width: 100%;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        input {
            background: rgba(255, 240, 245, 0.9);
            border: 2px solid #ff99cc;
            text-align: center;
            color: #a63a79;
            font-weight: 500;
        }

        input:focus {
            border-color: #ff4da6;
            background: white;
            box-shadow: 0 0 0 4px rgba(255, 105, 180, 0.3);
        }

        button {
            background: linear-gradient(135deg, #ff4da6, #ff80b3);
            color: white;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(255, 64, 129, 0.4);
            border: 2px solid rgba(255, 255, 255, 0.4);
        }

        button:hover {
            transform: scale(1.02);
            background: linear-gradient(135deg, #ff80b3, #ff4da6);
            box-shadow: 0 12px 28px rgba(255, 64, 129, 0.6);
        }

        button:active {
            transform: scale(0.98);
        }

        /* تأثير الهزة */
        .shake {
            animation: shake 0.4s ease-in-out;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
        }

        /* رسالة الخطأ */
        .error-toast {
            background: #ff4d4d;
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 18px;
            box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4);
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99999;
            animation: fadeInOut 2s ease forwards;
            white-space: nowrap;
            backdrop-filter: blur(5px);
        }

        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -20px); }
            15% { opacity: 1; transform: translate(-50%, 0); }
            85% { opacity: 1; transform: translate(-50%, 0); }
            100% { opacity: 0; transform: translate(-50%, -20px); }
        }

        /* العداد */
        #counter {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(5px);
            padding: 15px 20px;
            border-radius: 60px;
            font-size: clamp(16px, 5vw, 26px);
            font-weight: 600;
            color: #a63a79;
            box-shadow: 0 4px 10px rgba(255, 105, 180, 0.3);
            border: 2px solid white;
            margin: 20px 0;
            direction: ltr;
        }

        /* الصور */
        .photo-frame {
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.25);
            border: 5px solid white;
            margin: 20px 0;
            max-width: 100%;
        }

        .photo-frame img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.3s;
            object-fit: cover;
            aspect-ratio: 1 / 1;
        }

        .photo-animate {
            animation: pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes pop {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
        }

        /* الملاحظة */
        #note {
            display: none;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(5px);
            padding: 25px;
            border-radius: 40px;
            font-size: 24px;
            color: #b34180;
            border: 2px solid white;
            margin-top: 20px;
            opacity: 0;
            transition: opacity 1s;
        }

        #note.show {
            opacity: 1;
        }

        /* القلوب الخلفية */
        .heart {
            position: fixed;
            bottom: -10vh;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
            filter: drop-shadow(0 0 5px rgba(255, 105, 180, 0.7));
            animation: floatUp linear forwards;
            will-change: transform;
        }

        @keyframes floatUp {
            to {
                transform: translateY(-120vh);
                opacity: 0;
            }
        }

        /* أزرار صغيرة */
        .nav-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .nav-buttons button {
            width: auto;
            min-width: 140px;
            font-size: 18px;
        }

        /* تنسيق للجوال */
        @media (max-width: 480px) {
            .card {
                padding: 20px 15px;
                border-radius: 30px;
            }

            button {
                font-size: 18px;
                padding: 12px 20px;
            }

            .nav-buttons button {
                min-width: 120px;
            }

            #counter {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>

<!-- سيتم تحميل المحتوى ديناميكياً حسب الصفحة -->
<script>
    // ===== إدارة القلوب الخلفية (ذكية) =====
    let heartInterval;

    function startHearts() {
        if (heartInterval) clearInterval(heartInterval);
        heartInterval = setInterval(createHeart, 900); // أبطأ من قبل عشان ما يثقّل الجوال
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = ["💖", "💗", "💓", "💕", "💞"][Math.floor(Math.random() * 5)]; // أشكال متنوعة
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (Math.random() * 20 + 18) + "px"; // أكبر شوية
        heart.style.animationDuration = (Math.random() * 2 + 3.5) + "s"; // سرعة عشوائية
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    // أوقف القلوب إذا الصفحة مش ظاهرة (موفر للبطارية)
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            clearInterval(heartInterval);
            heartInterval = null;
        } else {
            startHearts();
        }
    });

    // دالة لعرض رسالة خطأ لطيفة بدلاً من alert
    function showError(message) {
        const toast = document.createElement("div");
        toast.className = "error-toast";
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }

    // ===== باسورد =====
    function checkPass() {
        const pass = document.getElementById("pass");
        if (!pass) return;

        if (pass.value === "2652006") { // تم التعديل
            window.location.href = "rose.html";
        } else {
            pass.classList.add("shake");
            setTimeout(() => pass.classList.remove("shake"), 400);
            showError("مش عارف تاريخ ميلادك 😡");
        }
    }

    // ===== صفحة الوردة =====
    function showLove() {
        ["♥️", "🫶🏻", "😍"].forEach((emoji, i) => {
            setTimeout(() => {
                const e = document.createElement("div");
                e.textContent = emoji;
                e.style.position = "absolute";
                e.style.bottom = "0";
                e.style.left = Math.random() * 100 + "vw";
                e.style.fontSize = "48px";
                e.style.animation = "floatUp 3s linear forwards";
                e.style.pointerEvents = "none";
                document.body.appendChild(e);
                setTimeout(() => e.remove(), 3000);
            }, i * 300);
        });

        const note = document.getElementById("note");
        if (note) {
            note.style.display = "block";
            setTimeout(() => note.classList.add("show"), 50);
        }
    }

    function goNext() {
        window.location.href = "memories.html";
    }

    // ===== صفحة الذكريات =====
    let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
    let index = 0;

    function changePhoto() {
        const img = document.getElementById("photo");
        if (!img) return;

        index = (index + 1) % photos.length;

        // إعادة تشغيل الأنيميشن بطريقة نظيفة
        img.style.animation = 'none';
        img.offsetHeight; // force reflow
        img.src = photos[index];
        img.style.animation = 'pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

        spawnHeart();
    }

    function spawnHeart() {
        const h = document.createElement("div");
        h.textContent = "💗";
        h.style.position = "fixed";
        h.style.left = "50%";
        h.style.bottom = "30%";
        h.style.transform = "translateX(-50%)";
        h.style.fontSize = "40px";
        h.style.animation = "floatUp 2s ease forwards";
        h.style.pointerEvents = "none";
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 2000);
    }

    // ===== العداد =====
    const startDate = new Date("2023-10-10T12:56:00"); // تم التعديل حسب طلبك

    function updateCounter() {
        const counter = document.getElementById("counter");
        if (!counter) return;

        const now = new Date();
        const diff = Math.max(0, now - startDate);

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // إضافة صفر للأرقام الأقل من 10
        const format = (n) => n.toString().padStart(2, '0');

        counter.innerHTML = `💗 مع بعض بقالنا ${days} يوم ${format(hours)} ساعة ${format(minutes)} دقيقة ${format(seconds)} ثانية`;
    }

    setInterval(updateCounter, 1000);

    function goFinal() {
        window.location.href = "final.html";
    }

    // بدء القلوب تلقائياً عند تحميل أي صفحة
    window.addEventListener("load", () => {
        startHearts();
        updateCounter(); // تحديث فوري للعداد
    });

</script>

<!-- هذا القسم هو الـ index.html (صفحة البداية) -->
<!-- افترضنا أن الصفحات منفصلة، لكن لتوحيد الشرح سأضع محتوى كل صفحة داخل عناصر div مخفية أو حسب الـ URL -->
<!-- يمكنك توزيع الكود على ملفات منفصلة: index.html / rose.html / memories.html / final.html -->

</body>
</html>
<script>
        const hamburger = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    </script>
</body>

/* ======================
   首頁輪播圖
====================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;


/* 顯示指定圖片 */
function showSlide(index){

    if(slides.length === 0) return;

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    // 圖片切換
    if(slides[index]){
        slides[index].classList.add("active");
    }

    // 圓點切換（有才做）
    if(dots[index]){
        dots[index].classList.add("active");
    }
}


/* 下一張 */
function nextSlide(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}


/* 上一張 */
function prevSlide(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
}


/* 左右按鈕 */
if(nextBtn){
    nextBtn.addEventListener("click", nextSlide);
}

if(prevBtn){
    prevBtn.addEventListener("click", prevSlide);
}


/* 自動輪播 */
if(slides.length > 0){

    showSlide(current);

    setInterval(nextSlide, 4000);
}

/* ======================
   漢堡選單
====================== */

function toggleMenu(btn){

    const nav = document.getElementById('main-nav');

    if(!nav) return;

    const isOpen = nav.classList.toggle('open');

    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
}


/* ======================
   首頁輪播圖
====================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;


/* 顯示圖片 */
function showSlide(index){

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    slides[index].classList.add("active");
    dots[index].classList.add("active");
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


/* 按鈕 */
if(nextBtn){
    nextBtn.addEventListener("click", nextSlide);
}

if(prevBtn){
    prevBtn.addEventListener("click", prevSlide);
}


/* 自動播放 */
if(slides.length > 0){

    showSlide(current);

    setInterval(() => {
        nextSlide();
    }, 4000);
}

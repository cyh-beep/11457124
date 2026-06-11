/* ======================
   漢堡選單
====================== */

const hamburgerBtn = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}


/* ======================
   首頁輪播圖
====================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;


/* 顯示指定圖片 */
function showSlide(index) {

    if (slides.length === 0) return;

    // 移除全部 active
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    // 加到目前圖片
    if (slides[index]) {
        slides[index].classList.add("active");
    }

    // 加到目前圓點
    if (dots[index]) {
        dots[index].classList.add("active");
    }
}


/* 下一張 */
function nextSlide() {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);
}


/* 上一張 */
function prevSlide() {

    current--;

    if (current < 0) {
        current = slides.length - 1;
    }

    showSlide(current);
}


/* 左右按鈕 */
if (nextBtn) {
    nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
    prevBtn.addEventListener("click", prevSlide);
}


/* 點擊圓點切換 */
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        current = index;
        showSlide(current);
    });
});


/* 自動輪播 */
if (slides.length > 0) {

    // 先顯示第一張
    showSlide(current);

    // 每 4 秒輪播
    setInterval(nextSlide, 4000);
}


/* ======================
   答題功能
====================== */

// 綠色勾勾 SVG
const checkIcon = `
<svg width="20" height="20" viewBox="0 0 24 24"
fill="none" stroke="currentColor"
stroke-width="3" stroke-linecap="round"
stroke-linejoin="round"
style="vertical-align: middle;">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>`;


/* 檢查選擇題 */
function checkRadio(name, correctAnswer, feedbackId) {

    const selected = document.querySelector(
        `input[name="${name}"]:checked`
    );

    const feedbackDiv = document.getElementById(feedbackId);

    if (!selected) {
        feedbackDiv.innerHTML =
            `<span class="wrong">請先選擇一個答案！</span>`;
        removeNavButtons(feedbackDiv);
        return;
    }

    if (selected.value === correctAnswer) {
        feedbackDiv.innerHTML =
            `<span class="correct">${checkIcon} 正確</span>`;
        removeNavButtons(feedbackDiv);

    } else {
        feedbackDiv.innerHTML =
            `<span class="wrong">再想想看</span>`;
        addNavButtons(feedbackDiv);
    }
}


/* 檢查填充題 */
function checkText(inputId, correctAnswers, feedbackId) {

    const uans = document
        .getElementById(inputId)
        .value
        .trim();

    const feedbackDiv =
        document.getElementById(feedbackId);

    if (uans === "") {
        feedbackDiv.innerHTML =
            `<span class="wrong">請填寫答案！</span>`;
        removeNavButtons(feedbackDiv);
        return;
    }

    if (correctAnswers.includes(uans)) {
        feedbackDiv.innerHTML =
            `<span class="correct">${checkIcon} 正確</span>`;
        removeNavButtons(feedbackDiv);

    } else {
        feedbackDiv.innerHTML =
            `<span class="wrong">再想想看</span>`;
        addNavButtons(feedbackDiv);
    }
}


/* ======================
   動態引導按鈕
====================== */

/* 加入按鈕 */
function addNavButtons(targetDiv) {

    if (targetDiv.querySelector(".nav-section")) return;

    const navSection =
        document.createElement("div");

    navSection.className = "nav-section";


    // 生態調查
    const btnEco =
        document.createElement("a");

    btnEco.className = "btn-nav";
    btnEco.href = "EcologySurvey.html";
    btnEco.innerText =
        "前往【生態調查】找答案";


    // 現況與變遷
    const btnStatus =
        document.createElement("a");

    btnStatus.className = "btn-nav";
    btnStatus.href = "ChangesCurrentStatus.html";
    btnStatus.innerText =
        "前往【變遷與現狀】找答案";


    navSection.appendChild(btnEco);
    navSection.appendChild(btnStatus);

    targetDiv.appendChild(navSection);
}


/* 移除按鈕 */
function removeNavButtons(targetDiv) {

    const existingNav =
        targetDiv.querySelector(".nav-section");

    if (existingNav) {
        existingNav.remove();
    }
}

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window, scrollY);
    // 페이지 스크롤 위치가 500px이 넘으면.
    if ((window, scrollY > 500)) {
      // Badge 요소 숨기기!
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 스크롤 버튼 보이기!
      gsap.to(toTopEl, 0.2, {
        x: 0,
      });

      // 페이지 스크롤 위치가 500px이 넘지 않으면.
    } else {
      // Badge 요소 보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, 0.2, {
        x: 100,
      });
    }
  }, 300)
);
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener("click", function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  autoplay: true,
  loof: true,
  spaceBetween: 30,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add("hide");
  } else {
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating", 1, 15);
floatingObject(".floating", 0.5, 15);
floatingObject(".floating", 1.5, 15);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

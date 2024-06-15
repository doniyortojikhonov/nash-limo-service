// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");

// menuBtn.addEventListener("click", (e) => {
//     navLinks.classList.toggle("open");

//     const isOpen = navLinks.classList.contains("open");
//     menuBtnIcon.setAttribute(
//         "class",
//         isOpen ? "ri-close-line" : "ri-menu-3-line"
//     );
// });

// navLinks.addEventListener("click", (e) => {
//     navLinks.classList.remove("open");
//     menuBtnIcon.setAttribute("class", "ri-menu-3-line");
// });

// const scrollRevealOptions = {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
// };

// // header container
// ScrollReveal().reveal(".header__content h1", {
//     ...scrollRevealOptions,
// });

// ScrollReveal().reveal(".header__btn", {
//     ...scrollRevealOptions,
//     delay: 500,
// });

// // service container
// ScrollReveal().reveal(".service__card", {
//     ...scrollRevealOptions,
//     interval: 500,
// });

// // price container
// ScrollReveal().reveal(".price__card", {
//     ...scrollRevealOptions,
//     interval: 500,
// });

// const swiper = new Swiper(".swiper", {
//     loop: true,
//     autoplay: {
//         delay: 2000,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

// //Rate changes
// document.addEventListener("DOMContentLoaded", function () {
//     const section = document.getElementById("banner-section");
//     const rateElements = document.querySelectorAll(".rate");
//     let hasAnimated = false;

//     function animateNumbers() {
//         rateElements.forEach((rateElement) => {
//             const target = parseInt(
//                 rateElement.getAttribute("data-target"),
//                 10
//             );
//             const duration = 2000; // Duration of the animation in milliseconds
//             const stepTime = Math.abs(Math.floor(duration / target));
//             let current = 0;

//             const timer = setInterval(() => {
//                 current += 1;
//                 rateElement.textContent =
//                     current +
//                     (rateElement.textContent.includes("%") ? "%" : "+");
//                 if (current >= target) {
//                     clearInterval(timer);
//                 }
//             }, stepTime);
//         });
//     }

//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <=
//                 (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <=
//                 (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function onScroll() {
//         if (isElementInViewport(section) && !hasAnimated) {
//             animateNumbers();
//             hasAnimated = true;
//             window.removeEventListener("scroll", onScroll);
//         }
//     }

//     window.addEventListener("scroll", onScroll);
// });
// //customisation section
// document.addEventListener("DOMContentLoaded", function () {
//     const section = document.querySelector(".customisation__container");
//     const rateElements = document.querySelectorAll(".rate");
//     let hasAnimated = false;

//     function animateNumbers() {
//         rateElements.forEach((rateElement) => {
//             const target = parseInt(
//                 rateElement.getAttribute("data-target"),
//                 10
//             );
//             const duration = 2000; // Duration of the animation in milliseconds
//             const stepTime = Math.abs(Math.floor(duration / target));
//             let current = 0;

//             const timer = setInterval(() => {
//                 current += 1;
//                 rateElement.textContent = current;
//                 if (current >= target) {
//                     clearInterval(timer);
//                     rateElement.textContent = target; // Ensure it ends exactly at the target
//                 }
//             }, stepTime);
//         });
//     }

//     function isElementInViewport(el) {
//         const rect = el.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.left >= 0 &&
//             rect.bottom <=
//                 (window.innerHeight || document.documentElement.clientHeight) &&
//             rect.right <=
//                 (window.innerWidth || document.documentElement.clientWidth)
//         );
//     }

//     function onScroll() {
//         if (isElementInViewport(section) && !hasAnimated) {
//             animateNumbers();
//             hasAnimated = true;
//             window.removeEventListener("scroll", onScroll);
//         }
//     }

//     window.addEventListener("scroll", onScroll);
// });

// // get time
// // Get the current year
// var currentYear = new Date().getFullYear();

// // Update the span element with id="currentYear"
// document.getElementById("currentYear").textContent = currentYear;

// Test
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    // Menu button click handler
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute(
            "class",
            isOpen ? "ri-close-line" : "ri-menu-3-line"
        );
    });

    // Close navLinks on link click
    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("open");
            menuBtnIcon.setAttribute("class", "ri-menu-3-line");
        }
    });

    // Initialize ScrollReveal with common options
    const scrollReveal = ScrollReveal({
        distance: "50px",
        duration: 1000,
    });

    // Configure ScrollReveal for specific sections
    scrollReveal.reveal(".header__content h1", {
        origin: "bottom",
    });

    scrollReveal.reveal(".header__btn", {
        origin: "bottom",
        delay: 500,
    });

    scrollReveal.reveal(".service__card", {
        origin: "bottom",
        interval: 500,
    });

    scrollReveal.reveal(".price__card", {
        origin: "bottom",
        interval: 500,
    });

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        autoplay: {
            delay: 2000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    // Animate numbers on scroll for rate elements
    const rateElements = document.querySelectorAll(".rate");

    function animateNumbers(rateElement, target) {
        const duration = 2000; // Duration of the animation in milliseconds
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            rateElement.textContent =
                current + (rateElement.textContent.includes("%") ? "%" : "+");
            if (current >= target) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        rateElements.forEach((rateElement) => {
            if (
                isElementInViewport(rateElement) &&
                !rateElement.dataset.animated
            ) {
                const target = parseInt(
                    rateElement.getAttribute("data-target"),
                    10
                );
                animateNumbers(rateElement, target);
                rateElement.dataset.animated = true; // Mark as animated to prevent re-triggering
            }
        });
    }

    function throttle(callback, delay) {
        let lastTime = 0;
        return function () {
            const now = new Date().getTime();
            if (now - lastTime >= delay) {
                callback();
                lastTime = now;
            }
        };
    }

    const throttledScroll = throttle(handleScrollAnimation, 200);

    window.addEventListener("scroll", throttledScroll);

    // Initial check on page load
    handleScrollAnimation();

    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
});

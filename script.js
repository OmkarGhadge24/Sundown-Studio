const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navimg = document.querySelector("nav img");
var loader = document.querySelector("#loader");
function page3Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}
function mousefollower() {
    const hoverCircle = document.querySelector('.hover-circle');
    const swiper = document.querySelector('.swiper');

    swiper.addEventListener('mousemove', (e) => {
        const rect = swiper.getBoundingClientRect();
        const x = e.clientX - rect.left - hoverCircle.offsetWidth / 2;
        const y = e.clientY - rect.top - hoverCircle.offsetHeight / 2;
        hoverCircle.style.transform = `translate(${x}px, ${y}px)`;
    });

    swiper.addEventListener('mouseenter', () => {
        hoverCircle.style.display = 'flex';
    });

    swiper.addEventListener('mouseleave', () => {
        hoverCircle.style.display = 'none';
    });
}
function menuAnimation() {
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
function loading() {
    setTimeout(function(){
        loader.style.top = "-100%";
    },3500)
}
page3Animation();
swiperAnimation();
mousefollower();
menuAnimation();
loading();
// swiper

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// range

window.onload = function () {
    slideOne();
    slideTwo();
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("min-value");
let displayValTwo = document.getElementById("max-value");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = '$' + sliderOne.value;
    fillColor();
}
function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = '$' + sliderTwo.value;
    fillColor();
}
function fillColor() {
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, rgba(70, 163, 88, 0.2) ${percent1}% , #46A358 ${percent1}% , #46A358 ${percent2}%, rgba(70, 163, 88, 0.2) ${percent2}%)`;
}



// sort

const sortLinks = document.querySelectorAll('.sort__link');
const allProducts = document.querySelectorAll('.products__block');

sortLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const path = e.currentTarget.dataset.path;


        sortLinks.forEach(elem => {
            elem.classList.remove('sort__link--active');
        })

        e.currentTarget.classList.add('sort__link--active');

        allProducts.forEach(list => {
            list.classList.remove('products__block--active');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('products__block--active');
    })
})




// pagination 

const paginationItems = document.querySelectorAll('.pagination__item');
const pageNumbers = document.querySelectorAll('.pagination__link');
const pageList = document.querySelectorAll('.products__block');

paginationItems.forEach(item => {
   pageNumbers.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const number = e.currentTarget.dataset.number;

        paginationItems.forEach(elem => {
            elem.classList.remove('pagination__item--active');
        })

            e.currentTarget.parentNode.classList.add('pagination__item--active');

            pageList.forEach(list => {
                list.classList.remove('products__block--active');
            });
            document.querySelector(`[data-page="${number}"]`).classList.add('products__block--active');        
    
            if (number > 1) document.querySelector(`[data-number="prev"]`).parentNode.style.display = 'block'
            else document.querySelector(`[data-number="prev"]`).parentNode.style.display = 'none';


            if (number == 4) document.querySelector(`[data-number="next"]`).parentNode.style.display = 'none'
            else document.querySelector(`[data-number="next"]`).parentNode.style.display = 'block';
        })
}) 
})


// Бургер-меню

const burgerBtn = document.querySelector('.burger');
burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerBtn.classList.toggle('burger--open');
    document.querySelector('.header__nav').classList.toggle('header__nav--open')
})

const filterBtn = document.querySelector('.filter__btn');
filterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.catalog__filter').classList.toggle('catalog__filter--open');
})

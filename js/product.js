window.addEventListener('DOMContentLoaded', () => {

    // product tabs

    const tabsLinks = document.querySelectorAll('.tabs__link');
    const tabsDescr = document.querySelectorAll('.tabs__box');

    tabsLinks.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const path = e.currentTarget.dataset.path;



            tabsLinks.forEach(el => {
                el.classList.remove('tabs__link--active');
            })
            el.classList.add('tabs__link--active');

            tabsDescr.forEach(el => {
                el.classList.remove('tabs__box--active');
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__box--active');
        })
    })

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        slidesPerView: 1,
        spaceBetween: 26,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {

            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
              },
        }

    });
})
//Sticky navigation Bar
window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 300);
})


// Pricing Card Tab
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabTarget);
        tabContent.forEach((content) => {
            content.classList.remove('show');
        })
        target.classList.add('show');
        let currentTab = document.querySelector('.pricing-btn--active');
        currentTab.classList.remove('pricing-btn--active');
        tab.classList.add('pricing-btn--active');
    })
})


// Accordian => FAQ
const accordians = document.querySelectorAll('.faq__block');

accordians.forEach((accord) => {
    const btn = accord.querySelector('.faq__action');
    btn.addEventListener('click', (e) => {
        accordians.forEach((item) => {
            if (item !== accord) {
                item.classList.remove('show-text');
            }
        })
        accord.classList.toggle('show-text');
    })
})


// Testimonial Carousel
//Select Dom elements
const slides = document.querySelectorAll(".client-review__slide");
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
})

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
})

function carousel() {
    //working with slides
    // if (counter === slides.length) {
    //     counter = 0;
    // }

    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    //working with prevNext button - shows or hide
    if (counter < slides.length - 1) {
        nextBtn.style.display = 'inline';
    } else {
        nextBtn.style.display = 'none'
    }

    if (counter > 0) {
        prevBtn.style.display = 'inline';
    } else {
        prevBtn.style.display = 'none';
    }

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

prevBtn.style.display = 'none';
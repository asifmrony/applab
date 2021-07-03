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
console.log(accordians);

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
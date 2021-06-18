//Header Toggler Button



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


// Accordian 
const accordian = document.querySelectorAll('.faq__accordian');

accordian.forEach((acc) => {
    acc.addEventListener('click', (e) => {
        // Toggle between hiding and showing the active panel

        let panel = e.target.nextElementSibling;
        let expandIcon = acc.querySelector('.faq__expand-icon');

        if (panel.style.display === "none") {
            panel.style.display = "block";
            expandIcon.style.display = "none";
        } else {
            panel.style.display = "none";
            expandIcon.style.display = "block";
        }
    })
})
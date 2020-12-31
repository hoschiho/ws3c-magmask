// especially for faq and order-now
M.AutoInit();

// for opening the navigation on mobile phones
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
});

// carousel for the "users-say"-section
document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.carousel');
     M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        numVisible: 0,
    });

    // custom function for autoplaying
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
        slideTime = 5000,
        activeClass = "active";

    setInterval(() => {
        indicatorItems.forEach(el => {
            let sibling;
            if (el.classList.contains(activeClass)) {
                sibling = el.nextElementSibling;
                if (sibling == null) {
                    indicatorItems[0].click();
                } else {
                    sibling.click()
                }
            }
        });
    }, slideTime);
});
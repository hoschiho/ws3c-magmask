// especially for faq and order-now
M.AutoInit();

// for opening the navigation on mobile phones
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {});
});

// carousel for the "users-say"-section
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
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
            if (el.classList.contains(activeClass)) {
                sib = el.nextElementSibling;
                if (sib == null) {
                    indicatorItems[0].click();
                } else {
                    sib.click()
                }
            }
        });
    }, slideTime);
});
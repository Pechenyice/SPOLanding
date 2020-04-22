// var helper = document.getElementById('fixedNavigation');
// var scrollTopPrev = 0;

// document.addEventListener('scroll', fixedNavigation);

// function fixedNavigation() {
//     var scroll = pageYOffset;

//     if (pageYOffset > screen.height) {
//         if (scroll > scrollTopPrev) helper.style.height = 0 + 'px';
//         if (scroll < scrollTopPrev) helper.style.height = 100 + 'px';
//     } else {
//         helper.style.height = 0 + 'px';
//     }

//     scrollTopPrev = scroll;
// }

var helper = document.getElementById('toTop');

helper.addEventListener('click', toToper);

var scrollTiming;

function toToper() {
    if (pageYOffset <= 0) return;
    if (pageYOffset > 0) {
        window.scrollTo(0, pageYOffset - 50);
        scrollTiming = setTimeout(() => {toToper()}, 4);
    } else {
        clearTimeout(scrollTiming);
    }
}

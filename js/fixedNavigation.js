var nav = document.getElementById('fixedNavigation');
var scrollTopPrev = 0;

document.addEventListener('scroll', fixedNavigation);

var hiddenNavTimer

function fixedNavigation() {
    var scroll = pageYOffset;
    clearTimeout(hiddenNavTimer);
    if (pageYOffset > screen.height) {
        if (scroll > scrollTopPrev) {
            nav.style.height = 0 + 'px';
        }
        if (scroll < scrollTopPrev) {
            hiddenNavTimer = setTimeout(() => {
                nav.style.height = 0 + 'px';
            }, 1500);
            nav.style.height = 70 + 'px';
        }
    } else {
        nav.style.height = 0 + 'px';
    }

    scrollTopPrev = scroll;
}

var helper = document.getElementById('toTop');
helper.style.display = 'none';

window.addEventListener('scroll', () => {
    if (pageYOffset > document.getElementById('mainBlock').style.height + screen.height/2) helper.style.display = 'flex';
    else {
        helper.style.display = 'none';
    }
});

window.addEventListener('load', () => {
    if (pageYOffset > document.getElementById('mainBlock').style.height + screen.height/2) helper.style.display = 'flex';
    else {
        helper.style.display = 'none';
    }
});

document.getElementById('footerBlockLogo').addEventListener('click', () => {
    if (pageYOffset <= 0) return;
    if (pageYOffset > 0) {
        window.scrollTo(0, pageYOffset - 50);
        scrollTiming = setTimeout(() => {toToper()}, 4);
    } else {
        clearTimeout(scrollTiming);
    }
});

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

window.addEventListener('load', fixedChecker);
window.addEventListener('resize', fixedChecker);

function fixedChecker() {
    var fixedMainHeight = document.getElementById('mainBlock').offsetHeight;
    var fixedWhyUsHeight = document.getElementById('why-us-block').offsetHeight;
    var fixedAboutUsHeight = document.getElementById('aboutUsBlock').offsetHeight;
    var fixedMobileAboutUsHeight = document.getElementById('about-us-mobile-block').offsetHeight;
    var fixedGraduateHeight = document.getElementById('graduates-skills-block-background').offsetHeight;
    var fixedMobileGraduateHeight = document.getElementById('graduates-skills-block-mobile').offsetHeight;
    var fixedProgrammsHeight = document.getElementById('programmBlock').offsetHeight;
    var fixedGraduatersHeight = document.getElementById('graduates-reviews').offsetHeight;

    var fixedNavTimer;

    var fixedItems = document.getElementById('fixedNavigation').getElementsByTagName('ul')[0].getElementsByTagName('li');

    fixedItems[0].onclick =  () => {
        if (document.body.clientWidth >= 1100) {
            if (pageYOffset < fixedMainHeight) fixedScrollerBottom(fixedMainHeight); else fixedScrollerTop(fixedMainHeight);
        } else {
            if (pageYOffset < fixedMainHeight) fixedScrollerBottom(fixedMainHeight); else fixedScrollerTop(fixedMainHeight);
        }
    };

    fixedItems[1].onclick =  () => {
        if (document.body.clientWidth >= 1100) {
            if (pageYOffset < fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + 200) fixedScrollerBottom(fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + 200); else fixedScrollerTop(fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + 200);
        } else {
            if (pageYOffset < fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight) fixedScrollerBottom(fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight); else fixedScrollerTop(fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight);
        }
    };

    fixedItems[2].onclick =  () => {
        if (document.body.clientWidth >= 1100) {
            if (pageYOffset < fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + fixedGraduateHeight + 200) fixedScrollerBottom(fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + fixedGraduateHeight + 200); else fixedScrollerTop(fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + fixedGraduateHeight + 200);
        } else {
            if (pageYOffset < fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight + fixedMobileGraduateHeight) fixedScrollerBottom(fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight + fixedMobileGraduateHeight); else fixedScrollerTop(fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight + fixedMobileGraduateHeight);
        }
    };

    fixedItems[3].onclick =  () => {
        if (document.body.clientWidth >= 1100) {
            if (pageYOffset < fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + fixedGraduateHeight + fixedProgrammsHeight + 200) fixedScrollerBottom(fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + fixedGraduateHeight + fixedProgrammsHeight + 200); else fixedScrollerTop(fixedMainHeight + fixedWhyUsHeight + fixedAboutUsHeight + fixedGraduateHeight + fixedProgrammsHeight + 200);
        } else {
            if (pageYOffset < fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight + fixedMobileGraduateHeight + fixedProgrammsHeight) fixedScrollerBottom( fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight + fixedMobileGraduateHeight + fixedProgrammsHeight); else fixedScrollerTop( fixedMainHeight + fixedWhyUsHeight + fixedMobileAboutUsHeight + fixedMobileGraduateHeight + fixedProgrammsHeight);
        }
    };
}


function fixedScrollerTop(y) {
    if (pageYOffset <= 0) return;
    if (pageYOffset >= y) {
        window.scrollTo(0, pageYOffset - 30);
        fixedNavTimer = setTimeout(() => {fixedScrollerTop(y)}, 4);
    } else {
        clearTimeout(fixedNavTimer);
    }
}

function fixedScrollerBottom(y) {
    if (pageYOffset + screen.height >= document.body.clientHeight) return;
    if (pageYOffset < y) {
        window.scrollTo(0, pageYOffset + 30);
        fixedNavTimer = setTimeout(() => {fixedScrollerBottom(y)}, 4);
    } else {
        clearTimeout(fixedNavTimer);
    }
}
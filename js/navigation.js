window.onload = () => {

    var mouseoverer = new MouseEvent('mouseover', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });

    var mouseleaver = new MouseEvent('mouseleave', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });

    var mainBlockHeight = document.getElementById('mainBlock').offsetHeight;
    var whyUsBlockHeight = document.getElementById('why-us-block').offsetHeight;
    var aboutUsBlockHeight = document.getElementById('aboutUsBlock').offsetHeight;
    var graduateBlockHeight = document.getElementById('graduates-skills-block-background').offsetHeight;
    var programmBlockHeight = document.getElementById('programmBlock').offsetHeight;
    var reviewBlockHeight = document.getElementById('graduates-reviews').offsetHeight;
    var feedbackHeight = document.getElementById('feedback-block-background').offsetHeight;
    var footerHeight = document.getElementById('footer-block-background').offsetHeight;

    var scrollSpeed = 5;

    var navigationElems = document.getElementsByClassName('navigationIconBlock');
    var connections = document.getElementsByClassName('navigationConnection');
    var activeBlock = 0;

    navigationElems[0].addEventListener('mouseover', () => {
        navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
    });
    navigationElems[0].addEventListener('mouseleave', () => {
        if (!navigationElems[0].classList.contains('navigationActive') && activeBlock < 0) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
    });
    
    navigationElems[1].addEventListener('mouseover', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        connections[0].style.backgroundColor = 'white';
    });
    navigationElems[1].addEventListener('mouseleave', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[1].classList.contains('navigationActive') && activeBlock < 2) {
            navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            connections[0].style.backgroundColor = '#393E46';
        } else {
            navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
            connections[0].style.backgroundColor = 'white';
        }
    });

    navigationElems[2].addEventListener('mouseover', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        if (!navigationElems[1].classList.contains('navigationActive')) navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        navigationElems[2].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        connections[0].style.backgroundColor = 'white';
        connections[1].style.backgroundColor = 'white';
    });
    navigationElems[2].addEventListener('mouseleave', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[1].classList.contains('navigationActive')) navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[2].classList.contains('navigationActive') && activeBlock < 3) {
            navigationElems[2].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            for (var i = 0; i < connections.length - 1; i++) {
                connections[i].style.backgroundColor = '#393E46';
            }
            if (activeBlock > 0) {
                navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
                connections[0].style.backgroundColor = 'white';
            }
        } else {
            navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
            navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
            for (var i = 0; i < connections.length - 1; i++) {
                connections[i].style.backgroundColor = 'white';
            }
        }
    });

    navigationElems[3].addEventListener('mouseover', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        if (!navigationElems[1].classList.contains('navigationActive')) navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        if (!navigationElems[2].classList.contains('navigationActive')) navigationElems[2].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        navigationElems[3].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        connections[0].style.backgroundColor = 'white';
        connections[1].style.backgroundColor = 'white';
        connections[2].style.backgroundColor = 'white';
    });
    navigationElems[3].addEventListener('mouseleave', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[1].classList.contains('navigationActive')) navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[2].classList.contains('navigationActive')) navigationElems[2].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[3].classList.contains('navigationActive') && activeBlock < 4) {
            navigationElems[3].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            for (var i = 0; i < connections.length; i++) {
                connections[i].style.backgroundColor = '#393E46';
            }
            if (activeBlock > 0) {
                navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
                connections[0].style.backgroundColor = 'white';
                if (activeBlock > 1) {
                    navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
                    connections[1].style.backgroundColor = 'white';
                }
            }
            
        } else {
            navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
            navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
            navigationElems[2].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
            for (var i = 0; i < connections.length; i++) {
                connections[i].style.backgroundColor = 'white';
            }
        }
    });

    navigationElems[0].addEventListener('click', (event) => {
        if (event.clientY > 100 && event.clientY < 200) if (pageYOffset > mainBlockHeight) scrollerTop(mainBlockHeight); else scrollerBottom(mainBlockHeight);
        activeBlock = 0;
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].classList.toggle('navigationActive');
        for (var i = 1; i < navigationElems.length; i++) {
            if (navigationElems[i].classList.contains('navigationActive')) {
                navigationElems[i].classList.toggle('navigationActive');
                navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            }
            if (navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor == 'white') {
                navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            }
        }
        for (var i = 0; i < connections.length; i++) {
            connections[i].style.backgroundColor = '#393E46';
        }
    });

    navigationElems[1].addEventListener('click', () => {
        if (event.clientY > 100 && event.clientY < 200) if (pageYOffset > mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + 200) scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + 200); else scrollerBottom(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + 200);
        activeBlock = 1;
        if (!navigationElems[1].classList.contains('navigationActive')) navigationElems[1].classList.toggle('navigationActive');
        for (var i = 0; i < navigationElems.length; i++) {
            if (i == 1) continue;
            if (navigationElems[i].classList.contains('navigationActive')) {
                navigationElems[i].classList.toggle('navigationActive');
                navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            }

            if (i > 1) navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        }
        for (var i = 1; i < connections.length; i++) {
            connections[i].style.backgroundColor = '#393E46';
        }
    });

    navigationElems[2].addEventListener('click', () => {
        if (event.clientY > 100 && event.clientY < 200) if (pageYOffset > mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + 200) scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + 200); else scrollerBottom(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + 200);
        activeBlock = 2;
        if (!navigationElems[2].classList.contains('navigationActive')) navigationElems[2].classList.toggle('navigationActive');
        for (var i = 0; i < navigationElems.length; i++) {
            if (i == 2) continue;
            if (navigationElems[i].classList.contains('navigationActive')) {
                navigationElems[i].classList.toggle('navigationActive');
                navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            }
            if (i > 2) navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        }
        for (var i = 2; i < connections.length; i++) {
            connections[i].style.backgroundColor = '#393E46';
        }
    });

    navigationElems[3].addEventListener('click', () => {
        if (event.clientY > 100 && event.clientY < 200) if (pageYOffset > mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + 200) scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + 200); else scrollerBottom(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + 200);

        activeBlock = 3;
        if (!navigationElems[3].classList.contains('navigationActive')) navigationElems[3].classList.toggle('navigationActive');
        for (var i = 0; i < navigationElems.length; i++) {
            if (i == 3) continue;
            if (navigationElems[i].classList.contains('navigationActive')) {
                navigationElems[i].classList.toggle('navigationActive');
                navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            }
        }
    });

    // navigationElems[0].click();
    // navigationElems[1].click();
    // navigationElems[3].click();
    // navigationElems[3].dispatchEvent(mouseoverer);
    // navigationElems[3].dispatchEvent(mouseleaver);

    var mainButton = document.getElementById('mainBlockButton');

    mainButton.addEventListener('click', () => {
        if (pageYOffset > mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + reviewBlockHeight + 200) scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + reviewBlockHeight + 200); else scrollerBottom(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + reviewBlockHeight + 200);
    });
    
    var footerLinks = document.getElementById('footer-block-links').getElementsByTagName('ul')[0].getElementsByTagName('li');

    footerLinks[3].addEventListener('click', () => {
        scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + programmBlockHeight + 200);
    });
    footerLinks[2].addEventListener('click', () => {
        scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + graduateBlockHeight + 200);
    });
    footerLinks[1].addEventListener('click', () => {
        scrollerTop(mainBlockHeight + whyUsBlockHeight + aboutUsBlockHeight + 200);
    });
    footerLinks[0].addEventListener('click', () => {
        scrollerTop(mainBlockHeight);
    });

    var navigationTiming;

    function scrollerTop(y) {
        scrollSpeed -= 0.001;
        if (pageYOffset <= 0) return;
        if (pageYOffset >= y) {
            window.scrollTo(0, pageYOffset - 40);
            navigationTiming = setTimeout(() => {scrollerTop(y)}, scrollSpeed);
        } else {
            clearTimeout(navigationTiming);
            scrollSpeed = 5;
        }
    }

    function scrollerBottom(y) {
        scrollSpeed -= 0.001;
        if (pageYOffset + screen.height >= document.body.clientHeight) return;
        if (pageYOffset < y) {
            window.scrollTo(0, pageYOffset + 40);
            navigationTiming = setTimeout(() => {scrollerBottom(y)}, scrollSpeed);
        } else {
            clearTimeout(navigationTiming);
            scrollSpeed = 5;
        }
    }

}



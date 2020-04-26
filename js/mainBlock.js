window.addEventListener('resize', adressResizeCheck); 
window.addEventListener('load', adressResizeCheck); 

function adressResizeCheck() {
    if (document.body.offsetWidth < 1100) {
        var mainButton = document.getElementById('mainBlockButton');

        mainButton.onclick =  () => {
            mobileScrollerBottom(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight + mobileGraduateBlockMobileVerHeight + mobileProgrammsBlockMobileVerHeight + mobileGraduatersBlockMobileVerHeight);
        };

        document.getElementsByClassName('navigationText')[1].innerHTML = 'Навыки';
        document.getElementsByClassName('navigationText')[3].innerHTML = 'Выпускники';
    
        document.getElementsByClassName('navigationText')[0].addEventListener('click', () => {
            mobileScrollerBottom(mobileMainBlockMobileVerHeight);
        });
    
        document.getElementsByClassName('navigationText')[1].addEventListener('click', () => {
            mobileScrollerBottom(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight);
        });
    
        document.getElementsByClassName('navigationText')[2].addEventListener('click', () => {
            mobileScrollerBottom(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight + mobileGraduateBlockMobileVerHeight + 100);
        });
    
        document.getElementsByClassName('navigationText')[3].addEventListener('click', () => {
            mobileScrollerBottom(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight + mobileGraduateBlockMobileVerHeight + mobileProgrammsBlockMobileVerHeight + 100);
        });

        var footerLinks = document.getElementById('footer-block-links').getElementsByTagName('ul')[0].getElementsByTagName('li');

        footerLinks[3].onclick = () => {
            mobileScrollerTop(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight + mobileGraduateBlockMobileVerHeight + mobileProgrammsBlockMobileVerHeight + 150);
        };
        footerLinks[2].onclick = () => {
            mobileScrollerTop(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight + mobileGraduateBlockMobileVerHeight + 150);
        };
        footerLinks[1].onclick = () => {
            mobileScrollerTop(mobileMainBlockMobileVerHeight + mobileWhyUsBlockMobileVerHeight + mobileAboutUsBlockMobileVerHeight);
        };
        footerLinks[0].onclick =  () => {
            mobileScrollerTop(mobileMainBlockMobileVerHeight);
        };

    } else {
        document.getElementsByClassName('navigationText')[1].innerHTML = 'Будущий выпускник';
        document.getElementsByClassName('navigationText')[3].innerHTML = 'Наши выпускники';
    }
    
    var mobileNavigationTimer;
    
    var mobileMainBlockMobileVerHeight = document.getElementById('mainBlock').offsetHeight;
    var mobileWhyUsBlockMobileVerHeight = document.getElementById('why-us-block').offsetHeight;
    var mobileAboutUsBlockMobileVerHeight = document.getElementById('about-us-mobile-block').offsetHeight;
    var mobileGraduateBlockMobileVerHeight = document.getElementById('graduates-skills-block-mobile').offsetHeight;
    var mobileProgrammsBlockMobileVerHeight = document.getElementById('programmBlock').offsetHeight;
    var mobileGraduatersBlockMobileVerHeight = document.getElementById('graduates-reviews').offsetHeight;
    
    function mobileScrollerBottom(y) {
            if (pageYOffset + screen.height >= document.body.clientHeight) return;
            if (pageYOffset < y) {
                window.scrollTo(0, pageYOffset + 30);
                mobileNavigationTimer = setTimeout(() => {mobileScrollerBottom(y)}, 4);
            } else {
                clearTimeout(mobileNavigationTimer);
            }
    }
    
    function mobileScrollerTop(y) {
        if (pageYOffset <= 0) return;
        if (pageYOffset >= y) {
            window.scrollTo(0, pageYOffset - 30);
            mobileNavigationTimer = setTimeout(() => {mobileScrollerTop(y)}, 4);
        } else {
            clearTimeout(mobileNavigationTimer);
        }
    }
}
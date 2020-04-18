var graduates = document.getElementsByClassName('graduates-skills-block-list-item');

for (var i = 0; i < graduates.length; i++) {
    graduateSetter(i);
}

function graduateSetter(i) {
    var closeTimer;
    graduates[i].addEventListener('mouseover', () => {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
            graduates[i].getElementsByTagName('p')[0].style.opacity = 1;
        },300);
        graduates[i].getElementsByTagName('img')[0].style.opacity = 0;
    });
    graduates[i].addEventListener('mouseleave', () => {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
            graduates[i].getElementsByTagName('img')[0].style.opacity = 1;
            graduates[i].getElementsByTagName('p')[0].style.opacity = 0;
        },300);
        graduates[i].getElementsByTagName('p')[0].style.opacity = 0;
    });
}
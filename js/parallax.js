
var circlesParallaxed = document.getElementsByClassName('bodyAbsolutedCircles');
var imgParallaxed = document.getElementById('backgroundParallax');
var mainScreenHeight = document.getElementById('mainBlock').clientHeight;
var mainScreenDarker = document.getElementById('backgroundDarker');

document.body.addEventListener('mouseover', parallax);
document.body.addEventListener('mousemove', parallax);
window.addEventListener('scroll', () => {
    if (pageYOffset <= mainScreenHeight) mainScreenDarker.style.opacity = .7 - (mainScreenHeight - pageYOffset) / mainScreenHeight + "";
});
// document.getElementById('mainBlock').addEventListener('mouseover', imgParallax);
// document.getElementById('mainBlock').addEventListener('mousemove', imgParallax);

document.addEventListener('scroll', backParallax);

function parallax(event) {
    var horisontalParallaxPercent = Math.round((Math.round(event.pageX / document.body.clientWidth * 100) - 50) / 5);
    var verticalParallaxPercent = Math.round((Math.round(event.pageY / document.body.clientHeight * 100) - 50));

    for (var elem of circlesParallaxed) {
        elem.style.transform = 'translate(' + -1 * horisontalParallaxPercent + 'px, ' + -1 * verticalParallaxPercent + 'px)';
        // var rnd = Math.floor(Math.random() * Math.floor(10));
        // elem.style.transform = 'translate(' + rnd + 'px, ' + rnd + 'px)';
    }

    // mover();
}

function imgParallax(event) {
    // var horisontalParallaxPercent = Math.round((Math.round(event.pageX / document.body.clientWidth * 100) - 50) / 5);
    // var verticalParallaxPercent = Math.round((Math.round(event.pageY / document.body.clientHeight * 100) - 50));
    // imgParallaxed.style.transform = 'translateX(' + -horisontalParallaxPercent/2 + 'px)';
}

function backParallax(event) {
    if (pageYOffset < 1000) {
        // imgParallaxed.style.transform = 'translateY(' + pageYOffset*0.3+'px)';
        // document.getElementById('mainBlockMax').style.marginTop = 100 + pageYOffset * 0.3 + 'px';
    }

    if (pageYOffset > 200) {
        document.getElementById('mainBlockText').style.opacity = 0;
    } else {
        document.getElementById('mainBlockText').style.opacity = 1;
    }
    
}

// function mover() {
//     for (var elem of circlesParallaxed) {
//         elem.style.transform = 'translate(' +  + ', 10px)';
//     }
// }
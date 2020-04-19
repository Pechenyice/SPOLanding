
var circlesParallaxed = document.getElementsByClassName('bodyAbsolutedCircles');

document.body.addEventListener('mouseover', parallax);
document.body.addEventListener('mousemove', parallax);

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

// function mover() {
//     for (var elem of circlesParallaxed) {
//         elem.style.transform = 'translate(' +  + ', 10px)';
//     }
// }
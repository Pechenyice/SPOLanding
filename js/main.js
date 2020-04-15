window.onload = () => {
    var navigationElems = document.getElementsByClassName('navigationIconBlock');
    var connections = document.getElementsByClassName('navigationConnection');

    navigationElems[0].addEventListener('mouseover', () => {
        navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
    });
    navigationElems[0].addEventListener('mouseleave', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
    });
    
    navigationElems[1].addEventListener('mouseover', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        navigationElems[1].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = 'white';
        connections[0].style.backgroundColor = 'white';
    });
    navigationElems[1].addEventListener('mouseleave', () => {
        if (!navigationElems[0].classList.contains('navigationActive')) navigationElems[0].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
        if (!navigationElems[1].classList.contains('navigationActive')) {
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
        if (!navigationElems[2].classList.contains('navigationActive')) {
            navigationElems[2].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            for (var i = 0; i < connections.length - 1; i++) {
                connections[i].style.backgroundColor = '#393E46';
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
        if (!navigationElems[3].classList.contains('navigationActive')) {
            navigationElems[3].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            for (var i = 0; i < connections.length; i++) {
                connections[i].style.backgroundColor = '#393E46';
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

    navigationElems[0].addEventListener('click', () => {
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
        if (!navigationElems[3].classList.contains('navigationActive')) navigationElems[3].classList.toggle('navigationActive');
        for (var i = 0; i < navigationElems.length; i++) {
            if (i == 3) continue;
            if (navigationElems[i].classList.contains('navigationActive')) {
                navigationElems[i].classList.toggle('navigationActive');
                navigationElems[i].getElementsByClassName('navigationIconMainModel')[0].style.backgroundColor = '#393E46';
            }
        }
    });

}

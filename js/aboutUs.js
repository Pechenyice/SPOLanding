var approach = document.getElementById('aboutApproach');
var method = document.getElementById('aboutMethod');
var it = document.getElementById('aboutIT');
var future = document.getElementById('aboutFuture');
var format = document.getElementById('aboutFormat');

var text = document.getElementById('aboutTextPlace');
var nameAbout = document.getElementById('aboutTextNamePlace');
var aboutBox = document.getElementById('aboutText');

var handler = 0;
var aboutTimer;

approach.addEventListener('click', () => {
    clearTimeout(aboutTimer);
    if (handler != 1) {
        switch (handler) {
            case 2: {
                method.style.backgroundColor = "#1B1030";
                break;
            }
            case 3: {
                it.style.backgroundColor = "#1B1030";
                break;
            }
            case 4: {
                future.style.backgroundColor = "#1B1030";
                break;
            }
            case 5: {
                format.style.backgroundColor = "#1B1030";
                break;
            }
        }
        handler = 1;
        approach.style.backgroundColor = "#853898";
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "approach";
            nameAbout.innerHTML = "Подход к обучению";
            aboutBox.style.opacity = 1;
        },300);
    }
});

method.addEventListener('click', () => {
    clearTimeout(aboutTimer);
    if (handler != 2) {
        switch (handler) {
            case 1: {
                approach.style.backgroundColor = "#1B1030";
                break;
            }
            case 3: {
                it.style.backgroundColor = "#1B1030";
                break;
            }
            case 4: {
                future.style.backgroundColor = "#1B1030";
                break;
            }
            case 5: {
                format.style.backgroundColor = "#1B1030";
                break;
            }
        }
        handler = 2;
        method.style.backgroundColor = "#853898";
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "method";
            nameAbout.innerHTML = "Методы обучения";
            aboutBox.style.opacity = 1;
        },300);
       
    }
});

it.addEventListener('click', () => {
    clearTimeout(aboutTimer);
    if (handler != 3) {
        switch (handler) {
            case 2: {
                method.style.backgroundColor = "#1B1030";
                break;
            }
            case 1: {
                approach.style.backgroundColor = "#1B1030";
                break;
            }
            case 4: {
                future.style.backgroundColor = "#1B1030";
                break;
            }
            case 5: {
                format.style.backgroundColor = "#1B1030";
                break;
            }
        }
        handler = 3;
        it.style.backgroundColor = "#853898";
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "it";
            nameAbout.innerHTML = "Почему IT?";
            aboutBox.style.opacity = 1;
        },300);
        
    }
});

future.addEventListener('click', () => {
    clearTimeout(aboutTimer);
    if (handler != 4) {
        switch (handler) {
            case 2: {
                method.style.backgroundColor = "#1B1030";
                break;
            }
            case 3: {
                it.style.backgroundColor = "#1B1030";
                break;
            }
            case 1: {
                approach.style.backgroundColor = "#1B1030";
                break;
            }
            case 5: {
                format.style.backgroundColor = "#1B1030";
                break;
            }
        }
        handler = 4;
        future.style.backgroundColor = "#853898";
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "future";
            nameAbout.innerHTML = "будущее";
            aboutBox.style.opacity = 1;
        },300);
        
    }
});

format.addEventListener('click', () => {
    clearTimeout(aboutTimer);
    if (handler != 5) {
        switch (handler) {
            case 2: {
                method.style.backgroundColor = "#1B1030";
                break;
            }
            case 3: {
                it.style.backgroundColor = "#1B1030";
                break;
            }
            case 4: {
                future.style.backgroundColor = "#1B1030";
                break;
            }
            case 1: {
                approach.style.backgroundColor = "#1B1030";
                break;
            }
        }
        handler = 5;
        format.style.backgroundColor = "#853898";
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "format";
            nameAbout.innerHTML = "формат";
            aboutBox.style.opacity = 1;
        },300);
        
    }
});

it.click();
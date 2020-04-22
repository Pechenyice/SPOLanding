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
                method.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 3: {
                it.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 4: {
                future.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 5: {
                format.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
        }
        handler = 1;
        approach.getElementsByClassName('absolutedPlaceholder')[0].style.width = '100%';
        approach.getElementsByClassName('absolutedPlaceholder')[0].style.height = '100%';
        approach.getElementsByClassName('absolutedPlaceholder')[0].style.left = '0';
        approach.getElementsByClassName('absolutedPlaceholder')[0].style.top = '0';
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "Большая часть полученной теории в будущем отражается в виде выполнения <span class='veryImportantWord'>практических задач</span>. Мы это делаем для того, чтобы показать студентам, что информация, которую они получают в процессе обучения действительно необходима им для решения конкретных вопросов.<br/>Наша программа стремится развить у студентов все необходимые компетенции не только в профессиональной сфере, но и в жизненной. Среди них: умение работать удаленно, умение фильтровать лишнюю информацию, неординарное мышление и многие другие.";

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
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 3: {
                it.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 4: {
                future.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 5: {
                format.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
        }
        handler = 2;
        method.getElementsByClassName('absolutedPlaceholder')[0].style.width = '100%';
        method.getElementsByClassName('absolutedPlaceholder')[0].style.height = '100%';
        method.getElementsByClassName('absolutedPlaceholder')[0].style.left = '0';
        method.getElementsByClassName('absolutedPlaceholder')[0].style.top = '0';
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "<span class='veryImportantWord'>В процессе обучения</span> студенты получат компетенции в области разработки программного обеспечения, операционных систем и их компонентов, проектирования баз данных, облачных технологий и основ кибербезопасности.<br/><span class='veryImportantWord'>В результате обучения</span> студенты будут владеть общими навыками проектирования информационных систем, разработки искусственного интеллекта и специализированными программными продуктами для разработки нейронных сетей.";
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
                method.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 1: {
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 4: {
                future.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 5: {
                format.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
        }
        handler = 3;
        it.getElementsByClassName('absolutedPlaceholder')[0].style.width = '100%';
        it.getElementsByClassName('absolutedPlaceholder')[0].style.height = '100%';
        it.getElementsByClassName('absolutedPlaceholder')[0].style.left = '0';
        it.getElementsByClassName('absolutedPlaceholder')[0].style.top = '0';
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "IT – это удивительный мир множества профессий, здесь вы можете найти специальность, которая вас заинтересует. Вы гуманитарий? Технарь? Или, быть может, вообще ничего не умеете? Это неважно, для каждого найдется <span class='veryImportantWord'>работа по душе</span>.";
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
                method.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 3: {
                it.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 1: {
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 5: {
                format.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                format.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
        }
        handler = 4;
        future.getElementsByClassName('absolutedPlaceholder')[0].style.width = '100%';
        future.getElementsByClassName('absolutedPlaceholder')[0].style.height = '100%';
        future.getElementsByClassName('absolutedPlaceholder')[0].style.left = '0';
        future.getElementsByClassName('absolutedPlaceholder')[0].style.top = '0';
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "Деятельность <span class='veryImportantWord'>разработчиков нейронных сетей</span> заключается в том, чтобы максимально близко смоделировать работу человеческой нервной системы — а именно, её способности к обучению и исправлению ошибок. Нейросеть имитирует не только деятельность, но и структуру нервной системы человека.<br/>Компьютерное зрение, робототехника, технологическая медицина, голосовые помощники, чат-боты, автопилоты, генерация текстов, музыки и изображений – далеко не полный перечень областей применения нейросетей. Фантастика? Уже нет.";
            nameAbout.innerHTML = "Профессия будущего";
            aboutBox.style.opacity = 1;
        },300);
        
    }
});

format.addEventListener('click', () => {
    clearTimeout(aboutTimer);
    if (handler != 5) {
        switch (handler) {
            case 2: {
                method.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                method.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 3: {
                it.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                it.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 4: {
                future.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                future.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
            case 1: {
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.width = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.height = '0';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.left = '50%';
                approach.getElementsByClassName('absolutedPlaceholder')[0].style.top = '50%';
                break;
            }
        }
        handler = 5;
        format.getElementsByClassName('absolutedPlaceholder')[0].style.width = '100%';
        format.getElementsByClassName('absolutedPlaceholder')[0].style.height = '100%';
        format.getElementsByClassName('absolutedPlaceholder')[0].style.left = '0';
        format.getElementsByClassName('absolutedPlaceholder')[0].style.top = '0';
        aboutBox.style.opacity = 0;
        aboutTimer = setTimeout(() => {
            text.innerHTML = "Наш факультет стремится к <span class='veryImportantWord'>непрерывному</span> получению актуальных практических знаний, сделать его таковым позволяют наше современное компьютерное оборудование, облачные сервисы и технологии электронного обучения. Предлагаемые дополнительные дисциплины и многочисленные онлайн-курсы делают обучение свободнее, а также позволяет нашим студентам выбирать те компетенции, в которых они видят своё профессиональное развитие.";
            nameAbout.innerHTML = "Формат обучения";
            aboutBox.style.opacity = 1;
        },300);
        
    }
});

it.click();
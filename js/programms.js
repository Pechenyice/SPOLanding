
const sections = [
    {
        name: "Школьная программа",
        icon: '<i class="fas fa-graduation-cap"></i>'
    },
    {
        name: "Профильная дисциплина",
        icon: '<i class="fas fa-laptop-code"></i>'
    },
    {
        name: "Техническая наука",
        icon: '<i class="fas fa-square-root-alt"></i>'
    },
    {
        name: "Гуманитарная наука",
        icon: '<i class="fas fa-language"></i>'
    },
    {
        name: "Спорт - это жизнь",
        icon: '<i class="fas fa-dumbbell"></i>'
    }
]

const lessons = [

    [
        {
            name: "Русский язык",
            gridWidth: 4,
            section: 0,
            value: 60,
            text: "Закончить школьную программу"
        },
        {
            name: "Математика",
            gridWidth: 4,
            section: 0,
            value: 160,
            text: "Закончить школьную программу"
        },
        {
            name: "Информатика",
            gridWidth: 4,
            section: 0,
            value: 60,
            text: "Закончить школьную программу"
        },
        {
            name: "Иностранный язык",
            gridWidth: 4,
            section: 0,
            value: 48,
            text: "Закончить школьную программу"
        },
        {
            name: "Литература",
            gridWidth: 3,
            section: 0,
            value: 60,
            text: "Закончить школьную программу"
        },
        {
            name: "Астрономия",
            gridWidth: 3,
            section: 0,
            value: 60,
            text: "Закончить школьную программу"
        },
        {
            name: "БЖД",
            gridWidth: 2,
            section: 0,
            value: 40,
            text: "Закончить школьную программу"
        },
        {
            name: "Физика",
            gridWidth: 3,
            section: 0,
            value: 80,
            text: "Закончить школьную программу"
        },
        {
            name: "Физ-ра",
            gridWidth: 3,
            section: 4,
            value: 60,
            text: "Закончить школьную программу"
        },
        {
            name: "Биология",
            gridWidth: 3,
            section: 0,
            value: 40,
            text: "Закончить школьную программу"
        },
        {
            name: "История",
            gridWidth: 3,
            section: 0,
            value: 60,
            text: "Закончить школьную программу"
        }
    ],

    [
        {
            name: "Теория вероятностей и математическая статистика",
            gridWidth: 12,
            section: 2,
            value: 103,
            text: "Элементы теории вероятностей. Большичнство явлений, на первый взгляд случайных, на самом деле таковыми не являются, и даже больше: они описвыются довольно строгими формулами. В ходе изучения этой дисциплины вы поймете, почему казино всегда в выигрыше,  лотереи - вовсе не обман, и многое другое"
        },
        {
            name: "Основы программирования",
            gridWidth: 6,
            section: 1,
            value: 76,
            text: "Изучение практический основ программирования. Введение в решение алгоритмических задач"
        },
        {
            name: "Основы теории алгоритмов",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "В настоящее время в области програмной инженерии для решения многих сложных задач вместо традиционой математики  используют разной степени сложности алгоритмы. Именно их изучением вы и займетесь в рамках этого предмета"
        },
        {
            name: "Дискретная математика",
            gridWidth: 6,
            section: 2,
            value: 76,
            text: "Будут изучены такие темы, как теория чисел, комбинаторика, множества и некоторые другие"
        },
        {
            name: "Математическая логика",
            gridWidth: 6,
            section: 2,
            value: 76,
            text: "Математическая логика является важным разделом высшей математики, она необходима для построения алгоритмов.  Вы изучите высказывания и действия над ними, формулы, основные законы и, конечно же, будут практические задачи. Также вы узнаете местами и весьма забавное отличие матлогики от нашей «обычной» логики"
        },
        {
            name: "Элементы высшей математики",
            gridWidth: 8,
            section: 2,
            value: 82,
            text: "Для того, чтобы обучить студентов методам моделирования, аналитического и компьютерного исследования поведения сложных систем, необходимо знать фундаметнальную математику"
        },
        {
            name: "Введение в WEB",
            gridWidth: 4,
            section: 1,
            value: 38,
            text: "Веб программирование крайне популярно в настоящее время. Низкий порог входа, боьлшое количество вакансий. Оно подходит как и для творческих личностей, так и для тех, кому интересней программировать: вы можете верстать страницы или же описывать его поведение"
        },
        {
            name: "История",
            gridWidth: 4,
            section: 3,
            value: 63,
            text: "Знание истории даёт возможность выстроить стройную систему понятий, целостную картину мира, осознать взаимосвязь событий и явлений"
        },
        {
            name: "Основы проектирования баз данных",
            gridWidth: 8,
            section: 1,
            value: 38,
            text: "Необходимым навыком является умение хранить и структурировать разного обьема данные. Для этого и будут изучаться базы данных"
        },
        {
            name: "Системное программирование",
            gridWidth: 6,
            section: 1,
            value: 40,
            text: "Чтобы развить свои навыки программирования важно понимать, как отсроен компьтер. Вы изучите такие компоненты компьютерной системы, как процессор, оперативная память, устройства ввода-вывода, сетевое оборудование и т.п.. Также вас озакомят с языком программирования \"почти самого низкого уровня\" - ассемблером"
        },
        {
            name: "Паттерны программирования",
            gridWidth: 6,
            section: 1,
            value: 40,
            text: "Чтобы не приходилось изобретать велосипеды, в программировании существуют шаблоны (паттерны), которые реализуют какое-то часто использующееся явление. Знание основных паттернов (singleton, factory, builder и д т.п) сделает из вас программиста более высокого уровня"
        },
        {
            name: "Генетические технологии",
            gridWidth: 6,
            section: 1,
            value: 63,
            text: "Гены - это наследственные факторы. С их помощью определяется, какие свойства родителя будут нужны его ребенку для более \"успешного существования\", а от каиких лучше избавится. Знание этой области пригодится вам для развития нейронных сетей"
        },
        {
            name: "Практика рефакторинга",
            gridWidth: 6,
            section: 1,
            value: 40,
            text: "Рефакторинг - это изменение кода уже готовой программы, при условии, что поведение програмы не меняется. Это делается с целью улучшить внутреннюю структуру этого приложения. Практика этого метода поможет вам на пути становления профессиональным программистом"
        },
        {
            name: "Социальная психология",
            gridWidth: 5,
            section: 3,
            value: 38,
            text: "Нейронные сети применяются и для создания ИИ. Если мы захотим создать, например, виртуальный город, то нам нужно будет понять, как описать поведение  его жителей, их взаимодействия. Дать ответ на этот вопрос поможет социальная психология"
        },
        {
            name: "Иностранный язык",
            gridWidth: 5,
            section: 3,
            value: 63,
            text: "Мы считаем, что настоящий специалист обязан знать на должном уровне английский язык, поэтому обучение ему вас ждет на всех 4 курсах"
        },
        {
            name: "Физ-ра",
            gridWidth: 2,
            section: 4,
            value: 40,
            text: "Предмет, где вы сможете отдохнуть от тяжелой умственной деятельности"
        }
    ], 
  
    [
        {
            name: "Прикладная статистика",
            gridWidth: 6,
            section: 2,
            value: 38,
            text: "Прикладня статистика - это наука, изучающая методы обработки статистических данных. Знания в этой области пригодятся вам для того, чтобы уметь обучать нейронные сети"
        },
        {
            name: "Учебная практика",
            gridWidth: 6,
            section: 1,
            value: 42,
            text: "В рамках этого предмета вам будет предлагаться изучение разных тем, связанных с информационными технологиями. Это необходимо для общего развития студента"
        },
        {
            name: "Основы машинного обучения",
            gridWidth: 7,
            section: 1,
            value: 41,
            text: "Машинное обучение - это подраздел ИИ, в котором изучаются построения алгоритмов, способных обучаться. Нейросети являются одним из методов машинного обучения"
        },
        {
            name: "Анализ данных",
            gridWidth: 5,
            section: 1,
            value: 38,
            text: "С помощью прикладных программ можно упростить работу с данными до невозможности"
        },
        {
            name: "Криптография",
            gridWidth: 5,
            section: 1,
            value: 54,
            text: "Знание криптографии в цифровых технологиях необходимо как инструмент защиты конфиденциальных данных а так же как средство противодействия незаконному копированию и распространению данных"
        },
        {
            name: "Строение мозга и нейроны",
            gridWidth: 7,
            section: 1,
            value: 41,
            text: "Знание устройства мозга и нейронов поможет в дальнейшем обучении"
        },
        {
            name: "Основы кибербезопасности",
            gridWidth: 7,
            section: 1,
            value: 38,
            text: "Будут изучены методы, используемые для защиты конфиденциальных данных, компьютерных систем, сетей и программных приложений от кибератак"
        },
        {
            name: "Безопасность БД",
            gridWidth: 5,
            section: 1,
            value: 38,
            text: "Данные необходимо не только уметь хранить, но и охранять. Вы изучите какие бывают способы взлома баз данных, как с ними бороться и многое другое"
        },
        {
            name: "Алгоритмы и графы",
            gridWidth: 6,
            section: 1,
            value: 84,
            text: "В общем этот предмет является продолжением дисциплины \"основы теории алгоритмов\" со второго курса"
        },
        {
            name: "Иностранный язык",
            gridWidth: 6,
            section: 3,
            value: 60,
            text: "Мы считаем, что настоящий специалист обязан знать на должном уровне английский язык, поэтому обучение ему вас ждет на всех 4 курсах"
        },
        {
            name: "Этичный взлом",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Нужно овладеть умением этичного взлома, с помощью которого можно найти ошибки в чужих системах и обратить на них внимание разработчиков"
        },
        {
            name: "Курсовая работа",
            gridWidth: 6,
            section: 1,
            value: 42,
            text: "Project v1.0.0"
        },
        {
            name: "ЭВМ",
            gridWidth: 4,
            section: 2,
            value: 90,
            text: "Для того, чтобы обучить студентов методам моделирования, аналитического и компьютерного исследования поведения сложных систем, необходимо знать фундаметнальную математику"
        },
        {
            name: "Философия",
            gridWidth: 4,
            section: 3,
            value: 38,
            text: "Быть или не быть?"
        },
        {
            name: "Физ-ра",
            gridWidth: 4,
            section: 4,
            value: 30,
            text: "Предмет, где вы сможете отдохнуть от тяжелой умственной деятельности. (это шутка, потом будет нормально)"
        }
    ],
  
    [
        {
            name: "Обработка данных с помощью ИИ",
            gridWidth: 7,
            section: 1,
            value: 90,
            text: "Дисциплина, в которой изучаются автоматизированные способы извлечения информации из систематически собираемых сведений"
        },
        {
            name: "Работа с Big Data",
            gridWidth: 5,
            section: 1,
            value: 42,
            text: "Вами будет изучена Big Data - серия подходов, инструментов и методов обработки структурированных и неструктурированных данных огромных объёмов и значительного многообразия для получения воспринимаемых человеком результатов. Работа с Big Data является неотьемлемой частью нейронных сетей"
        },
        {
            name: "Методы построения ИИ",
            gridWidth: 6,
            section: 1,
            value: 90,
            text: "Да, это жестко"
        },
        {
            name: "Креативные технологии",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Это комплекс практических упражнений для повышения пластичности мышления, увеличения количества решений одной и той же задачи, способности решать новые нетривиальные задачи, предусматривать различные сценарии развития проектов"
        },
        {
            name: "Документирование проектов",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Одним из болезненных вопросов в разработке ПО всегда был и остаётся процесс документирования этой самой разработки. Важно уметь построить процесс так, чтобы неопознанного и неописанного функционала не было, все члены команды вовремя получали актуальную информацию и вообще был мир во всём. Этому вас научат здесь и научат"
        },
        {
            name: "Нейротехнологии",
            gridWidth: 6,
            section: 1,
            value: 90,
            text: "Нейротехнологии занимаются одной из главных проблем мировой науки —  пониманием устройства и принципов работы головного мозга человека. Вы узнаете что такое \"мокрые\" и \"сухие\" нейронные сети, зачем нужны нейротехнологии в военной сфере, и конечно же о их применении в развлекательной индустрии"
        },
        {
            name: "Обучение нейронных сетей",
            gridWidth: 7,
            section: 1,
            value: 42,
            text: "Да, это жестко"
        },
        {
            name: "Иностранный язык",
            gridWidth: 5,
            section: 3,
            value: 60,
            text: "Мы считаем, что настоящий специалист обязан знать на должном уровне английский язык, поэтому обучение ему вас ждет на всех 4 курсах"
        },
        {
            name: "Нейроинтерфейсы",
            gridWidth: 6,
            section: 1,
            value: 64,
            text: "В рамках этого предмета будут изучены технологии, позволяющие связать человеческий мозг и компьтер. Например, у вас появится точное представленеи о том, как работают протезы. Быть может в конце обучения именно вы придумаете, как перенести наше сознание в компьютор и тогда получите 5 автоматом и даже возможность сфотографироваться с деканом нашего факультета"
        },
        {
            name: "Облачные технологии",
            gridWidth: 6,
            section: 1,
            value: 56,
            text: "Да, это жестко"
        },
        {
            name: "Визуализация алгоритмов",
            gridWidth: 6,
            section: 1,
            value: 42,
            text: "Каждый человек, хоть бы и мельком, но хотел бы увидеть своими глазами, как протекает процесс \"пузырьковой\" сортировки. Вам дадут такую возможность, и научать визуализировать различные алгоритмы"
        },
        {
            name: "Проектная деятельность",
            gridWidth: 6,
            section: 1,
            value: 56,
            text: "Project v1.0.1"
        }
    ]


];

// window.onload = () => {

    var timer;
    var elems = document.getElementsByClassName('grided');
    var main = document.getElementById('programmInfo');
    var mainHint = document.getElementById('programmInfoText');
    var mainFull = document.getElementById('programmInfoFull');
    var grid = document.getElementById('gridProgramms');


    var courses = document.getElementById('coursesContent').getElementsByTagName('li');
    courses[0].addEventListener('click', () => {spawner(0);});
    courses[1].addEventListener('click', () => {spawner(1);});
    courses[2].addEventListener('click', () => {spawner(2);});
    courses[3].addEventListener('click', () => {spawner(3);});

    courses[0].click();

    for (var elem of elems) {
        elem.addEventListener('mouseover', () => {
            clearTimeout(timer);
            mainHint.style.opacity = '0';
            timer = setTimeout(() => {
                mainFull.style.opacity = '1';
            }, 300);
        });
        elem.addEventListener('mouseleave', () => {
            clearTimeout(timer);
            mainFull.style.opacity = '0';
            timer = setTimeout(() => {
                mainHint.style.opacity = '1';
            }, 300);
        });
        
    }

    var activeCourse = 1;

    function spawner(iteration) {
        grid.innerHTML = '';

        switch (activeCourse) {
            case 1: {
                document.getElementById('coursesContent').getElementsByTagName('li')[0].getElementsByTagName('div')[0].style.left = '50%';
                document.getElementById('coursesContent').getElementsByTagName('li')[0].getElementsByTagName('div')[0].style.width = '0%';
                break;
            }
            case 2: {
                document.getElementById('coursesContent').getElementsByTagName('li')[1].getElementsByTagName('div')[0].style.left = '50%';
                document.getElementById('coursesContent').getElementsByTagName('li')[1].getElementsByTagName('div')[0].style.width = '0%';
                break;
            }
            case 3: {
                document.getElementById('coursesContent').getElementsByTagName('li')[2].getElementsByTagName('div')[0].style.left = '50%';
                document.getElementById('coursesContent').getElementsByTagName('li')[2].getElementsByTagName('div')[0].style.width = '0%';
                break;
            }
            case 4: {
                document.getElementById('coursesContent').getElementsByTagName('li')[3].getElementsByTagName('div')[0].style.left = '50%';
                document.getElementById('coursesContent').getElementsByTagName('li')[3].getElementsByTagName('div')[0].style.width = '0%';
                break;
            }
        }

        document.getElementById('coursesContent').getElementsByTagName('li')[iteration].getElementsByTagName('div')[0].style.left = '10%';
        document.getElementById('coursesContent').getElementsByTagName('li')[iteration].getElementsByTagName('div')[0].style.width = '80%';
        activeCourse = iteration + 1;

        var i = 0;
                for (var lesson of lessons[iteration]) {
                    // console.log(lesson);
                    var div = document.createElement('div');
                    div.className = "grided";
                    div.style.gridColumn = "span " + lesson.gridWidth;
                    div.innerHTML = lesson.name;
                    // mainFull.getElementsByClassName('hello');
                    var icon = document.getElementById('programmInfoFullIcon');
                    var name = document.getElementById('programmInfoFullName');
                    var section = document.getElementById('programmInfoFullSection');
                    var hours = document.getElementById('programmInfoFullHours');
                    var description = document.getElementById('programmInfoFullDescription');
                    shower(div, i);
                    grid.append(div);
                    i++;
                }

        function shower(div, place) {
            div.addEventListener('mouseover', () => {
                clearTimeout(timer);
                mainHint.style.opacity = '0';
                icon.innerHTML = sections[lessons[iteration][place].section].icon;
                name.innerHTML = lessons[iteration][place].name;
                section.innerHTML = "Раздел: <span class=\"fakeLight\">" + sections[lessons[iteration][place].section].name + "</span>";
                hours.innerHTML = "Нагрузка: <span class=\"fakeLight\">" + lessons[iteration][place].value + " ч</span>";
                description.innerHTML = lessons[iteration][place].text;
                timer = setTimeout(() => {
                    mainFull.style.opacity = '1';
                }, 300);
            });
            div.addEventListener('mouseleave', () => {
                clearTimeout(timer);
                mainFull.style.opacity = '0';
                timer = setTimeout(() => {
                    mainHint.style.opacity = '1';
                }, 300);
            });
        }
    }
// }

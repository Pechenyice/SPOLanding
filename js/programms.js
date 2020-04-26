
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
            text: "Мы русские и с нами Бог"
        },
        {
            name: "Математика",
            gridWidth: 4,
            section: 0,
            value: 160,
            text: "Математика - здесь вы сможете повысить свой профессиональный уровень, у программистов он зависит от понимания технологий, умения мыслить и способностей к решению нестандартных задач. Крайне сложно обойтись без знания математики тем, кто хочет работать в сфере IT"
        },
        {
            name: "Информатика",
            gridWidth: 4,
            section: 0,
            value: 60,
            text: "Информатика - предмет, который морально подготовит вас к началу занятиям программированию"
        },
        {
            name: "Иностранный язык",
            gridWidth: 4,
            section: 0,
            value: 48,
            text: "London is the capital of Great Britain"
        },
        {
            name: "Литература",
            gridWidth: 3,
            section: 0,
            value: 60,
            text: "Литература - предмет, на котором в рамках одного курса вы изучите наиболее значимые произведения 20 века как отечественных, так и зарубежных авторов"
        },
        {
            name: "Астрономия",
            gridWidth: 3,
            section: 0,
            value: 60,
            text: "Астрономия - предмет, который нам пришлось поставить вместо астрологии, так как её преподавание не одобрено неким \"министерством образования\""
        },
        {
            name: "БЖД",
            gridWidth: 2,
            section: 0,
            value: 40,
            text: "БЖД - это тот предмет, который крайне необходим будущему программисту. Известно, что жизнь программистов наполнена яркими, красочными событиями, рассказы о которых могут захватить дух слушателя. Поэтому вам будет полезно знать, как например увернуться от наводнения, убежать от лавины, перепрыгнуть костер и многое другое"
        },
        {
            name: "Физика",
            gridWidth: 3,
            section: 0,
            value: 80,
            text: "Физика описывает, по каким законам и \"алгоритмам\" работает наш мир. Вам пригодятся эти знания, так как многие приемы в программировании нейронных сетей взяты именно из природы"
        },
        {
            name: "Физ-ра",
            gridWidth: 3,
            section: 4,
            value: 60,
            text: "Здесь могла быть ваша реклама"
        },
        {
            name: "Биология",
            gridWidth: 3,
            section: 0,
            value: 40,
            text: "Биология - необходимый предмет для получаемой специальности, ведь в будущем, когда вы начнете изучать и создавать нейронные сети, вы будете ориентироваться на работу нервной системы различных живых организмов"
        },
        {
            name: "История",
            gridWidth: 3,
            section: 0,
            value: 60,
            text: "История - это крайне важный предмет. Каждый гражданин должен, как минимум, знать историю своей страны. При успешном изучении предмета вы сможете смело заявлять, что \"Крым наш\", устраивать дебаты на тему Украины и многое другое. Так за Царя, за Родину, за Веру!!!"
        }
    ],

    [
        {
            name: "Теория вероятностей и математическая статистика",
            gridWidth: 12,
            section: 2,
            value: 103,
            text: "Элементы теории вероятностей - это описание математическими формулами явлений, на первый взгляд случайных. В ходе изучения этой дисциплины вы поймете, почему казино всегда в выигрыше, а лотереи - вовсе не обман"
        },
        {
            name: "Основы программирования",
            gridWidth: 6,
            section: 1,
            value: 76,
            text: "Основы программирования - это то, с чего начинает каждый программист: изучение практических основ программирования и введение в решение алгоритмических задач"
        },
        {
            name: "Основы теории алгоритмов",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Теория алгоритмов активно используется в области программной инженерии для решения многих сложных задач вместо традиционной математики"
        },
        {
            name: "Дискретная математика",
            gridWidth: 6,
            section: 2,
            value: 76,
            text: "Дискретная математика - это графы, утверждения теория чисел, комбинаторика, множества и многое другое"
        },
        {
            name: "Математическая логика",
            gridWidth: 6,
            section: 2,
            value: 76,
            text: "Математическая логика - это важный раздел математики, здесь вы изучите высказывания и действия над ними, формулы, основные законы и, конечно же, будут практические задачи"
        },
        {
            name: "Элементы высшей математики",
            gridWidth: 8,
            section: 2,
            value: 82,
            text: "Высшая математика - это основы методов моделирования, аналитического и компьютерного исследования поведения сложных систем"
        },
        {
            name: "Введение в WEB",
            gridWidth: 4,
            section: 1,
            value: 38,
            text: "Веб-программист - самая распространённая профессия в IT-сфере: низкий порог входа, большое количество вакансий. Подходит, как и для творческих личностей, так и для тех, кому интереснее программировать"
        },
        {
            name: "История",
            gridWidth: 4,
            section: 3,
            value: 63,
            text: "История - это возможность выстроить стройную систему понятий, целостную картину мира, осознать взаимосвязь событий и явлений"
        },
        {
            name: "Основы проектирования баз данных",
            gridWidth: 8,
            section: 1,
            value: 38,
            text: "Основы проектирования баз данных - это те знания, с помощью которых вы будете знать, как хранить и структурировать данные в большом объёме"
        },
        {
            name: "Системное программирование",
            gridWidth: 6,
            section: 1,
            value: 40,
            text: "Системное программирование - это необходимая часть для развития навыков программирования. Вас обучат работе с системным программным обеспечением компьютера, также вас ознакомят с языком программирования \"почти самого низкого уровня\" - ассемблером"
        },
        {
            name: "Паттерны программирования",
            gridWidth: 6,
            section: 1,
            value: 40,
            text: "Паттерны - это шаблоны, которые реализуют какое-то часто использующееся явление. Знание основных паттернов (singleton, factory, builder и д т.п) сделает из вас программиста более высокого уровня"
        },
        {
            name: "Генетические технологии",
            gridWidth: 6,
            section: 1,
            value: 63,
            text: "Гены - это наследственные факторы. С их помощью определяется, какие свойства родителя будут нужны его ребенку для более \"успешного существования\", а от каких лучше избавиться. Знание этой области пригодится вам для развития нейронных сетей"
        },
        {
            name: "Практика рефакторинга",
            gridWidth: 6,
            section: 1,
            value: 40,
            text: "Рефакторинг - это изменение кода уже готовой программы, при условии, что поведение програмы не меняется. Практика этого метода поможет вам на пути становления профессиональным программистом"
        },
        {
            name: "Социальная психология",
            gridWidth: 5,
            section: 3,
            value: 38,
            text: "Социальная психология даст ответы на многие вопросы, касающиеся поведения людей, что поможет в разработке ИИ"
        },
        {
            name: "Иностранный язык",
            gridWidth: 5,
            section: 3,
            value: 63,
            text: "Английский язык - это то, что настоящий специалист обязан знать на должном уровне, поэтому обучение ему вас ждет на всех 4 курсах"
        },
        {
            name: "Физ-ра",
            gridWidth: 2,
            section: 4,
            value: 40,
            text: "Физическая культура - это неотъемлемая часть развития. Нужно научиться менять род деятельности на физический, чтобы с новыми силами браться за учёбу"
        }
    ], 
  
    [
        {
            name: "Прикладная статистика",
            gridWidth: 6,
            section: 2,
            value: 38,
            text: "Прикладная статистика - это наука, изучающая методы обработки статистических данных. Знания в этой области пригодятся вам для того, чтобы уметь обучать нейронные сети"
        },
        {
            name: "Учебная практика",
            gridWidth: 6,
            section: 1,
            value: 42,
            text: "Учебная практика - это изучение разных тем, связанных с информационными технологиями"
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
            text: "Анализ данных с помощью прикладных программ - это то, что поможет вам автоматизировать процесс решения научных и инженерных задач с помощью ЭВМ"
        },
        {
            name: "Криптография",
            gridWidth: 5,
            section: 1,
            value: 54,
            text: "Криптография - это инструмент защиты конфиденциальных данных а так же как средство противодействия незаконному копированию и распространению данных"
        },
        {
            name: "Строение мозга и нейроны",
            gridWidth: 7,
            section: 1,
            value: 41,
            text: "Строение мозга и нейроны - предмет, который даст необходимые знания для того, чтобы заниматься разработкой нейронных сетей. Нейросеть имитирует не только деятельность, но и структуру нервной системы человека"
        },
        {
            name: "Основы кибербезопасности",
            gridWidth: 7,
            section: 1,
            value: 38,
            text: "Основы кибербезопасности - предмет, изучающий методы, используемые для защиты конфиденциальных данных, компьютерных систем, сетей и программных приложений от кибератак"
        },
        {
            name: "Безопасность БД",
            gridWidth: 5,
            section: 1,
            value: 38,
            text: "Безопасность баз данных - это те знания, которые пригодятся вам для защиты данных. Вы изучите какие бывают способы взлома баз данных, как с ними бороться и многое другое"
        },
        {
            name: "Алгоритмы и графы",
            gridWidth: 6,
            section: 1,
            value: 84,
            text: "Алгоритмы и графы - это прямое продолжение дисциплин \"основы теории алгоритмов\" и \"дискретной математики\" со второго курса"
        },
        {
            name: "Иностранный язык",
            gridWidth: 6,
            section: 3,
            value: 60,
            text: "Английский язык - на данном курсе вы начнёте изучать технический английский язык. Владение техническим английским даёт преимущество программисту и является одной из составляющих его профессиональной компетентности"
        },
        {
            name: "Этичный взлом",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Этичный взлом - это проверка безопасности различных систем, с помощью которой можно найти ошибки в чужих системах и обратить на них внимание разработчиков"
        },
        {
            name: "Курсовая работа",
            gridWidth: 6,
            section: 1,
            value: 42,
            text: "Курсовая работа - это возможность применить имеющиеся знания и попробовать себя в исследовательской работе"
        },
        {
            name: "ЭВМ",
            gridWidth: 4,
            section: 2,
            value: 90,
            text: "Вы думали, что все кончилось? Да, мы закончили введение, переворачиваем страницу"
        },
        {
            name: "Философия",
            gridWidth: 4,
            section: 3,
            value: 38,
            text: "Философия - в ходе данной дисциплины вы будете искать ответы на главные жизненные вопросы. Быть или не быть?"
        },
        {
            name: "Физ-ра",
            gridWidth: 4,
            section: 4,
            value: 30,
            text: "Мы больше не знаем, чем вас удивить :("
        }
    ],
  
    [
        {
            name: "Обработка данных с помощью ИИ",
            gridWidth: 7,
            section: 1,
            value: 90,
            text: "Обработка данных с помощью ИИ - это изучение автоматизированных способов извлечения информации из систематически собираемых сведений"
        },
        {
            name: "Работа с Big Data",
            gridWidth: 5,
            section: 1,
            value: 42,
            text: "Big Data - это серия подходов, инструментов и методов обработки структурированных и неструктурированных данных огромных объёмов. Работа с Big Data является неотъемлемой частью нейронных сетей"
        },
        {
            name: "Методы построения ИИ",
            gridWidth: 6,
            section: 1,
            value: 90,
            text: "Методы построения искусственного интеллекта - ИИ может быть реализован с использованием нескольких подходов. Каких? Это вы и узнаете в ходе данного курса"
        },
        {
            name: "Креативные технологии",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Креативные технологии - это комплекс практических упражнений для повышения пластичности мышления, увеличения количества решений одной и той же задачи, способности решать новые нетривиальные задачи, предусматривать различные сценарии развития проектов"
        },
        {
            name: "Документирование проектов",
            gridWidth: 6,
            section: 1,
            value: 38,
            text: "Документирование - это один из болезненных вопросов в разработке ПО. Важно уметь построить процесс так, чтобы неопознанного и неописанного функционала не было, все члены команды вовремя получали актуальную информацию и вообще был мир во всём"
        },
        {
            name: "Нейротехнологии",
            gridWidth: 6,
            section: 1,
            value: 90,
            text: "Нейротехнологии - это понимание устройства и принципов работы головного мозга человека. Вы узнаете, что такое \"мокрые\" и \"сухие\" нейронные сети, зачем нужны нейротехнологии в военной сфере, и конечно же о их применении в развлекательной индустрии"
        },
        {
            name: "Обучение нейронных сетей",
            gridWidth: 7,
            section: 1,
            value: 42,
            text: "Обучение нейронных сетей - это процесс, в котором параметры нейронной сети настраиваются в зависимости от среды, для того, чтобы в результате обучения нейросеть была способна выполнять поставленную задачу"
        },
        {
            name: "Иностранный язык",
            gridWidth: 5,
            section: 3,
            value: 60,
            text: "Английский язык - на данном курсе каждый студент сможет освоить необходимые средства разработки, имеющие оригинальную языковую версию, читать техническую документацию и свободно общаться с клиентами"
        },
        {
            name: "Нейроинтерфейсы",
            gridWidth: 6,
            section: 1,
            value: 64,
            text: "Нейроинтерфейсы - это технологии, позволяющие связать человеческий мозг и компьютер. Например, у вас появится точное представление о том, как работают протезы. Быть может в конце обучения именно вы придумаете, как перенести наше сознание в компьютер и тогда получите 5 автоматом"
        },
        {
            name: "Облачные технологии",
            gridWidth: 6,
            section: 1,
            value: 56,
            text: "Облачные технологии - это технологии обработки данных, в которой компьютерные ресурсы предоставляются пользователю как интернет-сервис"
        },
        {
            name: "Визуализация алгоритмов",
            gridWidth: 6,
            section: 1,
            value: 42,
            text: "Визуализация алгоритмов - это способ понять работу различных алгоритмов, что может помочь найти ошибки в реализации программ"
        },
        {
            name: "Проектная деятельность",
            gridWidth: 6,
            section: 1,
            value: 56,
            text: "Проектная деятельность - это финальная часть 4-годового курса, в процессе разработки которой вы продемонстрируете все навыки, полученные на нашем факультете!"
        }
    ]


];

// window.onload = () => {

    var timer;
    var programmsContentTimer;
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
            clearTimeout(programmsContentTimer);
            clearTimeout(timer);
            mainHint.style.opacity = '0';
            timer = setTimeout(() => {
                mainFull.style.opacity = '1';
            }, 300);
        });
        elem.addEventListener('mouseleave', () => {
            clearTimeout(programmsContentTimer);
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
                    // programmsContentTimer = setTimeout(() => {
                        shower(div, i);
                    // }, 300);
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

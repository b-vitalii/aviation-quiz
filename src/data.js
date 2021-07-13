const data = [
  {
    id: 1,
    question: "Что в переводе с латинского означает «авиация»?",
    answers: [
      {
        text: "Полет",
        correct: false,
      },
      {
        text: "Птица",
        correct: true,
      },
      {
        text: "Небо",
        correct: false,
      },
      {
        text: "Облако",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Какие самолёты бывают по скорости полёта?",
    answers: [
      {
        text: "Гигозвуковые",
        correct: false,
      },
      {
        text: "Нанозвуковые",
        correct: false,
      },
      {
        text: "Гиперзвуковые",
        correct: true,
      },
      {
        text: "Мегазвуковые",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Назовите имя первого конструктора вертолета?",
    answers: [
      {
        text: "Андрей Николаевич Туполев",
        correct: false,
      },
      {
        text: "Юрий Михайлович Антонов",
        correct: false,
      },
      {
        text: "Николай Николаевич Поликарпов",
        correct: false,
      },
      {
        text: "Игорь Иванович Сикорский",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question:
      "В честь какого богатыря назван пассажирский российский самолет, разработанный под руководством авиаконструктора И. И. Сикорского?",
    answers: [
      {
        text: "Добрыня Никитич",
        correct: false,
      },
      {
        text: "Илья Муромец",
        correct: true,
      },
      {
        text: "Алеша Попович",
        correct: false,
      },
      {
        text: "Иван Дурак",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Какой советский авиаконструктор получил семь Сталинских премий?",
    answers: [
      {
        text: "А. Н. Туполев",
        correct: false,
      },
      {
        text: "С. П. Королёв",
        correct: false,
      },
      {
        text: "А. С. Яковлев",
        correct: false,
      },
      {
        text: "С.В. Ильюшин",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question:
      "Самолет какой модели фигурировал в фильме «Невероятные приключения итальянцев в России»?",
    answers: [
      {
        text: "Ту-144",
        correct: false,
      },
      {
        text: "Ту-154",
        correct: false,
      },
      {
        text: "Ту-134",
        correct: true,
      },
      {
        text: "Ту-124",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "«Самолет-солдат», «летающий танк» - так с гордостью называли воины штурмовик конструктора С.В. Илюшина. Что за самолет?",
    answers: [
      {
        text: "ЯК-2",
        correct: false,
      },
      {
        text: "ТУ-95",
        correct: false,
      },
      {
        text: "АН-2",
        correct: false,
      },
      {
        text: "ИЛ-2",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question:
      "Назовите самолет, приспособленный для взлета с воды и посадки на воду?",
    answers: [
      {
        text: "Гидросамолет",
        correct: true,
      },
      {
        text: "Водный мобиль",
        correct: false,
      },
      {
        text: "Водный самолет",
        correct: false,
      },
      {
        text: "Гидра",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Назови самый тяжелый грузоподъемный самолет, который поднимался в воздух. На этом самолете было установлено 240 мировых рекордов?",
    answers: [
      {
        text: "Ан-124",
        correct: false,
      },
      {
        text: "Ан-102",
        correct: false,
      },
      {
        text: "Ан-225",
        correct: true,
      },
      {
        text: "Ан–200",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question:
      "Назови самый быстрый пассажирский самолет, который летит быстрее звука. Его максимальная скорость 2330 км/ч?",
    answers: [
      {
        text: "ТУ-104",
        correct: false,
      },
      {
        text: "ТУ-144",
        correct: true,
      },
      {
        text: "Конкорд",
        correct: false,
      },
      {
        text: "ТУ-154",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Что используют люди для выхода из самолёта?",
    answers: [
      {
        text: "Верёвку",
        correct: false,
      },
      {
        text: "Эскалатор",
        correct: false,
      },
      {
        text: "Стремянку",
        correct: false,
      },
      {
        text: "Трап",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "У какого летательного аппарата вместо шасси ноги пилота?",
    answers: [
      {
        text: "Дельтаплан",
        correct: true,
      },
      {
        text: "Планёр",
        correct: false,
      },
      {
        text: "Авиетка",
        correct: false,
      },
      {
        text: "Автожир",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "В каком государстве нет аэропорта?",
    answers: [
      {
        text: "Вьетнам",
        correct: false,
      },
      {
        text: "Ватикан",
        correct: true,
      },
      {
        text: "Венгрия",
        correct: false,
      },
      {
        text: "Венесуэла",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question:
      "Именем какого гражданина Индии назван международный аэропорт столицы Албании Тираны?",
    answers: [
      {
        text: "Рабиндраната Тагора",
        correct: false,
      },
      {
        text: "матери Терезы",
        correct: true,
      },
      {
        text: "Махатмы Ганди",
        correct: false,
      },
      {
        text: "Венкаты Рамана",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "Назовите разработчика данной игры и просто хорошего человека?",
    answers: [
      {
        text: "Виталий Бойко",
        correct: true,
      },
      {
        text: "Виталий Бойко",
        correct: true,
      },
      {
        text: "Виталий Бойко",
        correct: true,
      },
      {
        text: "Виталий Бойко",
        correct: true,
      },
    ],
  },
];

export default data;

const getMaxScoreStudent = require("./././Students");

describe("getMaxScoreStudent", () => {
  test("Поиск студента с максимальным балом в рамках конкретной группы", () => {
    const studentGroups = [[ 
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 5, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
      { name: "Oleg", score: 9, date: "2022-10-01" },
      { name: "Zanna", score: 15, date: "2022-10-11" },
    ]];
  
    const result = getMaxScoreStudent(studentGroups);
  
    expect(result).toEqual({ name: "Ivan", score: 35, date: "2022-10-11" });
  });

  test("Поиск студента с максимальным балом в рамках конкретной группы", () => {
    const studentGroups = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
    ];

    const result = getMaxScoreStudent(studentGroups[0]);

    expect(result).toEqual({ name: "Ivan", score: 35, date: "2022-10-11" });
  });

  test("Обрабатываем пустые данные о студентах", () => {
    const studentGroups = [];

    const result = getMaxScoreStudent(studentGroups);

    expect(result).toBeUndefined();
  });

  test("Обрабатываем студентов с нулевыми баллами", () => {
    const studentGroups = [
      [
        { name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 0, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
        { name: "Varvara", score: 0, date: "2022-10-01" },
        { name: "Tanya", score: 0, date: "2022-10-11" },
      ],
    ];

    const result = getMaxScoreStudent(studentGroups);

    expect(result).toBeUndefined();
  });
});

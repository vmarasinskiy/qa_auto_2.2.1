const getMaxScoreStudent  = require('./././Students');

describe('getMaxScoreStudent', () => {
  test('Поиск студента с максимальным балом', () => {
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

    const result = getMaxScoreStudent(studentGroups);

    expect(result).toEqual({ name: "Ivan", score: 35, date: "2022-10-11" });
  });

  test('Обрабатываем пустые данные о студентах', () => {
    const studentGroups = [];

    const result = getMaxScoreStudent(studentGroups);

    expect(result).toBeUndefined();
  });

  test('Обрабатываем студентов с нулевыми баллами', () => {
    const studentGroups = [
      [
        { name: "John", score: 0, date: "2022-10-11" },
        { name: "Jane", score: 0, date: "2022-10-10" },
      ],
    ];

    const result = getMaxScoreStudent(studentGroups);

    expect(result).toBeUndefined();
  });


});
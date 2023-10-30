a = [];

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
  {
    id: 5,
    name: "Maria",
    scorePoints: 4999.99,
  },
  {
    id: 6,
    name: "Maria",
    scorePoints: 5000.0,
  },
  {
    id: 7,
    name: "Maria",
    scorePoints: 5000.99,
  },
  {
    id: 8,
    name: "Maria",
    scorePoints: 5001.0,
  },
  {
    id: 9,
    name: "Victor",
    scorePoints: -1000,
  },
  {
    id: 10,
    name: "Victor",
    scorePoints:"",
  },
  {
    id: 11,
    name: "Victor",
    scorePoints: null,
  },
  {
    id: 12,
    name: "Victor",
    scorePoints: 0,
  },
];

for (i in players) {
  a.push(players[i]["scorePoints"]); //добавление элементов в пустой массив
}

Maximum = Math.max(...a); //ищем максимальное значение в НОВОМ массиве а
ID_Maximum = a.indexOf(Maximum); //ищем индекс максимального значения в массиве a
result_name = players[ID_Maximum]["name"]; // ищем имя в массиве players, индекс которого совпадает с индексом максимального значения из массива a
console.log(Maximum, result_name);

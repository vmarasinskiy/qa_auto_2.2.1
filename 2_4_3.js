const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  //Проверяем условие
  sum > 50 ? (bonus = 50) : (bonus = sum);
  //Проверяем перед возвратом значения
  return bonus;
};

const result = calculateBonus(3, 4);

console.log(result);

module.exports = calculateBonus;
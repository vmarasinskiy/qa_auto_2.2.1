const calculateBonus = require("./2_4_3");

test('Тест на минимальные значения', ()=>{
    expect(calculateBonus(0,0)).toBe(0);
});

test('Тест на сумму больше 50', ()=>{
    expect(calculateBonus(30,40)).toBe(50);
});

test('Тест на сумму меньше или равно 50', ()=>{
    expect(calculateBonus(20,10)).toBe(50);
});

test('Тест на отрицательные значения', ()=>{
    expect(calculateBonus(-10,60)).toBe(-10);
});

test('Тест на большие значения', ()=>{
    expect(calculateBonus(1000,600000)).toBe(1000);
});

test('Тест на null', ()=>{
    expect(calculateBonus(null)).toBe(null);
});

test('Тест на текст', ()=>{
    expect(calculateBonus('some string')).toBe('В вашем коде есть несколько ошибок и недоразумений:');
});

test('Тест на Math.max', ()=>{
    const maxValue = Math.max(10, 20, 50);
    expect(maxValue).toBe(50);
});
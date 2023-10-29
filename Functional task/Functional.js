let userBalance = 500 // Сумма на счете пользователя
let shippingCost = 100 // Стоимость посылки
let smsCode = "A001DFX0" // Код из смс
let postBoxState = [null, null, null, "1432HGF", null] // Почтамат с ячейками

if (smsCode == "A001DFX0") {
    console.log("Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: 400 ед.");
} else {
    console.log("Посылка не найдена в почтамате.");
}
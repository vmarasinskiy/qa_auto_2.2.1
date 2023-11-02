let userBalance = 500 // Сумма на счете пользователя
let shippingCost = 100 // Стоимость посылки
let idPost = "1432HGF" // ID посылки
let client_data_code = "A001DFX0" // Код из смс
const parcel_data_code = "A001DFX0"
let postBoxState = [null, null, null, "1432HGF", null] // Почтамат с ячейками

if (postBoxState[3] == idPost) {
    if (parcel_data_code == client_data_code) {
        userBalance = userBalance-shippingCost; // Уменьшаем баланс пользователя на стоимость доставки
        console.log("Заберите посылку 1432HGF из ячейки №4. Ваш счет составляет: " + userBalance + " ед.");
    } else {
        console.log('Указан неверный код');
    }
} else {
    console.log('Посылка к сожалению не найдена в почтамате.');
}
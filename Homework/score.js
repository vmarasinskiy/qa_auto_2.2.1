const array = [15, 9, 0, 15, 9, 5, 1, 3, 17, 5, 12, 3, 16, 10, 11, 5, 16, 0, 15, 18, 5, 17, 15, 6];

score(array);

function score(array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1; i++) {
            // Лог о начале новой итерации
            console.log("_________новая итерация");
            console.log("сравниваем пару", array[i], "и", array[i + 1]);
            console.log("сравниваем индексы", i, "и", i + 1);
            console.log("работаем с массивом", array);

            if (array[i] > array[i + 1]) {
                const buff = array[i];
                array[i] = array[i + 1];
                array[i + 1] = buff;

                // Лог о текущем массиве после обмена
                console.log("получился промежуточный массив", array);
            }
        }
    }

    console.log("Отсортированный массив:", array);
}
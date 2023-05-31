function showMessage() {
    console.log("Всем привет!");
}

showMessage();

function hiName(from, name) {
    console.log(from + ", " + name);
}

hiName("Привет", "Настя");

function computer(processor, RAM, videoCard = "нет") {
    console.log("У тебя стоит процессор: " + processor + " Оперативная память: " + RAM + " Видеокарта: " + videoCard);
}

computer("ryzen 5600x", "16gb", "rtx 3060");
computer("ryzen 5600x", "16gb");

function processorTemperature() {
    let badTemperature = 0;
    let normalTemperature = 0;

    let timer = setInterval(() => {
        let min = 35;
        let max = 100;
        let randomTemperature = Math.random() * (max - min) + min;
        let numTemperature = Math.round(randomTemperature);

        if(numTemperature < 80) {
            normalTemperature++
        } else {
            badTemperature++
        }
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        console.log("Нормальная температура: ", normalTemperature);
        console.log("Высокая температура: ", badTemperature);

        let okOrNot = (badTemperature > normalTemperature ) ?
            alert("С процессором всё плохо :(") :
            alert("С процессором все топи топ :)");

    }, 10000);

}

processorTemperature();

console.log("Давайте андервольтнем Вашу: rtx 3060");

function videoCardUndervolt() {

    let voltage = 1;

    let gru = 1900;

    let variant = 1;

    let videoCardTemperature = 70;

    while(variant > 0) {
        variant = Math.floor(Math.random() * (3 - 0 + 1)) + 0;

        voltage -= 0.25;
        videoCardTemperature -= 2;
        
    }
    
    console.log("Вот чего мы добились при андервольтинге");
    console.log("Вольтаж: ", voltage, " Температура: ", videoCardTemperature, " Частота: ", gru, " MHz");

}

setTimeout(() => {videoCardUndervolt()}, 3000)


function cleanComputer() { 
    setTimeout(() => {
        alert("Мы почистили Ваш компьютер и заменили термопасту, Вы полностью готовы покорять новые игры");
    }, 5000)
}

let result = confirm("Хотите почистим компьютер?");

if(result == true) {
    cleanComputer()
} else {
    alert("Хорошо, хорошего дня!");
}

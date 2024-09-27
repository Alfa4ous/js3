'use srtict'
// Задание 1
let price = Number(prompt('Введите стоимость товара'));
let money = Number(prompt('Введите сколько у вас денег'));
if(price < 0 || money < 0 || isNaN(price) || isNaN(money)){
    console.log("Не правильный ввод");
} else if(price ==money){
    console.log("Покупка прошла успешно");
} else if(price > money){
    console.log(`Вам не хватает ${price - money} р.`);
}else {
    console.log(`Покупка прошла успешно! Ваша сдача ${money - price} р.`);
}
//Задание 2
let a = prompt("Введите число");
if(a>0){
    alert('1');
}else if(a<0){
    alert(-1);
}else{
alert('0');
}
//Задание 3
let $a = Number(prompt("Введите число 1"));
let $b = Number(prompt("Введите число 2"));
let result = ($a + $b < 4)? "Мало" : "Много";
alert(result);
//Задание 4
let login = prompt("Введите логин");
let message = (login == 'Сотрудник')? "Привет":(login == 'Директор')? "Здравствуйте": (login == '')? "Нет логина" : "Не верно";
console.log(message);
//Задание 5
let $login = prompt("Введите логин");
if($login =='Админ'){
    let pass =prompt("Введите пароль")
let er = (pass == "Я главный")?"Здравствуйте" : (pass == '' || !isNaN(pass)) ?  "Отменено" : "Неверный пароль" ;
console.log(er);
}else{
    console.log("Я вас не знаю");
}
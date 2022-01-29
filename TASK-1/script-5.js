/*5. Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, после чего выводит на экран результаты следующих математических операций:   
- сумма a и b;   
- разница между a и b;
- произведение a и b; 
- частное от деления a на b; 
- остаток от деления a на b;  
- результат возведения числа a в степень b*/

let userFirstNum = Number(prompt("Введите первое число,а = "));
let userSecondNum = Number(prompt("Введите второе число, b = "));
document.write("<p>5-задание: a= ",userFirstNum,"; b= ",userSecondNum,"</p>");

let summa = userFirstNum + userSecondNum;
document.write("<p>- Сумма равно: ",summa,"</p>");

let min = userFirstNum - userSecondNum; 
document.write("<p>- Разница равно: ",min,"</p>");

let pro = userFirstNum * userSecondNum; 
document.write("<p>- Произведение равно: ",pro,"</p>");

let del = userFirstNum / userSecondNum;
document.write("<p>- Частное от деления равно: ",del.toFixed(0),"</p>");

let ost = userFirstNum % userSecondNum;
document.write("<p>- Остаток от деления равно: ",ost,"</p>");

let step = userFirstNum ** userSecondNum;
document.write("<p>- Возведения числа в степень равно: ",step,"</p>");
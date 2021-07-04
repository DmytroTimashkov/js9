 function mainFunction(callback){
    let num1 = +prompt("Введите число")
     let num2 = +prompt("Введите число")
     return callback(num1,num2)
 }

 function exponentiation(a , b){
    let degree1 = a ** 2;
     let degree2 = b ** 2;
     return alert("Квадрат первого числа: " + degree1 + " Квадрат второго числа: " + degree2)
 }

 mainFunction(exponentiation);




 function multiplay(a , b){
     let sum = a * b;

     return alert("Произведение: " + sum)
 }
 mainFunction(multiplay)

 function division(a , b){
     let sum = a / b;

     return alert("Частное: " + sum)
 }
 mainFunction(division)

 function modulo(a , b){
     let sum = a % b;

     return alert("Остаток: " + sum)
 }
 mainFunction(modulo)
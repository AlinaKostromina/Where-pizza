// // // Написать программу по переводу из литров в миллилитры и наоборот.
// // let from = prompt('Из какой единицы перевести (литры/миллилитры)?')
// // let to = prompt('В какую единицу перевести (литры/миллилитры)?');
// // let amount = prompt('Количество: ');

// // if (from == "литры" && amount >= 1) {
// //   if (to === "миллилитры") {
// //     amount *= 1000;
// //     console.log(`Получилось ${amount} миллилитров`);
// //   }
// // } else if (from == "миллилитры" && amount >= 1) {
// //   if (to === "литры") {
// //     amount /= 1000;
// //     console.log(`Получилось ${amount} литров`);
// //   }
// // } else {
// //   console.log("Введите верные данные!");
// // }




// // Вычислить результат данного выражения

// // let a = prompt('Введите число больше нуля: ');
// // let res;

// // if (a>0) {
// //   res = (15 * (a ** (1/28 * 1/5)) - 7 * (a ** (1/20*1/7))) / (2 * (a ** (1/4*1/35)));
// //   console.log(res);
// // } else {
// //   console.log('Введите положительное число!');
// // }






// // Дано четыре числа. Найдите наибольшее четное число среди них. Если оно не существует, выведите фразу "not found".

// // let a = 20;
// // let b = 7;
// // let c = 9;
// // let d = 13;

// // if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
// //   console.log("not found");
// // } else {
// //   if (a > b > c > d) {
// //     console.log(`Наибольшее четное число - ${a}`);
// //   } else {
// //     console.log('ошибка');
// //   }
// // }
//   // } else if (b % 2 === 0 > c > d) {
//   //   console.log(`Наибольшее четное число - ${b}`);
//   // } else if (c % 2 === 0 > d) {
//   //   console.log(`Наибольшее четное число - ${c}`);
//   // } else {
//   //   console.log(`Наибольшее четное число - ${d}`);
//   // }



//   // if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0 || d % 2 === 0) {
//   //   if ((a % 2 === 0) > (b % 2 === 0) > (c % 2 === 0) > (d % 2 === 0)) {
//   //     console.log(`Наибольшее четное число - ${a}`);
//   //   } else if ((b % 2 === 0) > (c % 2 === 0) > (d % 2 === 0)) {
//   //     console.log(`Наибольшее четное число - ${b}`);
//   //   } else if ((c % 2 === 0) > (d % 2 === 0)) {
//   //     console.log(`Наибольшее четное число - ${c}`);
//   //   } else {
//   //     console.log(`Наибольшее четное число - ${d}`);
//   //   }
//   // } else {
//   //   console.log("not found");
//   // }





  
// // Дано: температура в цельсиях(число) и давление в паскалях (число).
// // Написать замерзнет вода или нет.
// // Вода замерзает при выполнения двух условий:
// // 1. давление в 10^5 Паскаль
// // 2. температура меньше либо равно 0 градусов по цельсию

// // let temp = 20;
// // let press = 100000;
// // if ((temp<=0) && (press === 10**5)) {
// //   console.log('Вода замерзнет!');
// // } else {
// //   console.log("Вода не замерзнет!");
// // }



// // Дано четыре числа. Найдите наибольшее четное число среди них. Если оно не существует, выведите фразу "not found"

// let a = 7;
// let b = 50;
// let c = 3;
// let d = 1;
// let res = Math.max(a, b, c, d);

// if (a%2!==0 && b%2!==0 && c%2!==0 && d%2!==0) {
//     console.log('not found');
// } else {
//   if (res % 2 === 0) {
//     console.log(`Максимальное четное число - ${res}`)
//   }
// }

$('a[href^="#"').on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top,
  });
  return false;
});




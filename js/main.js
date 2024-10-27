// 1-misol
let son1 = prompt("1. Son kiriting (4 xonagacha):");
if (son1.length <= 4) {
  alert(`Son ${son1.length} xonali.`);
} else {
  alert("Son 4 xonadan katta.");
}
//2-misol
let son2 = prompt("2. Son kiriting:");
alert(son2 % 2 === 0 ? "Juft son" : "Toq son");
//3-misol
let son3 = prompt("3. Son kiriting (4 xonagacha):");
if (son3.length <= 4) {
  let xonalik = `${son3.length} xonali`;
  let juftToq = son3 % 2 === 0 ? "Juft" : "Toq";
  alert(`${juftToq} son, ${xonalik}`);
} else {
  alert("Son 4 xonadan katta.");
}
//4-misol
let son4_1 = prompt("4. 1-sonni kiriting:");
let son4_2 = prompt("4. 2-sonni kiriting:");
let son4_3 = prompt("4. 3-sonni kiriting:");
let sortedNumbers = [son4_1, son4_2, son4_3].sort((a, b) => a - b);
alert(`Yaratilgan 3 xonali son: ${sortedNumbers.join("")}`);
//5-misol
let son5 = prompt("5. Uch xonali son kiriting:");
let minSon5 = Math.min(...son5.toString().split("").map(Number));
alert(`Eng kichik raqam: ${minSon5}`);
//6-misol
let son6 = prompt("6. Uch xonali son kiriting:");
let onliklar = Math.floor(son6 / 10) % 10;
alert(`O'nliklar xonasi: ${onliklar}`);
//7-misol
let speed = prompt("7. Tezlikni kiriting (km/soat):");
if (speed <= 70) {
  console.log("Hammasi yaxshi");
} else {
  let point = Math.floor((speed - 70) / 5);
  if (point > 12) {
    console.log("Prava olindi");
  } else {
    console.log(`Point: ${point}`);
  }
}
//8-misol
let birthYear = prompt("8. Tug'ilgan yilingizni kiriting:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`Yoshingiz: ${age} yosh`);
//9-misol
let son9 = prompt("9. Son kiriting:");
let xonalilik =
  son9.length <= 3 ? `${son9.length} xonali` : "4 yoki undan ko'p xonali";
let juftToq9 = son9 % 2 === 0 ? "Juft" : "Toq";
let musbatManfiy = son9 >= 0 ? "Musbat" : "Manfiy";
alert(`${xonalilik} son, ${juftToq9}, ${musbatManfiy}`);
// 10-misol
let son10 = prompt("10. Son kiriting:");
if (son10 % 3 === 0 && son10 % 5 === 0) {
  console.log("FizzBuzz");
} 
else if (son10 % 3 === 0) {
  console.log("Fizz");
} 
else if (son10 % 5 === 0) {
  console.log("Buzz");
} 
else {
  console.log(son10);
}
//Rasmdagi misol
const dollarKursi = 11000.34;
const yevroKursi = 12354.03;

const samolyotBiletiDollar = 500;
const mehmonxonaDollar = 250;
const kongilocharYevro = 120;

const samolyotXarajatiSom = samolyotBiletiDollar * dollarKursi;
const mehmonxonaXarajatiSom = mehmonxonaDollar * dollarKursi;
const kongilocharXarajatiSom = kongilocharYevro * yevroKursi;

const jamiXarajat = samolyotXarajatiSom + mehmonxonaXarajatiSom + kongilocharXarajatiSom;

let alisherPul = Number(prompt("Alisher, qancha pulingiz bor? (so'mda kiriting):"));

if (alisherPul >= jamiXarajat) {
    console.log("Oq yo'l, Alisher!");
} else {
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}
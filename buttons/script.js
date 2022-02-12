/* zadani - nakresli na html stranku 4 buttonky
 * ('button1', 'button2', 'button3', 'button4').
 * 1) Kdyz uzivatel klikne na jakejkoliv buttonek,
 *  jeho barva se prepne ze svetle zeleny na sedou nebo z sede na svetle zelenou.
 *  Proste tam a zpatky. */

const btn = document.querySelectorAll("button");

btn.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("color-change");
  });
});

/*  2) Kdyz uzivatel zmackne klavesu "x", sude buttonky (druhy a ctvrty) zmizi,
 *  nebo se zase znovu objevi (prepinani). */

const btnEven = document.querySelectorAll("button:nth-child(even)");

btnEven.forEach((el) => {
  window.addEventListener("keyup", function (event) {
    if (event.key === "x") {
      el.classList.toggle("invisible");
    }
  });
});

/*  3) Kdyz uzivatel zmackne klavesu "y",
 *  liche buttonky (prvni a treti) zmizi nebo se znovu objevi (prepinani).
 *  Az to budes mit, nebo az se dostanes do neresitelneho momentu, napis, zavolej.
 */

const btnOdd = document.querySelectorAll("button:nth-child(odd)");

btnOdd.forEach((el) => {
  window.addEventListener("keyup", function (event) {
    if (event.key === "y") {
      el.classList.toggle("invisible");
    }
  });
});

let pole = [
  { key: 1, key1: 2 },
  { key: 1, key1: 2 },
  { key: 1, key1: 2 }
];

let novePole = [];
pole.forEach((el) => {
  novePole.push(el.key);
});

console.log(novePole);

console.log(pole.map((el) => el.key));

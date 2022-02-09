/* první level
ve script.js si v prvnim radku nahore nadefinuj pole se trema prvkama.
Takhle: const fruits = ['jablko', 'hruška', 'švestka'].
V html si udělej unordered list (<ul></ul>),
kterej nebude mít u položek ty hnusný tečky a bude se zobrazovat centrovaně
(horizontálně uprostřed prostě).
V Javascriptu naplň ten list položkama z toho pole.
Prostě vytvoř <li> na každý to ovoce a vlož to <li> do toho listu. */

let fruits = ["hruska", "jablko", "svestka"];

const unorderedList = document.querySelector(".container");

fruits.forEach(function (pole) {
  const list = document.createElement("li");
  list.textContent = pole;
  unorderedList.appendChild(list);
});

/*druhej level -
jednotlivý položky listu udělej klikací. Když uživatel na položku klikne, tak ať zmizí.
příklad - kliknu na hrušku a zbyde mi list už jen se dvěma položkama - jablko a švestka.*/

const liOnclick = document.querySelectorAll("li");

liOnclick.forEach((element) => {
  element.addEventListener("click", function () {
    element.remove();
  });
});

/*třetí level -
pod listem udělej textový pole (input type="text") a vedle něj buttonek s textem "přidej".
Když uživatel do pole napíše "banán", tak se položka "banán" přidá do teho listu.
*/

const btn = document.getElementById("sub");

btn.addEventListener("click", () => {
  //do promenne si das obsah textu v inputu v dobe kliknuti na "Pridej"
  let boxvalue = document.getElementById("box").value;
  //vytvoreni noveho <li>
  let newLi = document.createElement("li");
  //do textu u noveho <li> priradi obsah textu v inputu
  newLi.appendChild(document.createTextNode(boxvalue));
  //priradi nove <li> pod <ul>
  unorderedList.appendChild(newLi);
  //znova si najde ten input
  let input = document.getElementById("box");
  //a nastavi hodnotu textu v inputu na prazdny retezec
  input.value = "";
  //k novemu <li> nastavi, aby jsi ho mohl po kliknuti na nej take odebrat
  newLi.addEventListener("click", () => {
    newLi.remove();
  });
});

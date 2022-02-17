/*Webovej formulář - přihláška do kynologického klubu.
Uživatel vyplní dvě formulářová pole - jméno a přijmení.  
To je první level.
Druhej level - pod tím jsou další tři pole pro údaje o psovi  
             - jméno, pohlaví (pouze hodnoty pes nebo fena), plemeno
Nojo, jenže uživatel může mít psů víc.
Takže pod formulářem je nejen odesílací button, ale i button “další pes”.
Po kliknutí na něj se pod prvního už zadanýho psa zařadí další tři
prázdná pole - pro druhýho psa. Pak třeba i pro třetího nebo dalšího.
Třetí level - nakonec to uživatel celý vodešle.
A zobrazí se místo formuláře stránka - Hurá, máme novýho člena
- jmenuje se tak a tak … a jeho psi jsou: a tabulka všech zadanejch psů
Čtvrtej level - položky jméno, příjmení a aspoň jméno prvního psa jsou povinný.
Pokud uživatel odešle formulář a zapomene něco z toho vyplnit,
tak příslušný nevyplněný pole dostanou červenej okraj
a objeví se pod nima hláška červeným písmem - toto pole je povinné.
A form se samozřejmě nijak neodešle.
*/

const member = []
const dog = []
const btnAdd = document.querySelector(".add")

btnAdd.addEventListener("click", (event) => {
    event.preventDefault()
    addNewPet()
});

function addNewPet() {
    let form = document.createElement("form")
    document.querySelector(".container").appendChild(form)
    form.classList.add("pet1")

    let label1 = document.createElement("label")
    label1.textContent = "jmeno psa:"
    form.appendChild(label1)

    let input1 = document.createElement("input")
    form.appendChild(input1)
    input1.classList.add("dogName")
    
    let label2 = document.createElement("label")
    label2.textContent = "pohlavi psa:"
    form.appendChild(label2)

    let select = document.createElement("select")
    form.appendChild(select)
    let option1 = document.createElement("option")
    option1.setAttribute("value", "") 
    select.appendChild(option1)
    let option2 = document.createElement("option")
    option2.setAttribute("value", "pes")
    option2.innerText = "pes" 
    select.appendChild(option2)
    let option3 = document.createElement("option")
    option3.setAttribute("value", "fena") 
    option3.innerText = "fena" 
    select.appendChild(option3)

    let label3 = document.createElement("label")
    label3.textContent = "plemeno:"
    form.appendChild(label3)

    let input3 = document.createElement("input")
    form.appendChild(input3)
}

const submit = document.querySelector(".submit")
const all = document.querySelector(".all")
const body = document.querySelector("body")
const memberName = document.querySelector("#name")
const memberSurname = document.querySelector("#surname")
const dogName = document.querySelector("#dogName")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    if (memberName.value != "" && memberSurname.value != "" && dogName.value != "") {

    let newMember = document.createElement("h1")
    newMember.style.margin = "20px" 
    newMember.style.textAlign = "center"
    newMember.style.textDecoration = "underline"
    newMember.textContent = "Huraaa, mame noveho clena: "
    body.appendChild(newMember)

    let newMemberName = document.createElement("h2")
    newMemberName.style.textAlign = "center"
    newMemberName.style.fontSize = "50px"
    newMemberName.style.color = "black"
    newMemberName.textContent = memberName.value + " " + memberSurname.value
    body.appendChild(newMemberName)


    let newDog = document.createElement("h1")
    newDog.style.margin = "20px"
    newDog.style.textAlign = "center"
    newDog.style.textDecoration = "underline"
    newDog.textContent = "a jeho/jeji psi jsou: "
    body.appendChild(newDog)

    let allDogNames = document.querySelectorAll(".dogName")
    allDogNames.forEach((el) => {
        let dogList = document.createElement("h2")
        dogList.style.margin = "10px"
        dogList.style.textAlign = "center"
        dogList.style.color = "black"
        dogList.style.fontSize = "50px"
        dogList.textContent = el.value
        body.appendChild(dogList)
    })
    all.remove()

    } else {
        
        memberName.classList.add("danger")
        memberSurname.classList.add("danger")
        dogName.classList.add("danger")

        let required = document.querySelectorAll("p.required")
        console.log(required)
        required.forEach((el) => {
            el.classList.remove("required")
        })
    }
})
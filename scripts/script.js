// JavaScript Document
console.log("hi");


/******************************/
/* menu openen de MENU button */
/******************************/


// stap 1: Hier maak je een variabele aan door de menu-button te zoeken 
//Opzoeken
var openButton = document.querySelector("header div> button");

// stap 2: laat de menu-button luisteren naar kliks en dan voert hij een functie uit
//functie
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
//functie maken: open menu
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}




/************************************/
/* menu sluiten met de sluit button */
/************************************/

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}






/************************/
/* CODE VOOR DE HARTJES */
/************************/

/* alle button met class 'like' in de HTML opzoeken */
/* omdat er meer buttons geselecteerd moeten worden, querySelectorAll (en niet querySelector) */
/* het gevonden lijstje met buttons (een array) in de variabele 'heartButtons' opslaan */
var heartButtons = document.querySelectorAll("main> ul:nth-of-type(5) li button:nth-of-type(2)");

/* elke button in de array laten luisteren naar een klik */
/* na een klik de functie 'addToFavorites' uitvoeren */
// heartButtons[0].onclick = addToFavorites;
// heartButtons[1].onclick = addToFavorites;
// heartButtons[2].onclick = addToFavorites;
// heartButtons[3].onclick = addToFavorites;
/* enzovoort */

/* nb. dit kan met veel minder code met een for loop */
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].onclick = addToFavorites;
}

/* liefde declareren of liefde wegnemen */
function addToFavorites(event) {
  /* het hartje waarop geklikt is in de variabele 'clickedHeart' opslaan */
  let clickedHeart = event.target;
  
  /* de parent - de hele fish opzoeken */
  let theFish = clickedHeart.closest("ul:nth-of-type(5) li");
  
  /* de class liked aan de fish toevoegen */
  /* en weer verwijderen als er nog een keer geklikt wordt */
  theFish.classList.toggle("liked");
}

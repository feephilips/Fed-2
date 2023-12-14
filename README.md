# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.


# Notitites
FED notities


- Section moet wel een heading hebben
- GitHub moet het doen in de browser voor eindgesprek
- Toegankelijkheid het belangrijkste
- 

Codepen
Flexboks froggy
Css-tricks.com
Fonts.google.com 

Css custom properties
Hi {
Color: Hotpink;
}

		Dit is beter:

		:root {
			—merk-kleur: Hotpink;
			}

		H1 {
			Color: var(—merk-kleur);
			}

- - is een variabele 

Zet deze helemaal boven aan alvast aan het begin.
- Kleur
- Lettertype
- Header in bold?

Line-hight: zonder em ofzo


Kleuren RGB A

Hoe je tekst weg haalt voor zonder screenreader
Inclusively hidden, class= “SRonly”
Want sectie heeft altijd een heading nodig

Font.squirel.nl



Toegankelijkheid, Screen reader 
Settings, accessibilityy, screenreader. Of Command-F5.
Alle headings, alle linkjes


- Checklist DLO
- Contrast , min 4,5 check icoon of oranje
- Kleurenblindheid, mozilla website
- Dark mode
- High contrast
- Reduce motion

Linkje direct naar de hoofdinhoud, niet te zien voor mensen alleen doven. Zo wordt het menu overgeslagen
Class, screenreader only. Inclusively hidden. Display non dus NIET, want dan leest hij hem ook niet.

Meunu inklappen, area hidden= true. Zo weet de gebruiker dat hij ingeklapt is dus leest hij hem niet door
Aria-current, waar je nu bent.


Grid
- Voor layout
- Dingen blijven hierdoor op zijn plek
- Css-tricks over a complete guid to css grid
- Css grid generator 
- Vlakverdeling, GEEN tabel
- Parent; container
- Child: items
- Grid lines, 

Body: flex
	Main:
	Flex-row: 1

Menu, nav doe je display: flex
Body doe je display: grid


Media Query
Medium: waar het op getoond wordt, telefoon, laptop, applewatch
- Beginnen met mobile, klein scherm
- Maak het scherm groter en kijk of er iets stuk gaat of beter kan
- Hoeveel pixels is het scherm groot. 
- Dat bijvoorbeeld ipv 1 plaatje, twee plaatjes naast elkaar komen

@media (width> 48em)
P {
Column-count: 2;
Column-gap: 2em;
}

320 minimaal als breedte 


 display: grid;
grid-column-start: 1;
  grid-column-end: 3; 

Grid-template-columns
repeat(auto-fit, minmax(10em,1fr))


Toegankelijkheid testen

Screenreader
Zo zet je hem aan: Settings > Accessibility > Voiceover 

Highlights: 
command + option + control + ← → Categorieën in rotor selecteren 
command + option + control + ↑ ↓ Navigeer door elementen in rotor-categorie 
option + control + ← → Door alle content elementen navigeren 
command + option + control + shift + ↑ Categorieën in opties selecteren 
control Shut up!!! 

Testen
1. Gebruik de optie om alle headings voor te laten lezen. Is de structuur logisch? Geeft elk kopje goed aan wat er onder het kopje valt? 

2. Gebruik de optie om alle linkjes voor te laten lezen. Geeft elke link goed aan waar naartoe gelinkt wordt?

WCAG checklist 


Flex
Block elementen staan altijd naast elkaar, met flex kun je ze naast elkaar zetten
Display: flex aan de ouder geven
Flex-grow: 1;

Align-items: centre |
Justify-content: centre -

Waar ruimte komt: 
Aan het begin, ruimte rechts: flex-start,
Aan het einde, ruimte links: justify-content:flex-end;
Overal even veel ruimte tussen : Space between 

Margin-auto, zo kun je logo als enige naar rechts doen

Geen Dif, geen ID, geen class. Class body menu . Menu open

Mag wel: 
Section, heading moet er in
Article
Figure 

Slider, 
Snap ++
Flex-box carousel 

Sections, zijn h2 

Positioneren 
Standaard waarde voor position: static. Wordt gebaseerd op de plaats in de html
Top, right, bottom, left

Absolute: 
- Uit de flow
- Om een element los te positioneren
- Probeer zo veel mogelijk flexbox en grid

Relative:
- Blijft in de flow

Fixed:
- Uit de flow
- Element blijft op een vaste plek staan als je scroll

Sticky:
- Blijft in de flow
- Als het element uit beeld schuift blijft die plakken aan de rand tot de parent uit beeld is











## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Fee Philips

  #### Je startniveau:
  Blauw

  #### Je focus:
  Responsive 
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.etos.nl

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home page
  <img src="readme-images/homepage.png" width="375px" alt="Homepage">
  
  #### Screenshot(s) van de tweede pagina (small screen):
  Pagina 2,
  <img src="readme-images/make-up_pagina.png" width="375px" alt="Make-up pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  ik heb dit voor nu uitgeschreven in een word document.

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/helepagina.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/menu.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
Ik heb mn breakdown schets af en klaar voor het feedback moment. Ik heb hem op miro staan. Hie staat de link: https://miro.com/app/board/uXjVNKPZtxQ=/. Ook heb ik alles in de HTML staan, om zo te kijken of alles goed staat, voor tijdens het feedback gesprek. Sommige dingen twijfel ik nog over dus ik met <!-- in de code erbij gezet.

Ik heb aan de zijkant mijn vragen neer gezet op miro. Ik heb vooral vragen over H2 en H3. Soms ook hoe ik dingen het beste kan groeperen. Ik hoop dat ik na de feedback van morgen duidelijk heb of mijn html opbouw klopt. EN deze kloppend kan maken hierna. Dan ga ik alle img etc toevoegen.

vragen morgen: Ik heb ook nog wat vragen over de toegankelijkheid test die ik gedaan heb. sommige onderdelen snap ik niet of zijn niet van toepassing.



  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik ben nu bezig met het menu laten werken, ik vind dit nog best lastig. als ik het uit mezelf deed wist ik amper waar te beginnen. dus had ik de oefeningen op codepen gedaan. Hie vond ik alles wel duidelijk worden door de kleine stapjes. TOen had ik de code van codepen in visual studio code gezet en was daar dingen aan gaan passen naar mijn eigen code. Zo had ik wat meer hou vast. Maar nu heb ik alsnog wat dingen waar ik tgen op loop. vooral dingen op de goede plek krijgen met css. 

  Ik vind het gewoon lastig als ik iets speciefieks niet weet waar ik het zoeken moet en wat het ook al weer was. Het wordt al snel verwarrend in mn hoofd. 


  ### Agenda voor meeting
  - of er iemand mee kan kijken naar het menu
  - hoe ik zorg dat de zoekbalk bij een andere breedte boven komt te staan
  - hoe het menu over de hele breedte blijft

  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
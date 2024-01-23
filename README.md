# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).



# Notitites
FED notities uit de lessen


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
  <img src="readme-images/homepage.png"  alt="Homepage">
  
  #### Screenshot(s) van de eerste pagina (middel screen):
  Pagina 2,
  <img src="readme-images/middelscherm.voorbeeld.png"  alt="homepage">

  #### Screenshot(s) van de eerste pagina (breed screen):
  Pagina 2,
  <img src="readme-images/breedschermvoorbeeld1.png"  alt="homepage">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  ik heb dit voor nu uitgeschreven in een word document.

  WCAG checklist 
  - Het onderdeel "log in voor nog meer voordeel" Ziet er niet zo mooi uit qua vromgeving, er staat een zwarte streep onder, als link maar dat maakt het een gek geheel. 
  - het kleurverschil als je over buttons hovert is niet optimaal, dit wordt van wit naar licht grijs. dit zou een opvallendere kleur kunnen zijn
  - er zit geen hover op de nav li p items dus als je daar over heen gaat zou de tekst wel een ander kleurtje en groter kunnen worden
  - Voor mensen die geen rood zien is de website wel heel kleurloos, maar dit is lastig omdat de kleur van etos natuurlijk roze is

  - De html en css is best netjes alleen veel gebruik gemaakt van div, sections en class. 
  - webkit-box? maar ik weet niet wat dat inhoudt


  er door heen met toetsenbrod:
  - Je kon overal door heen alleen bij de footer ging het niet goed met de linkjes, sommige werden overgslagen
  -Bij sommige onderdelen werden er twee keer dingen opgenoemd, zoals mak-up icoon, werd er twee keer make-up gezegd

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
  <img src="readme-images/1" width="375px" alt="">
  <img src="readme-images/2" width="375px" alt="">
  <img src="readme-images/3" width="375px" alt="">
  <img src="readme-images/4" width="375px" alt="">

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  - Ik heb er voor gezorgd dat het contrast in kleur beter is geworden als je over buttons hovert. Zo heeft de orginele website een soort grijze kleur, ik heb dit donker roze gemaakt
  - Bij de border rondom de zoekbalk een zwarte rand gegeven zo weten mensen beter waar ze op kunnen klikken om te zoeken
  - Ik heb de vormgeving van de "log in voor nog meer voordeel" verbeterd door de strepen weg te halen, zo is het meer een geheel. 
  - De h2 groote iets groter gemaakt

toetsenbord
- Je kon eerst niet door de footer heen, dus de betaalmethodes en deels van de andere iconen was niet een link. nu wel.

  Ik vond de officiele website al best netjes over het algemeen. 



</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Ik ben eigelijk super lekker op weg. Ik moet nog wel heel veel doen dus de komende 1.5 week moet ik echt even doorpakken. Het menu nog breed maken en wil ik iets doen met javascript en met :hover. Ook nog alles controleren zoals px en em, ook alle alt teksten doorlopen en de extra fonts erbij zetten


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
  <img src="readme-images/klein.png" width="375px" alt="Uiteindelijke scherm klein formaat">
  <img src="readme-images/middel.png" width="375px" alt="Uiteindelijke scherm middel formaat">
  <img src="readme-images/breed.png" width="375px" alt="Uiteindelijke scherm breed formaat">


  ### Dit ging goed/Heb ik geleerd: 
  - in vergelijking met vorig jaar heb ik zo veel meer geleerd. Ik heb nu de tijd gehead om alles rustig uit te zoeken, vragen te stellen en rustig te proberen zonder in de stress te schieten. Ik vond het een heel fijn blok en ben trots op hoe veel er is gelukt. Ook al denk ik dat er nog super veel te verbeteren valt en ik sommige dingen veel beter had kunnen doen. Maar ik ben wel super blij dat er zo veel is gelukt en het best goed op de echte site is gaan lijken.
  - Ik snapte nu veel beter waarom we met het toetsenbrod door de site moeten kunnen, vorige keer was me dit veel te chaotisch.
  - Alles zef uitzoeken ging goed, dit kwam ook omdat ik veel tijd had om er rustig voor te zitten en dus minder snel beelde als het niet goed ging. Dan ging ik gewoon weer wat anders proberen




  ### Dit was lastig/Is niet gelukt:
  - Sommige dingen zijn ook niet gelukt, zo heb ik de dikte van de lettertypes niet kunnen aanpassen, hier heb ik echt van aslles geprobeert zowel in de html als in css maar het ligt denk ik aan de manier hoe ik de font heb opgeslagen in mn css en waar hij vandaan komt. 
  - Ook vond ik het lastig om de css zo klein mogelijk te houden. Ik heb nu veel te veel overbodige code waardoor het einde best veel was en ook veel zoeken werd. De code van de bredere schermen werd hier door ook weer veel. Ik kreeg door de code meerdere keren bij verschillende :nth-of-type neer te zetten wel overzicht. Maar de volgende keer zou ik gaan uitzoeken hoe ik dit beter had kunnen doen. 
  - Soms was het nog even zoeken met display:flex, ik merk dat ik het veel fijner vindt om met grid te werken, dit was soms even puzzelen en ik denk dat ik sommige dingen daar samantisch misschien ook niet goed heb, maar in vergelijking met de vorige keer snapte ik het nu veel beter en wou ik het liefste bij alles grid gebruiken. 
  - De header heb ik ook met grid gedaan, nu heb ik wel onnodig div's gebruikt. maar omdat iuk aan het begin gelijk met grid iets wou doen heb ik dat toen zo gedaan. In de toekomst zou ik het wel met flex doen. Maar nu was de header in ieder geval wel goed gelukt en had ik gelijk grid beter onder de knie. 
  - Ik blijf javasript lastig vinden dus heb dat wel aan de hand van de opdrachten van de les gedaan. Ik kan het uitleggen maar heb er wel een handvat bij nodig. Ik zelf denk dat ik in de toekomst hier nog wat filmpjes over zou kijken zo dat ik er meer beeld bij heb, maar heb me nu vooral gefocuts op de html en css begrijpen. 
- volgende keer de var colors iets beter benamen

</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>
  1. Fonts, Bron: https://stackoverflow.com/questions/26976115/how-to-work-around-fontdeck-giving-different-font-families-for-one-font
  2. Screenreader only: https://css-tricks.com/inclusively-hidden/************/
  3. ChatGTP, voor het gebruik maken van vragen die je google niet kunt vragen, of als je in het nederlands weet uit te leggen waar je naar opzoek bent, welke engelse term je hiervoor moet gebruiken. Of voor px naar em 
  4.flexbox,  https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  5. grid, https://css-tricks.com/snippets/css/complete-guide-grid/
  6. hover, https://codepen.io/shooft/pen/eYbmRKJ
  7. hartjes, https://codepen.io/shooft/pen/BarqGKx
  8. menu, https://codepen.io/shooft/pen/MWZYoqa

</details>
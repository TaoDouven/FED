# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Tao Tao Douven

  #### Je startniveau:
  Blauw en als ik tijd over heb rood.

  #### Je focus:
  Ik kies voor de focus responsive.
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.debijenkorf.nl 

  #### Screenshot(s) van de eerste pagina (small screen): 
  hier de naam van de pagina  
  <img src="images/cosmetica.jpg" width="375px" alt="De pagina van alle cosmetica producten dames.">

  #### Screenshot(s) van de tweede pagina (small screen):
  hier de naam van de pagina  
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

   Ik ben in week 1 begonnen met eerst de navigatie balk te maken. Toen heb ik flexbox gebruikt om de list itemns naast elkaar en ruimte 
   tussen elkaar te plaatsen. Dat lukte eerst niet omdat ik niet de juiste parents en childrens heb aangesproken. Nadat ik dat wel 
   had gedaan is het gelukt. Het lukt mij niet om het midden stuk met alle cosmetica itemns naast elkaar in rijen te plaatsen. Ik probeerde 
   met flex de itemns goed naast en onder elkaar te krijgen, maar het lukte alleen om de binnen de itemns zelf de foto en de tekst goed onder 
   elkaar te plaatsen. 

   Ik ga nu aan de slag met grid. Ik doe display grid op de body en maak 2 columns (voor in de main bij de filter optie en de cosmetica itmens) en maak 3 rows (voor de header, 
   de filter + cosmetica itemns en de navigatie).  

  Soms werkte sommige styles die ik in de css heb aangegeven niet, maar dat kwam omdat ik de verkeerde css selector had gebruikt of 
  het verkeerde element had geselecteerd. Door itemns achtergrond kleur te geven kon ik zien hoeveel ruimte het in beslag nam en waar hij stond. 

  Door een schema te tekenen met hoe ik de grid binnen elk onderdeel wil hebben, kon ik heel makkelijk en georganiseerd itemns op de 
  juiste manier plaatsen binnen grids. 

  Ook heb ik boven elk stukje css commands gezet met waarvoor de code bedoeld is om overzicht te geven. En heb ik met commands 
  aangegeven binnen de css welke styling voor de body, header, main en footer bedoeld zijn. Dit hielp mij om code sneller terug te vinden. 

  De rows in de grid namen waaren allemaal te hoog. ik had margin: 0; en padding:0; gebruikt maar dat werkte niet. Na het opzoeken op het internet kwam ik erachter dat je hight: fit-   content; kunt gebruiken om ervoor te zorgen dat de hoogte de ruimte van de content inneemt. Nu was de header goed, maar body neemt teveel ruimte in. Door de parents een specifieke    height te geven is het gelukt. 

  De eerste pagina heeft een goed structuur en ga nu door naar begin maken van tweede pagina.

  De pagina van de index.html werkte niet meer. Ik denk dat ik komt omdat ik de footer en header allebei de klassen heb gegeven en een van de twee pagina's de verkeerde class naam      heb gebruikt. En uiteindelijk in de inspector kwamen de stijlen van de footer en header niet bij de inspector. die twee klasses bij het stijlen weg gehaalt en alles werkt. 
  Nu staat de footer bij index.html staat niet goed, maar footer diorlipoil.html wel.

  height op footer main header weg halen, kijken wat het probleem is. 

  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Geef foto's/elementen een achtergrond kleur want dan kan je goed zien hoe dingen staan geplaatst. 
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

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

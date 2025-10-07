//Write your Javascript code here

// Task 1
let findliste = document.getElementById("list")
let nytelement = document.createElement("li")

nytelement.setAttribute("id", "4")
nytelement.setAttribute("class", "unhealthy")

let elementtekst = document.createTextNode("Marabou")
nytelement.appendChild(elementtekst)

findliste.appendChild(nytelement)

// Task 2
function appendElement (idList, element) 
{
  let findliste = document.getElementById(idList);

  let nytelement = document.createElement("li");

  let elementtekst = document.createTextNode(element);
  nytelement.appendChild(elementtekst);

  findliste.appendChild(nytelement);
}




console.log("Shoppinglist")
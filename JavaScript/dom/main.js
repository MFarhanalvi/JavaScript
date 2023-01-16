var element;
//we target different tags by its name given below

// element = document.head;

// element = document.all.[6];

// element = document.title;

// element = document.body;

// element = document.links;

// element = document.images;

// element = document.forms;

// element = document.URL;

// element = document.domain;

// element = document.baseURL;


//We can get value or set value

// element = document.getElementById("content").innerHTML;

// element = document.getElementById("header").innerText;

// element = document.getElementsByClassName("list");

// element = document.getElementsByTagName("a");

// element = document.getElementById("header").getAttribute("style");

//  element = document.getElementById("header").getAttributeNode("style");

//  element = document.getElementById("header").attributes[2].name;

// element = document.getElementById("header").innerHTML="<h1>wow</h1>";

// element = document.getElementById("header").setAttribute("style","border:5px dotted yellow;");

// element = document.getElementById("header").getAttribute("class");

//CSS Styling

//  document.querySelector("#header").style.backgroundColor="tan";

//  document.querySelector("#header").style.color="black";

//Events

 document.getElementById("header").addEventListener("click","mouse",changer);

 function changer (){
 document.getElementById("header").style.background="pink";
 }

//console.log(element);
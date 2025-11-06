// declaring variables for nameInput and text

let input = document.getElementById("nameInput")
let greet = document.getElementById("greeting")

// addEventListener to the input and text conditions using if-else loop

input.addEventListener("input",()=>{
   let name = input.value;
  if(name === ""){
    greeting.innerText = "Hello, friend!"
  } else{
    greet.innerText = "Hello!" +"-" +input.value;
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  }
 
})

// declaring variables for box and buttons

let box = document.getElementById("box")
let grow = document.getElementById("grow")
let shrink = document.getElementById("shrink")
let button = document.getElementsByClassName("btn")
let message = document.getElementById("msg")
let motMessage = document.getElementById("motMsg")
let body = document.getElementById("body")

// addition of eventListeners and styles to the box and button

grow.addEventListener("click",()=>{
  box.style.backgroundColor = "black"
  box.style.padding = "30px"
  grow.style.display = "none"
  shrink.style.display = "block"
  box.style.width = "100%"
  message.style.color = "white"
  message.style.fontSize = "30px"
  motMessage.style.display = "block"
  motMessage.style.color = "white"
  body.style.backgroundColor = "whiteSmoke"
  greeting.style.color 
  = "black"
})

shrink.addEventListener("click",()=>{
  box.style.backgroundColor = "white"
  box.style.padding = "5px"
  shrink.style.display = "none"
  grow.style.display = "block"
  box.style.width = "60%"
  message.style.color = "black"
  message.style.fontSize = "15px"
 motMessage.style.display = "none"
//  body.style.backgroundColor = "white"
})
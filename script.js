let input = document.getElementById("nameInput");
let greet = document.getElementById("greetings");


let box = document.getElementById("moodBox")
let grow = document.getElementById("btnGrow")
let shrink = document.getElementById("btnShrink")

box.style.border = "2px solid black"
box.style.padding = "50px"
box.style.borderRadius = "10px"
box.style.display = "flex"
box.style.flexDirection = "column"
box.style.backgroundColor = "gray"

grow.addEventListener("click",()=>{
  box.style.width = "150px"
  box.style.height = "150px"
  grow.style.display = "none"
  shrink.style.display = "block"
  shrink.style.position = "relative"
  shrink.style.bottom = "-100px"
})

shrink.addEventListener("click",()=>{
  box.style.width = "50px"
  box.style.height = "50px"
  shrink.style.display = "none"
  grow.style.display = "block"
  shrink.style.position = "relative"
  shrink.style.bottom = "-100px"
})

let day = document.getElementById("light")
let night = document.getElementById("dark")
let body = document.getElementById("entireBody")


day.addEventListener("click",()=>{
  body.style.backgroundColor = "white"
  body.style.color = "black"
  night.style.display = "block"
  day.style.display = "none"
})

night.addEventListener("click",()=>{
  body.style.backgroundColor = "black"
  body.style.color = "white"
  night.style.display = "none"
  day.style.display = "block"
})

let show = document.getElementById("btnShow")
let hide = document.getElementById("btnHide")
let message = document.getElementById("msg")

message.style.display = "none"

show.addEventListener("click",()=>{
  message.style.display = "block"
  show.style.display = "none"
  hide.style.display = "block"
})

hide.addEventListener("click",()=>{
  message.style.display = "none"
  show.style.display = "block"
  hide.style.display = "none"
})

body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent ="center"
body.style.alignItems = "center"

input.addEventListener("input",()=>{
let name = input.value;
  if(name === ""){
    greet.innerText = "Hello, My G"
  }else{greetings.innerText = "Hello! " +name}
  greet.style.fontWeight = "bold"
  greet.style.color = "green"
});


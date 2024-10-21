let btn =document.querySelector("button")
let image =document.querySelector("img")
let name =document.querySelector("h2")
let email =document.querySelector("p")
let div =document.querySelector("div")


btn.addEventListener("click",getdata)
function getdata(){
    fetch("https://randomuser.me/api")
    .then((response)=>response.json())
    .then((result)=>showdata(result.results[0]) )
}

function showdata(data){
  div.style.display="block"
  image.src=data.picture.large
  name.innerHTML=`${data.name.first} ${data.name.last} `
  email.innerHTML=data.email
}

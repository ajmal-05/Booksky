var overlay=document.querySelector(".popup-overlay")
var popup=document.querySelector(".popup-box")
var popupbutton=document.getElementById("popup-button")
popupbutton.addEventListener("click",function()
{
    overlay.style.display="block"
    popup.style.display="block"
})

var cancelbutton=document.querySelector(".cancelbutton")  
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.querySelector(".addbook")
var booknameinput=document.getElementById("book-name-input")
var authornameinput=document.getElementById("author-name-input")
var textarea=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booknameinput.value}</h2>
            <h5>${authornameinput.value}</h5>
            <p>${textarea.input}</p>
            <button onclick="deleteitem(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
    
})
function deleteitem(event){
    event.target.parentElement.remove()
 }
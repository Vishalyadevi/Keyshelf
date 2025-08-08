var p=document.querySelector(".popup-overlay")
var pp=document.querySelector(".popupbox")
var add=document.getElementById("add-popup")
add.addEventListener("click",function(){
    p.style.display="block"
    pp.style.display="block"
})

var cancel=document.getElementById("can")
cancel.addEventListener("click",function(event){
    event.preventDefault()
     p.style.display="none"
    pp.style.display="none"
})

var container=document.querySelector(".container")
var add=document.getElementById("add")
var bookt=document.getElementById("book-title")
var booka=document.getElementById("book-author")
var bookd=document.getElementById("bookdescription")

add.addEventListener("click",function(event){
event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-container")
div.innerHTML=`<h2>${bookt.value}</h2><h5>${booka.value}</h5>
            <p>${bookd.value}</p>
            <button class="delete-button">Delete</button>
    `;
    container.append(div);

    // Add delete functionality for the new button
    var deleteButton = div.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
        div.remove();
    });
 p.style.display="none"
    pp.style.display="none"
})
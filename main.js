var side = document.querySelector(".sidenav")

function show() {
    side.style.left = "0"
}
function closef() {
    side.style.left = "-60%"
}

var searchbar = document.querySelector(".searchbar")
var allthing = document.querySelector(".allover")
var allthings = document.querySelectorAll("h3")
var head=document.querySelector("h2")
function check(event){

    savedvalue = event.target.value.toUpperCase()
    for (i = 0; i < allthings.length; i++){
        if (allthings[i].textContent.toUpperCase().indexOf(savedvalue)<0) 
            {allthings[i].style.display = "none"
        }

        else{
        allthings[i].style.display="block"
        head.style.display="none"
    }
}
}
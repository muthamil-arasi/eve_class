let button = document.getElementById("too");
button.addEventListener("click", function(event) {
    button.style.backgroundColor = "blue";
    event.stopPropagation(); 
});
document.addEventListener("click", function() {
    button.style.backgroundColor = "red";
});

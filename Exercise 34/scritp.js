function addElement(){
    const text = document.querySelector("#text")
    const newItem = document.createElement("p")
    newItem.textContent = "This is a new paragrpah"
    text.appendChild(newItem)
}

function removeElement(){
    const text = document.querySelector("#text")
    if(text.lastChild){
    text.removeChild(text.lastChild)
}else{
    alert("End!Bye")
}
}
let message = "I am global variable"
function showMessage(){    
    let message = "I am local variable"
    console.log(message)

}
showMessage();
console.log(message)

{
    let blockName = "I am block scope"
    console.log(blockName)
}
console.log(blockName)
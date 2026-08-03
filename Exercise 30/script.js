function operate(x,y,callback){
    return callback(x,y)
}
function multiply(x,y){
    return x * y
}

function division(x,y){
    return x / y
}

console.log("multiply:", operate(3, 5, multiply))
console.log("division:", operate(50, 5, division))
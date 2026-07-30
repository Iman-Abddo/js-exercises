function func(){
alert("Please wait to accept you")
return {
    id: 1, name:"Aragsan"}
}

console.log(func())

function getName(callback){
setTimeout(() => {
    const user ={
        id: 1, name:"Iman"    }

        callback(user)

}, 2000);
}
getName(function(user) {
    console.log(user)
})











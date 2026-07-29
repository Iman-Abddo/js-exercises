let arr1 = [1,2,3]
let arr2 =[...arr1, 4,5,6]
console.log(arr2)


function multiply(...num){
    return num.reduce((total, sum) => total * sum, 1)
}
console.log(multiply(3, 4, 8))

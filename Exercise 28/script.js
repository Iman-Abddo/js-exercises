function name(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const pass = true
            if(pass){
                resolve({
                    id: 1, name: "Aragsan"
                })
            }else{
                reject("Failed the process")
            }
        }, 2000);
    })
}
async function displayName(){
    try{
        const user = await name()
        console.log(user)
    }catch(error){
        console.error(error)
    }
}
displayName()
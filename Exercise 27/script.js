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
name()
.then(data => console.log("Name:", data))
.catch(error => console.log(error))
async function getUsers(){
    try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok){
                throw new Error(`HTTP error: ${response.status}`)
            }
            const Names = await response.json()
            console.log("Response names: ", Names)
    }catch(error){
        console.log(error)
    }
}
getUsers()











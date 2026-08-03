async function fetchData(){
    const result = await fetch('album.json')
    const xog = await result.json()
    console.log("Get Data:", xog)
}
fetchData()


fetch("album.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log("The individual: ",value)))

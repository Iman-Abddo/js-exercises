function changeImage(){
    const image = document.querySelector("#image")
    const url = prompt("Please enter your image url")
    const borderColor = prompt("Please chose color")
    const width = prompt("Please chose the width of your image")
    const height = prompt("Please chose the height of your image")
    const borderRadius = prompt("Please enter the radius of your image")
        image.setAttribute('src', url)
        image.style.border = 'green'
        image.style.width = '300px'
        image.style.height = '300px'
        image.style.borderRadius = '10px'
        image.style.padding = '5px'
        image.style.backgroundColor = '#08cd08'
}


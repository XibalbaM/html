let input = document.getElementById("status")
let img = document.getElementById("image")
let fun = (event) => {
    img.src = "https://http.cat/" + input.value
}
input.addEventListener("change", fun)
input.addEventListener("keyup", fun)
if (input.value)
    img.src = "https://http.cat/" + input.value
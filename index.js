let input = document.getElementById("status")
let img = document.getElementById("image")
let explainLink = document.getElementById("explain")
let fun = (event) => {
    changeValue(true)
}
input.addEventListener("change", fun)
input.addEventListener("keyup", fun)
if (input.value)
    changeValue()

function changeValue(animate) {
    if (animate) {
        img.style.opacity = 0
        img.style.scale = 0
    }
    
    setTimeout(() => {
        img.src = "https://http.cat/" + input.value;
        explainLink.href = "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/" + input.value;
        
        setTimeout(() => {
            img.style.opacity = 1
            img.style.scale = 1
        }, 500)
    }, 500);
}
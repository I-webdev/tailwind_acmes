function sideBarOn() {
    const times = document.getElementById("close-button");
    const burger = document.getElementById("mobile-view");
    burger.addEventListener("click",()=>{
        times.classList.replace("hidden","absolute")})
}

function sideBarOff() {
    const times = document.getElementById("close-button");
    times.addEventListener("click",()=>{
        times.classList.replace("absolute","hidden")
    })
}

setMode()

if( localStorage.theme === "dark" || (!("them" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) ) {

    document.getElementById("toggle").checked == true

}

document.getElementById("toggle").addEventListener("change" , function(){

    if( this.checked ){

        localStorage.theme = "dark"

    }

    else {

        localStorage.theme = "light"

    }

    setMode()
})


function setMode(){
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" || (!("them" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
      )
}
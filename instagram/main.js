window.onload = function() {

    let inputUser = document.querySelector("#user")
    let inputPassword = document.querySelector("#password")
    let buttonSubmit = document.querySelector("#submit")

    let valueUser = false
    let valuePassword = false

    buttonSubmit.classList.add("btn-submit-disable")
    buttonSubmit.disabled = true

    inputUser.addEventListener("input", (e) => {
        if(e.target.value != "") {     
            valueUser = true                
            verifyInputs(valueUser, valuePassword)            
        }else{
            valueUser = false
            verifyInputs(valueUser, valuePassword)
        }
    })

    inputPassword.addEventListener("input", (e) => {        
        if (e.target.value.length > 6) {   
            valuePassword = true                    
            verifyInputs(valueUser, valuePassword)            
        }else{
            valuePassword = false                    
            verifyInputs(valueUser, valuePassword)
        }
    })
    
    
    buttonSubmit.addEventListener("click", (e) => {
        e.preventDefault();        
    })

    function verifyInputs(valueUser, valuePassword ) {
        
        if (valueUser && valuePassword) {
            buttonSubmit.classList.remove("btn-submit-disable")
            buttonSubmit.disabled = false         
        }else{
            buttonSubmit.classList.add("btn-submit-disable")    
            buttonSubmit.disabled = true         
        }
    }

    slideSmartphone()

    function slideSmartphone() {
        const screenArray = Array("img/picture-1.png", "img/picture-2.png", "img/picture-3.png")
        let index = 0
        let image = document.querySelector("#instagram-smartphone").querySelector("img")
        
        setInterval(function() {
            image.src = screenArray[index]    
            index++
            index > 2 ? index = 0 : index            
        }, 3500)
    }

}

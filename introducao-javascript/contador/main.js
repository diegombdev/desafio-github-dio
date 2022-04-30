window.onload = function () {

    let count = 0
    let displayResult = document.querySelector("#display-result")
    let buttonDecrement = document.querySelector("#button-decrement")
    let buttonIncrement = document.querySelector("#button-increment")
    let buttonReset = document.querySelector("#button-reset")

    buttonDecrement.addEventListener("click", function(e) {
        count = count - 1
        displayResult.textContent =  count
        verifyCount(count)       
    })
    
    buttonIncrement.addEventListener("click", function(e) {
        count = count + 1
        displayResult.textContent =  count        
        verifyCount(count)
                
    })

    buttonReset.addEventListener("click", () => {
        displayResult.style.color = "black"
        displayResult.textContent = 0
        count = 0
    })

    function verifyCount(number) {
        if(number < 0) {
            displayResult.style.color = "red"
        }else{
            displayResult.style.color = "black"
        }
    }
}
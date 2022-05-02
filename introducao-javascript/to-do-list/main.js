window.onload = function () {

    let count = 0
    let inputValue = document.querySelector("#input-text")
    let addButton = document.querySelector("#button-add")
    let pendingTask = document.querySelector("#pending-task")
    // Seleciona a ul
    let elementUl = document.querySelector("ul")
    let buttonReset = document.querySelector("#button-reset")

    

    addButton.addEventListener("click", () => {        
        createNewLine(inputValue.value)
        count++
        pendingTask.textContent = count

        inputValue.value = ""
    })

    buttonReset.addEventListener("click", () => {
        count = 0        
        pendingTask.textContent = 0
        elementUl.innerHTML = ""
    })


    function createNewLine(text) {
        // Cria os elementos
        let elementLi = document.createElement("li")
        let elementInput = document.createElement("input")

        let elementSpan = document.createElement("span")
        elementSpan.textContent = text

        elementInput.setAttribute("type", "checkbox")
        elementInput.setAttribute("value", text)

        // Adiciona os elementos a li
        elementLi.appendChild(elementInput)
        elementLi.appendChild(elementSpan)

        addEventListenerInInput(elementInput, elementSpan)

        elementUl.insertBefore(elementLi, elementUl.firstElementChild)
    }

    function addEventListenerInInput(elementInput, elementSpan) {

        elementInput.addEventListener("click", (e) => {
            if (e.target.checked) {                    
                elementSpan.classList.add("draw-line")
                count--
                pendingTask.textContent = count
            } else {
                elementSpan.classList.remove("draw-line")
                count++
                pendingTask.textContent = count                                                                                                                        
            }
        })

    }

    
}
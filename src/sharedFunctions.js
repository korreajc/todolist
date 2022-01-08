function btnMaker(buttonId, parent){
    const taskList = document.getElementById(parent)
    const btn = document.createElement("button")

    btn.setAttribute("id", buttonId)
    btn.innerHTML = "submit"

    taskList.appendChild(btn)
}

function inputForm(id, parent){
    const parentDiv = document.getElementById(parent)
    const input = document.createElement("input")

    input.setAttribute("type", "text")
    input.setAttribute("id", id)

    parentDiv.appendChild(input)
}

function deleteForms(inputId, buttonId){
    const input = document.getElementById(inputId)
    const button = document.getElementById(buttonId)
    
    input.remove()
    button.remove()
}

export {btnMaker, inputForm, deleteForms}
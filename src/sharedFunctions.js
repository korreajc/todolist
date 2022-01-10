function btnMaker(buttonId, parent){
    const taskList = document.getElementById(parent)
    const btn = document.createElement("button")

    btn.setAttribute("id", buttonId)
    btn.innerHTML = "submit"

    taskList.appendChild(btn)
}

function inputForm(id, parent){
    const formDiv = document.createElement("div")
    const parentDiv = document.getElementById(parent)
    const input = document.createElement("input")

    input.setAttribute("type", "text")
    input.setAttribute("id", id)

    parentDiv.appendChild(input)
}

function btnAndFormMaker(buttonId, inp, parent){
    const wrapper = document.createElement("div")
    const parentDiv = document.getElementById(parent)
    const input = document.createElement("input")
    const btn = document.createElement("button")

    wrapper.classList.add("form")
    wrapper.setAttribute("id", "forms")
    input.setAttribute("type", "text")
    input.setAttribute("id", inp)
    btn.setAttribute("id", buttonId)
    btn.innerHTML = "submit"
    wrapper.appendChild(input)
    wrapper.appendChild(btn)
    parentDiv.appendChild(wrapper)

}

function deleteForms(inputId, buttonId, wrapper){
    const input = document.getElementById(inputId)
    const button = document.getElementById(buttonId)
    const wrap = document.getElementById(wrapper)
    wrap.remove()
    input.remove()
    button.remove()
}

export {btnMaker, inputForm, deleteForms, btnAndFormMaker}
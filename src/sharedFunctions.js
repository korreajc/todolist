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

function taskInputForm(nameId, monthId, dayId, yearId, listDiv, buttonId){
    const formDiv = document.createElement("div")
    const parentDiv = document.getElementById(listDiv)
    const taskName = document.createElement("input")
    const taskMonth = document.createElement("input")
    const taskDay = document.createElement("input")
    const taskYear = document.createElement("input")
    const btn = document.createElement("button")
    btn.setAttribute("id", buttonId)
    btn.innerHTML = "submit"

    const taskLabel = document.createElement("label")
    const dateLabel = document.createElement("label")
    
    taskLabel.setAttribute("for", "userInput")
    dateLabel.setAttribute("for", "monthInput")
    taskLabel.innerText = "Task Name:"
    dateLabel.innerText = "Due Date:"


    taskName.setAttribute("type", "text")
    taskName.setAttribute("id", nameId)
    taskName.setAttribute("placeholder", "Enter Task")
    taskMonth.setAttribute("type", "text")
    taskMonth.setAttribute("id", monthId)
    taskMonth.setAttribute("placeholder", "MM")
    taskDay.setAttribute("type", "text")
    taskDay.setAttribute("id", dayId)
    taskDay.setAttribute("placeholder", "DD")
    taskYear.setAttribute("type", "text")
    taskYear.setAttribute("id", yearId)
    taskYear.setAttribute("placeholder", "YYYY")

    formDiv.setAttribute("id", "forms")

    formDiv.appendChild(taskLabel)
    formDiv.appendChild(taskName)
    formDiv.appendChild(dateLabel)
    formDiv.appendChild(taskMonth)
    formDiv.appendChild(taskDay)
    formDiv.appendChild(taskYear)
    formDiv.appendChild(btn)
    parentDiv.appendChild(formDiv)
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

function deleteForms(wrapper){
  
    const wrap = document.getElementById(wrapper)
    wrap.remove()
   
}

export {btnMaker, inputForm, deleteForms, btnAndFormMaker, taskInputForm}
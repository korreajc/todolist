import {lists} from './array.js'
import {createContent, addTaskListToDOM, displayCurrentTaskList} from './content.js'
import { format } from 'date-fns'


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

function getCurrentArrayIndex(){
    let headerName = grabCurrentProjectName();
    const projectList = JSON.parse(window.localStorage.getItem('list'))
    let index = 0;
    for(let i = 0; i < projectList.length; i++){
        let currName = projectList[i].projectName
        if(currName == headerName){
            index = i;
        }
    }
    return index
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

// name and data index
//     const input = document.getElementById("userInput").value 

function makeProject(name, index){
    const list = document.getElementById("projectList") //need parebt
    const wrapper = document.createElement("div")
    const deleteProjectBtn = document.createElement("button") 
    deleteProjectBtn.classList.add("deleteProjBtn")  //need btn id

    const newProj = document.createElement("div")
    newProj.classList.add("listItem")
    newProj.innerHTML = name                                 
    deleteProjectBtn.innerText = "X"
    let dataIndex = index
    newProj.setAttribute("data-index",dataIndex)
    deleteProjectBtn.setAttribute("data-index", dataIndex)
    wrapper.classList.add("projectWrapper")      //need wrapper class
    wrapper.appendChild(newProj)
    wrapper.appendChild(deleteProjectBtn)
    //appends to dom
    list.appendChild(wrapper)
}

function makeTask(name, date){
    const taskList = document.getElementById("taskList")
        const newTaskWrapper = document.createElement("div")
        const newTaskName = document.createElement("div")
        const newTaskDate = document.createElement("div")
        const checkBoxDiv = document.createElement("div")

        checkBoxDiv.classList.add("checkBoxDiv")
        newTaskName.innerText = name
        newTaskDate.innerText = date

        newTaskWrapper.classList.add("taskItem")
        newTaskWrapper.appendChild(newTaskName)
        newTaskWrapper.appendChild(newTaskDate) 
        newTaskWrapper.appendChild(checkBoxDiv)   
        taskList.appendChild(newTaskWrapper);
}

function updateContent(i){
    const header = document.getElementById("mainHeader")
    header.innerHTML = " "
    const taskList = document.getElementById("taskList")
    taskList.remove();
    if(i == 0){
        createContent(0);
        addTaskListToDOM()
        displayCurrentTaskList()
    }else if(i > 0){
        let tempIndex = i-1
        createContent(tempIndex)
        addTaskListToDOM()
        displayCurrentTaskList()
    }
}

function grabCurrentProjectName(){
    const currentProject = document.getElementById("mainHeader")
    let headerName = currentProject.innerHTML
    return headerName;
}

function createDateString(){
    const monthInput = document.getElementById("monthInput").value
    const dayInput = document.getElementById("dayInput").value
    const yearInput = document.getElementById("yearInput").value
    console.log(yearInput)
    var result = format(new Date(yearInput, monthInput, dayInput), 'MM/dd/yyyy')
    console.log(result)
    return result
}


export {btnMaker, inputForm, deleteForms, btnAndFormMaker, taskInputForm, makeProject, makeTask, getCurrentArrayIndex, updateContent, grabCurrentProjectName, createDateString}
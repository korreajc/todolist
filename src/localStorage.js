import {lists} from './array.js'
import { addTaskListToDOM, applyStyles, createContent } from './content.js';
import { createListItem, createProject, createTask} from './factoryFunctions.js';
import {addListeners} from './main.js'


function checkStorage(){
    if(!localStorage.getItem('list')){
        console.log("yuop")
        setNewStorage()
        initialProjectPop()
        initialTaskPop()
        console.log("doesnt exist")
        console.log(lists)
    }else{
        console.log("boop")
        populateProjectList();
        createContent(0)
        initialTaskPop()
        console.log("exists")
    }
}

function setNewStorage(){
    const firstTask = createTask("Default Task", "01/01/2022")
    console.log("created")
    const defaultProject = createListItem("Default Project", firstTask)
    lists.push(defaultProject);
    window.localStorage.setItem('list', JSON.stringify(lists))
}

function populateStorage(){
    window.localStorage.setItem('list', JSON.stringify(lists))
    console.log("addedhh")
}

function updateIndex(){
    for(let i = 0; i < lists.length; i++){
        let list = document.querySelectorAll(".listItem")
        let buttonList = document.querySelectorAll(".deleteProjBtn")

        list[i].setAttribute("data-index", i)
        buttonList[i].setAttribute("data-index", i)

    }
}

function returnList(){
    let temp = JSON.parse(localStorage.getItem('list'))
    for(let i = 0; i < temp.length; i++){
        lists.push(temp[i])
    }
    return temp
}

function populateTaskList(){
    const projectList = JSON.parse(window.localStorage.getItem('list'))
    const taskList = document.getElementById("taskList")

    for(let i = 0; i < projectList[index].tasks.length;i++){
    
        const newTaskWrapper = document.createElement("div")
        const newTaskName = document.createElement("div")
        const newTaskDate = document.createElement("div")
        const date = createDateString()

        newTaskName.innerText = projectList[index].tasks[i].taskName
        newTaskDate.innerText = projectList[index].tasks[i].taskDate

        newTaskWrapper.classList.add("taskItem")
        newTaskWrapper.appendChild(newTaskName)
        newTaskWrapper.appendChild(newTaskDate)    
        taskList.appendChild(newTaskWrapper);
    }
    
}
function initialProjectPop(){
    console.log("pop")

    const projectList = document.getElementById("projectList")
    const header = document.getElementById("mainHeader")
    header.innerText = lists[0].projectName
    let wrapperList = document.querySelectorAll(".projectWrapper")


    if(wrapperList.length == 0){
            const wrapper = document.createElement("div")
        const deleteProjectBtn = document.createElement("button")
        const defaultList = document.createElement("div")

        defaultList.classList.add("listItem")
        deleteProjectBtn.classList.add("deleteProjBtn")
        wrapper.classList.add("projectWrapper")
        let name = lists[0].projectName
        defaultList.innerText = name
        deleteProjectBtn.innerText = "X"

        wrapper.appendChild(defaultList)
        wrapper.appendChild(deleteProjectBtn)
        projectList.appendChild(wrapper)

        let dataIndex = 0;
        defaultList.setAttribute("data-index", dataIndex)
        deleteProjectBtn.setAttribute("data-index", dataIndex)
        addListeners(0)

        const taskList = document.getElementById("taskList")

        
    }
}

function initialTaskPop(){
    console.log(lists)

    for(let i = 0; i < lists[0].tasks.length;i++){
        const newTaskWrapper = document.createElement("div")
        const newTaskName = document.createElement("div")
        const newTaskDate = document.createElement("div")

        newTaskName.innerText = lists[0].tasks[i].taskName
        newTaskDate.innerText = lists[0].tasks[i].taskDate


        newTaskWrapper.classList.add("taskItem")
        newTaskWrapper.appendChild(newTaskName)
        newTaskWrapper.appendChild(newTaskDate)    
        taskList.appendChild(newTaskWrapper);
}

}
function populateProjectList(){
    const list = returnList()
    const projectList = document.getElementById("projectList")

    for(let i = 0; i < list.length;i++){
        const wrapper = document.createElement("div")
        const deleteProjectBtn = document.createElement("button")
        const defaultList = document.createElement("div")


        deleteProjectBtn.classList.add("deleteProjBtn")
        wrapper.classList.add("projectWrapper")
        defaultList.classList.add("listItem")

        let name = list[i].projectName
        defaultList.innerText = name
        deleteProjectBtn.innerText = "X"

        wrapper.appendChild(defaultList)
        wrapper.appendChild(deleteProjectBtn)
        projectList.appendChild(wrapper)

        let dataIndex = i;
        defaultList.setAttribute("data-index",dataIndex)
        deleteProjectBtn.setAttribute("data-index", dataIndex)
        addListeners(i)
    }
}



export {updateIndex, setNewStorage, checkStorage, populateStorage, returnList, populateTaskList, populateProjectList, initialTaskPop, initialProjectPop}
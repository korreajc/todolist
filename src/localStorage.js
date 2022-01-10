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
    const projectList = document.getElementById("projectList")
    const header = document.getElementById("mainHeader")
    header.innerText = lists[0].projectName

    for(let i = 0; i < lists.length;i++){
        const defaultList = document.createElement("div")
        defaultList.classList.add("listItem")
        let name = lists[i].projectName
        defaultList.innerText = name

        projectList.appendChild(defaultList)
        let dataIndex = i;
        defaultList.setAttribute("data-index",dataIndex)
        addListeners(i)
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
        const defaultList = document.createElement("div")
        defaultList.classList.add("listItem")
        let name = list[i].projectName
        defaultList.innerText = name
        projectList.appendChild(defaultList)
        let dataIndex = i;
        defaultList.setAttribute("data-index",dataIndex)
        addListeners(i)
    }
}



export {setNewStorage, checkStorage, populateStorage, returnList, populateTaskList, populateProjectList, initialTaskPop}
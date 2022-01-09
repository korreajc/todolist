import {lists, tasks} from './array.js'
import { createProject, createProjectList, createListItem } from './content.js'
import { btnMaker, inputForm, deleteForms } from './sharedFunctions.js'
import {createTask} from './factoryFunctions.js'


function createContent(index){ 
    
    let header = lists[index].projectName
    const head = document.getElementById("mainHeader")
    head.innerHTML = header

   
}

function deleteContent(){
   const taskList = document.getElementById("taskList")
   taskList.remove();
}

function makeProjectList(){
    const projectList = document.createElement("ul")
    projectList.setAttribute("id", "projectList")
    const main = document.getElementById("sideBar")
    main.appendChild(projectList)
}

function deleteArrayContent(){
    lists.splice(0,lists.length);
}


function deleteProjects(){
    const projectList = document.getElementById("projectList")
    projectList.remove();
}

function addTaskListToDOM(){
    const content = document.getElementById("content")
    const taskList = document.createElement("ul")
    taskList.setAttribute("id", "taskList")
    content.appendChild(taskList);
}

function displayCurrentTaskList(){
    const header = document.getElementById("mainHeader").innerHTML
    const taskList = document.getElementById("taskList")
    let index = getCurrentArrayIndex();
    const projectList = JSON.parse(window.localStorage.getItem('list'))


    for(let i = 0; i < projectList[index].tasks.length;i++){
        const defaultList = document.createElement("li")
        let name = projectList[index].tasks[i].taskName
        defaultList.innerText = name
        taskList.appendChild(defaultList)
    }
}

function grabCurrentProjectName(){
    const currentProject = document.getElementById("mainHeader")
    let headerName = currentProject.innerHTML
    return headerName;
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

function inputTaskForm(){
    inputForm("taskInput", "taskList")
    btnMaker("submitTaskBtn", "taskList")
}

function addTaskToDOM(){
    const taskList = document.getElementById("taskList")
    const input = document.getElementById("taskInput").value
    const newTask = document.createElement("li")
    newTask.classList.add("taskItem")
    newTask.innerHTML = input;
    taskList.appendChild(newTask);
}

function addTaskToArray(){
    console.log(lists)
    const newTask = document.getElementById("taskInput").value
    const task = createTask(newTask)
    let index = getCurrentArrayIndex()
    lists[index].tasks.push(task)
}



export {deleteArrayContent, createContent, makeProjectList, inputTaskForm, deleteContent, addTaskListToDOM, addTaskToDOM, addTaskToArray, displayCurrentTaskList, grabCurrentProjectName, deleteProjects}
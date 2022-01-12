import {lists} from './array.js'
import { btnAndFormMaker , makeTask, getCurrentArrayIndex, createDateString} from './sharedFunctions.js'
import {createTask} from './factoryFunctions.js'
import { format } from 'date-fns'


//changes header
function createContent(index){ 
    let header = lists[index].projectName
    const head = document.getElementById("mainHeader")
    head.innerHTML = header
}

//deletes task list off page
function deleteContent(){
   const taskList = document.getElementById("taskList")
   taskList.remove();
}



//clears temp array
function deleteArrayContent(){
    lists.splice(0,lists.length);
}

//deletes project off of sidebar
function deleteProjects(){
    const projectList = document.getElementById("projectList")
    projectList.remove();
}

//adds a taskList to the dom
function addTaskListToDOM(){
    const content = document.getElementById("content")
    const taskList = document.createElement("ul")
    taskList.setAttribute("id", "taskList")
    content.appendChild(taskList);
}

//displays task list of current project
function displayCurrentTaskList(){
    let index = getCurrentArrayIndex();
    const projectList = JSON.parse(window.localStorage.getItem('list'))
    for(let i = 0; i < projectList[index].tasks.length;i++){
        makeTask(projectList[index].tasks[i].taskName, projectList[index].tasks[i].taskDate)
    }
}

//grabs header name

//makes input
function inputTaskForm(){
    btnAndFormMaker("submitTaskBtn","taskInput", "taskList")
}

//adds single task to dom for first time
function addTaskToDOM(){
    const date = createDateString()
    makeTask(document.getElementById("userInput").value, date)
}


//adds task to proper todo list
function addTaskToArray(){
    const date = createDateString()
    console.log(lists)
    const newTask = document.getElementById("userInput").value
    const task = createTask(newTask, date)
    let index = getCurrentArrayIndex()
    lists[index].tasks.push(task)
    console.log(date)
    console.log(newTask)
}

function populateTaskList(){
    const projectList = JSON.parse(window.localStorage.getItem('list'))
    const taskList = document.getElementById("taskList")
    for(let i = 0; i < projectList[index].tasks.length;i++){
        makeTask(projectList[index].tasks[i].taskName, projectList[index].tasks[i].taskDate)  
    }
    
}


function initialTaskPop(){
    console.log(lists)
    for(let i = 0; i < lists[0].tasks.length;i++){
        makeTask(lists[0].tasks[i].taskName, lists[0].tasks[i].taskDate)
    }
}




export { deleteArrayContent, createContent, inputTaskForm, deleteContent, addTaskListToDOM, addTaskToDOM, addTaskToArray, displayCurrentTaskList, deleteProjects, populateTaskList, initialTaskPop}
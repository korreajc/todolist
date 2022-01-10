import {lists, tasks} from './array.js'
import { createProject, createProjectList, createListItem } from './content.js'
import { btnMaker, inputForm, deleteForms, btnAndFormMaker } from './sharedFunctions.js'
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

//appends a parent div of project to the DOM
function makeProjectList(){
    const projectList = document.createElement("div")
    projectList.setAttribute("id", "projectList")
    const main = document.getElementById("sideBar")
    main.appendChild(projectList)
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
        const taskList = document.getElementById("taskList")
        const newTaskWrapper = document.createElement("div")
        const newTaskName = document.createElement("div")
        const newTaskDate = document.createElement("div")
        
        newTaskName.innerText = projectList[index].tasks[i].taskName
        newTaskDate.innerText = projectList[index].tasks[i].taskDate
       
        newTaskWrapper.classList.add("taskItem")
        newTaskWrapper.appendChild(newTaskName)
        newTaskWrapper.appendChild(newTaskDate)    
        taskList.appendChild(newTaskWrapper);
    }
}

//grabs header name
function grabCurrentProjectName(){
    const currentProject = document.getElementById("mainHeader")
    let headerName = currentProject.innerHTML
    return headerName;
}
//helps figure out what project index we clicked on

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

//makes input
function inputTaskForm(){
    btnAndFormMaker("submitTaskBtn","taskInput", "taskList")
}

//adds single task to dom for first time
function addTaskToDOM(){
    const taskList = document.getElementById("taskList")
    const newTaskWrapper = document.createElement("div")
    const newTaskName = document.createElement("div")
    const newTaskDate = document.createElement("div")
    const date = createDateString()
    console.log(date)
    newTaskName.innerText = document.getElementById("userInput").value
    newTaskDate.innerText = date

    newTaskWrapper.classList.add("taskItem")
    newTaskWrapper.appendChild(newTaskName)
    newTaskWrapper.appendChild(newTaskDate)    
    taskList.appendChild(newTaskWrapper);
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



export { deleteArrayContent, createContent, makeProjectList, inputTaskForm, deleteContent, addTaskListToDOM, addTaskToDOM, addTaskToArray, displayCurrentTaskList, grabCurrentProjectName, deleteProjects}
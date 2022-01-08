import {lists, tasks} from './array.js'
import { createTask, createProject, createProjectList, createListItem } from './project.js'
import { btnMaker, inputForm, deleteForms } from './sharedFunctions.js'



function createContent(index){   
    let header = lists[index].projectName
    const head = document.getElementById("mainHeader")
    head.innerHTML = header
}
function deleteContent(){
   const taskList = document.getElementById("taskList")
   taskList.remove();
}

function addTaskList(){
    const content = document.getElementById("content")
    const taskList = document.createElement("ul")
    taskList.setAttribute("id", "taskList")

    content.appendChild(taskList);
}

function displayList(){
    const header = document.getElementById("mainHeader").innerHTML
    const taskList = document.getElementById("taskList")
    let index = getCurrentArrayIndex();
    
    for(let i = 0; i < lists[index].tasks.length;i++){
        const defaultList = document.createElement("li")
        let name = lists[index].tasks[i].taskName
        defaultList.innerText = name
        taskList.appendChild(defaultList)
    }
}

function grabCurrentProject(){
    const currentProject = document.getElementById("mainHeader")
    let headerName = currentProject.innerHTML
    return headerName;
}

function getCurrentArrayIndex(){
    let headerName = grabCurrentProject();
    let index = 0;
    for(let i = 0; i < lists.length; i++){
        let currName = lists[i].projectName
        if(currName == headerName){
            index = i;
        }
    }
    return index
}

function printIndex(){
    let index = getCurrentArrayIndex()
    console.log(index)
}

function inputTaskForm(){
    inputForm("taskInput", "taskList")
    btnMaker("submitTaskBtn", "taskList")
}

function addTaskToDOM(){
    const taskList = document.getElementById("taskList")
    const input = document.getElementById("taskInput").value
    console.log(input)

    addTaskToArray()
    
    const newTask = document.createElement("li")
    newTask.innerHTML = input;

    deleteForms("taskInput", "submitTaskBtn")
    taskList.appendChild(newTask);
}

function addTaskToArray(){
    console.log(lists)
    const newTask = document.getElementById("taskInput").value
    const task = createTask(newTask)
    
    let index = getCurrentArrayIndex()
    lists[index].tasks.push(task)

}






export {createContent, inputTaskForm, deleteContent, addTaskList, addTaskToDOM, displayList, grabCurrentProject, printIndex}
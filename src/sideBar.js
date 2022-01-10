import {createProject, createTask, createListItem} from './factoryFunctions.js'
import {lists} from './array.js'
import {addListeners} from './main.js'
import {btnAndFormMaker, btnMaker, inputForm} from './sharedFunctions.js'



function inputProjectName(){
    btnAndFormMaker("subBtn", "userInput", "projectList")
}



function addProjectInputToDom(){
    //grabbing list and user input
    const list = document.getElementById("projectList")
    const input = document.getElementById("userInput").value

    //creating li and adding attributes and input to it
    const newProj = document.createElement("div")
    newProj.classList.add("listItem")
    newProj.innerHTML = input;
    let dataIndex = lists.length;
    newProj.setAttribute("data-index",dataIndex)
    
    //appends to dom
    list.appendChild(newProj)

    //attach listener and create default list item 
    addListeners()
    addProjectToListArray();
}


function addProjectToListArray(){
    //get user inputted project name
    const projName = document.getElementById("userInput").value

    //create default task array and project object
    let task = createTask("Default Task", "01/01/2022")
    //create a todollist object with task and project name
    let listItem = createListItem(projName, task)
    lists.push(listItem)
    console.log(lists)
}



export {inputProjectName, addProjectToListArray,addProjectInputToDom}
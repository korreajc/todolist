import { createTask, createListItem} from './factoryFunctions.js'
import {lists} from './array.js'
import {btnAndFormMaker, makeProject, grabCurrentProjectName, updateContent} from './sharedFunctions.js'
import {returnList, populateStorage, updateIndex} from './localStorage.js'
import {deleteContent, createContent, addTaskListToDOM, displayCurrentTaskList} from './content.js'

function inputProjectName(){
    btnAndFormMaker("subBtn", "userInput", "projectList")
}

//grab input and display to dom
function addProjectInputToDom(){
    makeProject(document.getElementById("userInput").value, lists.length)
    addListeners()
    addProjectToListArray();
}

function displayClickedProjectContents(i){
        deleteContent()
        createContent(i);
        addTaskListToDOM()
        displayCurrentTaskList()
        grabCurrentProjectName()
}

function makeProjectList(){
    const projectList = document.createElement("div")
    projectList.setAttribute("id", "projectList")
    const main = document.getElementById("sideBar")
    main.appendChild(projectList)
}

function handleProjectDeletion(i){
    let wrapperList = document.querySelectorAll(".projectWrapper")
    let wrapperArray = Array.from(wrapperList)
    const curr = wrapperArray[i]

    lists.splice(i, 1)
    wrapperArray.splice(i, 1)
    curr.remove()

    if(lists.length == 0){
        populateProjectList()
    }else{
        populateStorage()
        updateIndex()
    }
    updateIndex()
    populateStorage()
    updateContent(i)
}

function addListeners(){
    let list = document.querySelectorAll(".listItem")
    let buttonList = document.querySelectorAll(".deleteProjBtn")
    let latestBtn = list.length-1;
    let latest = list.length-1;

    list[latest].addEventListener('click', function(e){
        let item = e.currentTarget
        let index = item.getAttribute('data-index')
        displayClickedProjectContents(index)
    })
    
    buttonList[latestBtn].addEventListener('click', function(e){
        let item = e.currentTarget
        let index = item.getAttribute('data-index')
        handleProjectDeletion(index)
})
};



//push to array
function addProjectToListArray(){
    const projName = document.getElementById("userInput").value
    let task = createTask("Default Task", "01/01/2022")
    let listItem = createListItem(projName, task)
    lists.push(listItem)
    console.log(lists)
}

function initialProjectPop(){
    const header = document.getElementById("mainHeader")
    header.innerText = lists[0].projectName
    let wrapperList = document.querySelectorAll(".projectWrapper")
    if(wrapperList.length == 0){
        makeProject(lists[0].projectName, 0)
        addListeners(0)        
    }
}

function populateProjectList(){
    const list = returnList()
    for(let i = 0; i < list.length;i++){
        makeProject(list[i].projectName, i)
        addListeners(i)
    }
}



export {handleProjectDeletion,displayClickedProjectContents, inputProjectName, addProjectToListArray,addProjectInputToDom, initialProjectPop, populateProjectList, makeProjectList}
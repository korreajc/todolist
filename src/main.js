import './styles.css'
import {addProjectInputToDom, inputProjectName} from './sideBar.js'
import {addTaskListToDOM, applyStyles, clearContent, createContent, deleteArrayContent, deleteContent, deleteProjects, displayCurrentTaskList, makeProjectList} from './content.js'
import {inputTaskForm} from './content.js'
import {addTaskToDOM, addTaskToArray} from './content.js'
import {deleteForms, taskInputForm} from './sharedFunctions.js'
import {grabCurrentProjectName} from "./content.js"
import {checkStorage, populateStorage, returnList, setNewStorage,  initialTaskPop, initialProjectPop,populateProjectList, updateIndex} from "./localStorage.js"
import { lists } from './array'

(function(){
    checkStorage();
}());




(function (){
    const btn = document.getElementById("addProjectButton")
    btn.addEventListener("click", function(){
        inputProjectName();
    })
}());


(function(){
    document.getElementById("clearBtn").addEventListener("click", function(){
        window.localStorage.clear();
        deleteProjects()
        deleteContent()
        deleteArrayContent()
        document.getElementById("mainHeader").innerHTML = ""
        makeProjectList()
        addTaskListToDOM()
        populateProjectList();
        createContent(0)
        initialTaskPop()
    })
})


(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'subBtn'){
            addProjectInputToDom();
            deleteForms("forms")
            populateStorage();
        }
    })
    
}());

(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'taskBtn'){
            taskInputForm("userInput", "monthInput", "dayInput", "yearInput",  "taskList", "submitTaskBtn")
        }
    })
    
}());

(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'submitTaskBtn'){
            addTaskToDOM()
            addTaskToArray()
            deleteForms("forms")
            populateStorage()
        }
    })
    
}());

function addListeners(){
    let list = document.querySelectorAll(".listItem")
    let buttonList = document.querySelectorAll(".deleteProjBtn")
    let latestBtn = list.length-1;
    let latest = list.length-1;

    list[latest].addEventListener('click', function(e){
        console.log("brr")
        let item = e.currentTarget
        let index = item.getAttribute('data-index')
        deleteContent()
        createContent(index);
        addTaskListToDOM()
        displayCurrentTaskList()
        grabCurrentProjectName()
    })
    
    buttonList[latestBtn].addEventListener('click', function(e){
        let wrapperList = document.querySelectorAll(".projectWrapper")
        let wrapperArray = Array.from(wrapperList)
        let item = e.currentTarget
        let index = item.getAttribute('data-index')
        const curr = wrapperArray[index]

        lists.splice(index, 1)
        wrapperArray.splice(index, 1)
        curr.remove()

        if(lists.length == 0){
            populateProjectList()
        }else{
            populateStorage()
            updateIndex()
        }

        console.log(lists)
        updateIndex()
        populateStorage()
        updateContent(index)
})
};







export {addListeners}



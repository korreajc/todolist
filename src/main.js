import './styles.css'
import {addProjectInputToDom, inputProjectName} from './sideBar.js'
import {addTaskListToDOM, applyStyles, createContent, deleteArrayContent, deleteContent, deleteProjects, displayCurrentTaskList, makeProjectList} from './content.js'
import {inputTaskForm} from './content.js'
import {addTaskToDOM, addTaskToArray} from './content.js'
import {deleteForms} from './sharedFunctions.js'
import {grabCurrentProjectName} from "./content.js"
import {checkStorage, populateStorage, returnList, setNewStorage,  initialTaskPop, populateProjectList} from "./localStorage.js"

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
            deleteForms("userInput", "subBtn", "forms")
            populateStorage();
        }
    })
    
}());

(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'taskBtn'){
            inputTaskForm();
        }
    })
    
}());

(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'submitTaskBtn'){
            addTaskToDOM()
            addTaskToArray()
            deleteForms("taskInput", "submitTaskBtn", "forms")
            populateStorage()
        }
    })
    
}());

function addListeners(){
    let list = document.querySelectorAll(".listItem")
    let latest = list.length-1;
        list[latest].addEventListener('click', function(e){
            let item = e.currentTarget
            let index = item.getAttribute('data-index')
            deleteContent()
            createContent(index);
            addTaskListToDOM()
            displayCurrentTaskList()
            grabCurrentProjectName()
        })
};






export {addListeners}



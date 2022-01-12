import './styles.css'
import {addProjectInputToDom, inputProjectName, populateProjectList, makeProjectList} from './sideBar.js'
import {addTaskListToDOM, createContent, deleteArrayContent, deleteContent, deleteProjects} from './content.js'
import {addTaskToDOM, addTaskToArray, initialTaskPop} from './content.js'
import {deleteForms, taskInputForm} from './sharedFunctions.js'
import {checkStorage, populateStorage} from "./localStorage.js"

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

/*

function checkBoxListeners(){
    const checkBoxList = document.querySelectorAll(".checkBoxDiv")
    console.group(checkBoxList.length)
    checkBoxList[checkBoxList.length-1].addEventListener("click", function(){
            alert("checked");
            console.log("hi")
            checkBoxList[checkBoxList.length-1].classList.add("checkBoxDiv")
    })
}

*/













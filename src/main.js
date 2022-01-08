import './styles.css'
import {inputProjectName} from './sideBar.js'
import {add} from './sideBar.js'
import {deleteInputForm} from './sideBar.js'
import {addTaskList, createContent, deleteContent, displayList} from './content.js'
import {inputTaskForm} from './content'
import {addTaskToDOM} from './content'
import {deleteForms} from './sharedFunctions.js'
import {grabCurrentProject, printIndex} from "./content.js"


(function (){
    const btn = document.getElementById("addProjectButton")
    btn.addEventListener("click", function(){
        inputProjectName();
    })
}());

(function (){
    const defaultProj = document.getElementById("defaultProject")
    defaultProj.addEventListener("click", function(){
        createContent(0)
        deleteContent()
        addTaskList()
        displayList()
    })
}());

(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'subBtn'){
            add();
            deleteForms("userInput", "subBtn")
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
            addTaskList()
            displayList()
            grabCurrentProject()
            printIndex()
        })
};

export {addListeners}



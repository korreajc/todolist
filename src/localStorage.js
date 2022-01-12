import {lists} from './array.js'
import {createContent, initialTaskPop} from './content.js';
import { createListItem, createTask} from './factoryFunctions.js';
import {populateProjectList} from './sideBar.js'


function checkStorage(){
    if(!localStorage.getItem('list')){
        console.log("yuop")
        setNewStorage()
        initialProjectPop()
        initialTaskPop()
        console.log("doesnt exist")
        console.log(lists)
    }else{
        console.log("boop")
        populateProjectList();
        createContent(0)
        initialTaskPop()
        console.log("exists")
    }
}

function setNewStorage(){
    const firstTask = createTask("Default Task", "01/01/2022")
    console.log("created")
    const defaultProject = createListItem("Default Project", firstTask)
    lists.push(defaultProject);
    window.localStorage.setItem('list', JSON.stringify(lists))
}

function populateStorage(){
    window.localStorage.setItem('list', JSON.stringify(lists))
    console.log("addedhh")
}

function updateIndex(){
    for(let i = 0; i < lists.length; i++){
        let list = document.querySelectorAll(".listItem")
        let buttonList = document.querySelectorAll(".deleteProjBtn")

        list[i].setAttribute("data-index", i)
        buttonList[i].setAttribute("data-index", i)
    }
}

function returnList(){
    let temp = JSON.parse(localStorage.getItem('list'))
    for(let i = 0; i < temp.length; i++){
        lists.push(temp[i])
    }
    return temp
}



export {updateIndex, setNewStorage, checkStorage, populateStorage, returnList}
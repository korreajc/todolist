import {createProject} from './project.js'

function addProjectToDOM(){
    const projectList = document.getElementById("projectList")
    const project = document.getElementById("li")
    project.innerHTML = "Default"
}



function inputProjectName(){
    const list = document.getElementById("projectList")
    const inputDiv = document.createElement("div");
    inputDiv.setAttribute("id", "inputForm")
    const label = document.createElement("Label")
    const input = document.createElement("input")

    input.setAttribute("type", "text")
    input.setAttribute("id", "userInput")

    inputDiv.appendChild(label)
    inputDiv.appendChild(input)
    list.appendChild(inputDiv)
    createBtn();
}

function createBtn(){
    const inputDiv = document.getElementById("inputForm")
    const submitBtn = document.createElement("button")
    submitBtn.setAttribute("id", "subBtn")
    submitBtn.innerHTML = "submit"
    inputDiv.appendChild(submitBtn);
}

function add(){
    const list = document.getElementById("projectList")
    const input = document.getElementById("userInput").value
    const newProj = document.createElement("li")
    newProj.innerHTML = input;

    list.appendChild(newProj)
}

function deleteInputForm(){
    const input = document.getElementById("userInput")
    const btn = document.getElementById("subBtn")
    btn.remove()
    input.remove();
}




function addProjectName(){
    const projName = document.getElementById("userInput").value
    createProject(projName)
}

export {addProjectToDOM, inputProjectName, addProjectName,add, deleteInputForm}
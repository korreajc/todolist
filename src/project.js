

function createProject(projectName){
    return{
        projectName: projectName,
    }
}

function createTask(taskName){
    return{
        taskName: taskName,
    }
}

function createListItem(project, tasks){
    return{
        projectName: project,
        tasks: [tasks
        ]
    }
    
}

export {createProject,  createTask, createListItem}
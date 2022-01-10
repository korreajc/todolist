

function createProject(projectName){
    return{
        projectName: projectName,
    }
}

function createTask(taskName, taskDate){
    return{
        taskName: taskName,
        taskDate: taskDate
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
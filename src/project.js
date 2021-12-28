function createProject(projectName, task){
    return{
        projectName: projectName,
        toDoList: [

        ],

        addTask: function(){
            this.toDoList.push(task)
        }
    }
}

function createTask(taskName, description, dueDate, priority){
    return{
        taskName: taskName,
        description: description,
        dueDate: dueDate,
        priority: priority
    }
}

export {createProject, createTask}
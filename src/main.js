import './styles.css'
import {inputProjectName} from './sideBar.js'
import {add} from './sideBar.js'
import {deleteInputForm} from './sideBar.js'


(function (){
    const btn = document.getElementById("addProjectButton")
    btn.addEventListener("click", function(){
        inputProjectName();
    })

    
}());

(function (){
    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'subBtn'){
            add();
            deleteInputForm()
        }
    })
    
}());




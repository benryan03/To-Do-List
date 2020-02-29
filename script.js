function task_clicked(task_num){

    var text_status = document.getElementById("task" + task_num).style.textDecoration
    
    if (text_status == ""){
        document.getElementById("task" + task_num).style.textDecoration = "line-through";
    }
    
    else if (text_status == "line-through"){
        document.getElementById("task" + task_num).style.textDecoration = "none";
    }
    
}

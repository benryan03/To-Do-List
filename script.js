var task_count = 1;

function task_clicked(task_num){

    var text_status = document.getElementById("task" + task_num).style.textDecoration
    
    if (text_status == "" || text_status == "none"){
        document.getElementById("task" + task_num).style.textDecoration = "line-through";
    }
    
    else if (text_status == "line-through"){
        document.getElementById("task" + task_num).style.textDecoration = "none";
    }

}

function new_task(){

    var new_task_text = document.getElementById("newtask").value;
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", "task");
    newDiv.setAttribute("id", "task" + task_count);
    newDiv.setAttribute("onclick", "task_clicked(" + task_count + ")");
    var newContent = document.createTextNode(new_task_text);
    newDiv.appendChild(newContent);
    last_div.parentNode.insertBefore(newDiv, last_div);
    task_count = task_count + 1;

}
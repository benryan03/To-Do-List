var task1_strikethrough = false;
var task2_strikethrough = false;
var task3_strikethrough = false;


function task1_clicked(){

    if (task1_strikethrough == false) {
        document.getElementById("task1").style.textDecoration = "line-through";
        task1_strikethrough = true;
    }

    else {
        document.getElementById("task1").style.textDecoration = "none";
        task1_strikethrough = false;
    }

}

function task2_clicked(){

    if (task2_strikethrough == false) {
        document.getElementById("task2").style.textDecoration = "line-through";
        task2_strikethrough = true;
    }

    else {
        document.getElementById("task2").style.textDecoration = "none";
        task2_strikethrough = false;
    }

}

function task3_clicked(){

    if (task3_strikethrough == false) {
        document.getElementById("task3").style.textDecoration = "line-through";
        task3_strikethrough = true;
    }

    else {
        document.getElementById("task3").style.textDecoration = "none";
        task3_strikethrough = false;
    }

}

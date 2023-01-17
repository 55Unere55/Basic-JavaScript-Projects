function get_todos() {
    var todos = newArray;
    var todos_str = localStorage.getItem("todo");
    if (todos_str !==null) {
        todos = JSONparse(todos_str);
    }
    return todos;
}

function add() {
    var document.getElementById("task").value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem("todo", JSONstringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}

function show() {
    var todos = get_todos;
    var html = "<ul>";
    for (var i = 0; i < todos.length; i++) {
        html += "<li>" + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '<ul>';
    document.getElementById(todos).innerHTML = html;
}

document.getElementById("add").addEventListener("click, add");
show();

function remove() {
var id= this.getAttribute("id");
var todos = get_todos();
todos.splice(id, 1);
localStorage.setItem("todo", JSONstringify(todos));
show();
return false;
}

var buttons = document.getElementsByClassName("remove");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove);
};



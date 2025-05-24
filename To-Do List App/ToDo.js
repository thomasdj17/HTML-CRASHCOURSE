function push() {
    const todo = document.getElementById("text").value;
    if (todo.length < 3) {
        return alert ("Must use a complete sentence for list to update.");
    }

    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);

    li.appendChild(text);
    list.appendChild(li);
}
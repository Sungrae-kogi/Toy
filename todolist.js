function addTodoList(){
    alert('등록되었습니다.');
    let todo_text = document.getElementById('input_todolist').value;
    let newLi = document.createElement('li');
    let li_text = document.createTextNode(todo_text);
    newLi.appendChild(li_text);
    document.getElementById('list').appendChild(newLi);
}
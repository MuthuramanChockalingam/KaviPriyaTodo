const Todo = ({todo}) =>
    <div>
        <span>{todo.id}</span>
        <span>{todo.content}</span>
        <input type="checkBox" checked={todo.status}></input>
    </div>;

export default Todo;

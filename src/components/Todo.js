import { Component } from "react";

class Todo extends Component {
    render() {
        const {todo} = this.props;

        return (
            <div>
                <span>{todo.id}</span>
                <span>{todo.content}</span>
                <input type="checkBox" checked={todo.status}></input>
            </div>
        )
    }
}

export default Todo;

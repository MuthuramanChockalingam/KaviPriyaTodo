import { Component } from "react";

class Todo extends Component {
    render() {
        const {todo} = this.props;
        const {id, content, status} = todo;

        return (
            <div>
                <span>{id}</span>
                <span>{content}</span>
                <input type="checkBox" checked={status}></input>
            </div>
        )
    }
}

export default Todo;

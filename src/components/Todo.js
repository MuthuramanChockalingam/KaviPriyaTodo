import { Component } from "react";
import { todoManager } from "../services/todoManager";

class Todo extends Component {
    constructor(props) {
        super(props);
        const {data} = props;
        this.state = {todos: data}; 
    }

    render() {
        const {todos} = this.state;
        const {updateTodoStatus} = todoManager;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Content</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => {
                            const {id, content, status} = todo;
                    
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{content}</td>
                                    <td>
                                        <input type="checkBox" onChange={() => this.setState(updateTodoStatus(this.state, id))} checked={status}></input>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Todo;

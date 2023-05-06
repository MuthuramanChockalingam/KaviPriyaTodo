import { Component } from "react";
import { todoManager } from "../services/todoManager";
import TodoInput from "./TodoInput";

class Todo extends Component {
    constructor(props) {
        super(props);
        const {data} = props;
        this.state = {todos: data, input: ''};
        this.update=this.update.bind(this);
    }

    update(todoInput) {
        this.setState({...this.state, input: todoInput});
    }

    render() {
        const {todos} = this.state;
        const {updateTodoStatus} = todoManager;
        console.log(this.state);
        return (
            <div>
                <span>
                    <TodoInput input={this.state.input} handler={this.update}/>
                </span>
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
                                            <input type="checkBox" onChange={() => {
                                                const updatedTodo = updateTodoStatus(this.state, id);
                                                return this.setState(updatedTodo);
                                            }} checked={status}>
                                            </input>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Todo;

import { Component } from "react";
import { todoManager } from "../services/todoManager";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TodoInput from "./TodoInput";

class Todo extends Component {
    constructor(props) {
        super(props);
        const {data} = props;
        this.state = {todos: data, input: '', isEdited: false, editedId: ''};
        this.update=this.update.bind(this);
    }

    update(todoInput) {
        this.setState({...this.state, input: todoInput});
    }

    render() {
        const {todos} = this.state;
        const {updateTodoStatus, addTodo, removeTodo, editTodo, updateTodo} = todoManager;
        return (
            <div>
                <span>
                    <TodoInput input={this.state.input} handler={this.update}/>
                </span>
                <span>
                    <button onClick={() => {
                        if(this.state.isEdited===true){
                            const updatedTodo = updateTodo(this.state);
                            this.setState({todos: updatedTodo, input: '', isEdited: false, editedId: ''});
                        }
                        else{
                            const addedTodos =  addTodo(this.state);
                            this.setState({todos: addedTodos, input: ''});
                        }
                    }}>{this.state.isEdited ? 'Update' : 'Add'}</button>
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
                                        <td>
                                            <IconButton aria-label="delete" color="primary"
                                                onClick={() => {
                                                    const filteredTodos = removeTodo(this.state, id);
                                                    return this.setState({...this.state, todos: filteredTodos})
                                                }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </td>
                                        <td>
                                            <IconButton aria-label="edit" color="primary"
                                                onClick={() => {
                                                    const toBeEdited = editTodo(this.state, id);
                                                    return this.setState({...this.state, input: toBeEdited.content, isEdited: true, editedId: id})
                                                }}>
                                                <EditIcon/>
                                            </IconButton>
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

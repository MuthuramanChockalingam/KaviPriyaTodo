import { Component } from "react";

class Todo extends Component {
    render() {
        const {todos} = this.props;

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
                                        <input type="checkBox" checked={status}></input>
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

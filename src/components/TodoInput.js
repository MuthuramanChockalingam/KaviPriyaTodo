import { Component } from "react";

class TodoInput extends Component {
    render() {
        const {input, handler} = this.props;

        return (
            <input type="text" value={input} onChange={(event) =>
                handler(event.target.value)}>
            </input>);
    };
}

export default TodoInput;

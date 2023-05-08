export const todoManager = {
    updateTodoStatus: (state, id) => {
        const {todos} = state;

        const updatedTodos = todos.map((todo) => 
            todo.id === id 
                ? ({...todo, status: !todo.status})
                : todo
        );
        
        return({todos: updatedTodos})
    },
    addTodo: (state) => {
        const {todos, input} = state;
        const size = todos.length;
        const addedTodos = [...todos, {id: size + 1, content: input, status: false}];

        return (addedTodos)
    },
    removeTodo: (state, id) => {
        const {todos} = state;
        const filteredTodos = todos.filter((todo) => todo.id!==id);

        return (filteredTodos);
    },
    editTodo: (state, id) => {
        const {todos} = state;
        const filteredTodo = todos.filter((todo) => todo.id===id)[0];

        return (filteredTodo);
    },
    updateTodo: (state) => {
        const {todos, input, editedId} = state;
        const updatedTodo = todos.map((todo) => todo.id === editedId
            ? {...todo, content: input}
            : todo
            );

        return (updatedTodo);
    }
};

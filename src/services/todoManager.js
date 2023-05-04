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
};

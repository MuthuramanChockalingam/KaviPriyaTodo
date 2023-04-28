import './App.css';
import Todo from './components/Todo';

function App() {
  const todo = {
    id: 1,
    content: "Create a react project.",
    status: false
  };

  return (
    <div className="App">
      <h1>Welcome to Todo App!</h1>
      <Todo todo={todo}/>
    </div>
  );
}

export default App;

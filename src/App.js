import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    {
      id: 1,
      content: "Create a react project.",
      status: false
    },
    { 
      id: 2,
      content: "Fix bugs in project 1",
      status: true
    },
    {
      id: 3,
      content: "Drink water",
      status: false
    },
    { 
      id: 4,
      content: "Service your bike",
      status: true
    }
  ];

  return (
    <div className="App">
      <h1>Welcome to Todo App!</h1>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

export interface ITODO {
  id: number;
  task: string;
  comleted: boolean
}

function App() {
  const [todos, setTodos] = useState<ITODO[]>([{} as ITODO])

  const addTodos = (todo: string):void=>{
    const data: ITODO ={
      // id: todos.length<1 ? 1 : todos[todos.length-1].id +1,
      id: Math.random(),
      task: todo,
      comleted: false
    };
    setTodos((prevTodos)=>[...prevTodos, data])
  }

  const completeTodo = (id: number) : void =>{
    const currentTodo: any = todos.find((todo: ITODO) => todo.id === id);
    currentTodo.comleted = true;

    const updatedTodo : ITODO[]= todos.map((todo: ITODO) : ITODO => todo.id===id ? currentTodo: todo );

    setTodos(updatedTodo);
    window.alert('Welldone!');
  };

  const deleteTodo = (id: number) : void =>{
    const updatedTodo : ITODO[]= todos.filter((todo: ITODO) : any => todo.id !== id);

    setTodos(updatedTodo);
    window.alert('Deleted Successfully!');
  };
  return (
    <div className="container">
      <div className="row flex-column">
        <h1 className="text-center">React-TypeScript ToDo</h1>
        <Form addTodos={addTodos}></Form>
        <List todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}></List>
      </div>
    </div>
  );
}

export default App;

import React, { FormEvent, useState } from "react";
// import { ITODO } from "../App";

interface IProps {
    addTodos(todo: string) : void;
    // todos: ITODO[]
}
const Form = ({addTodos}:IProps) => {
  const [todo, setTodo] = useState<string>("");
  console.log('setTodo: ', todo);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      if(!todo){
          return window.alert('Please Add a ToDo First...')
      }
      e.preventDefault();
      console.log('ToDo Added')
      addTodos(todo)
      setTodo('')
  }

  return (
    <div className="col-md-6 mx-auto my-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            type="text"
            placeholder="Add ToDo"
            className="form-control me-2"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;



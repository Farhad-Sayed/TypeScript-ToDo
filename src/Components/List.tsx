import React from 'react';
import { ITODO } from '../App';

interface IProps{
    todos: ITODO[];
    completeTodo(id: number): void;
    deleteTodo(id: number) : void;
}
const List = ({todos, completeTodo, deleteTodo}:IProps) => {
    return (
        <div className="col-md-6 mx-auto my-5">
            {
                todos.map((todo : ITODO) => (
                    <div key={todo.id} className="d-flex justify-content-start">
                        <h1 
                            className={`text-center ${todo.comleted ? 'completed': 'notCompleted'}`}
                            onClick={() => completeTodo(todo.id)}
                            >
                            {todo.task}
                        </h1>
                        {
                            todo.comleted && 
                            <button onClick={() => deleteTodo(todo.id)} type='button' className='btn btn-danger mx-auto'>Delete</button>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default List;
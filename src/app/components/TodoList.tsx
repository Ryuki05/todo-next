import React, { useEffect } from 'react';
import {to_ulClass} from './css';
import {Task} from "@/types";
import Todo from "./Todo";

interface TodoListProps{
    todos: Task[];
}

const TodoList = ({todos}: TodoListProps) => {
    return(
        <ul className={`${to_ulClass}`}>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}

        </ul>
    );
};

export default TodoList;

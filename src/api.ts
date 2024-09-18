import {Task} from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`,{ cache: "no-store",});//SSR(データの受け取り方の種類)
    const todos = res.json();

    return todos;
};

export const addTodo   = async (todo: Task): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`,{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(todo),
    });//SSR(データの受け取り方の種類)
    const newTodo = res.json();

    return newTodo;
};

export const editTodo   = async (id: string, newText: string): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({text: newText}),
    });//SSR(データの受け取り方の種類)
    const updateTodo = res.json();

    return updateTodo;
};
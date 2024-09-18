"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { btn_addClass ,input_addClass } from "./css";
import { addTodo } from "@/api";
import {v4 as uuidv4} from "uuid";

const AddTask = () => {

    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();

        await addTodo({id: uuidv4(),text: taskTitle});

        setTaskTitle("");
    };
    return (
        <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
            <input
                className={`${input_addClass}`}
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setTaskTitle(e.target.value)
                }
                value={taskTitle}
            />
            <button className={`${btn_addClass}`}>
                Add Task
            </button>
        </form>
    );
};

export default AddTask;

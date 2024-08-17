'use client'
import { ToDo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.scss";

interface ToDoProps {
    todo: ToDo;
}

export default function ToDoItem({ todo }: ToDoProps) {
    const router = useRouter();
    const [task, setTask] = useState(todo);

    const toggleToDoStatus = async (currentTodo: ToDo) => {
        await fetch('/api/todos', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: currentTodo.id, complete: !currentTodo.complete })
        }).then(response => response.json()).then(data => {
            setTask(data);
            router.refresh();
        });
    }

    return (
        <>
            <input
                type="checkbox"
                name="todo"
                checked={todo.complete || false}
                value={task.id}
                className={styles.todoCheckbox}
                onChange={(e) => toggleToDoStatus(task)}
            />
            <div className={styles.todoContent}>
                <h3 className={styles.todoTitle}>{task.name}</h3>
                <span>{task.description}</span>

                <hr />

                Assigned to: {task.assigned.first_name} {task.assigned.last_name} | Due: {new Date(task.due).toLocaleString()}
            </div>
        </>
    );
}

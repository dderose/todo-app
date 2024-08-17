// import { revalidatePath } from "next/cache";
import { ToDo, User } from "@prisma/client";
import styles from "./page.module.scss";
import ToDoItem from './todo';
import ToDoForm from './todoForm';
import { sortByStr } from '../utils/sort';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const getTodos = async () => {
    const data = await fetch('http://localhost:3000/api/todos').then(result => result.json());
}

export default async function HomePage() {
    const data = await fetch('http://localhost:3000/api/todos').then(result => result.json());
    const dataUsers = await fetch('http://localhost:3000/api/users').then(result => result.json());
    sortByStr(data, 'due', 'asc');

    return (
        <main className={styles.container}>
            <div className={styles.todosContainer}>
                <h1 style={{ borderBottom: "1px solid #000" }}>Todos</h1>

                <h2>Add Todo</h2>
                <ToDoForm users={dataUsers} />
                
                <h2>My Todos</h2>

                <ul className={styles.todoList}>
                    {data && data.map((todo: ToDo) =>
                        <li key={todo.id} className={todo.complete ? styles.todoComplete : styles.todo}><ToDoItem todo={todo} /></li>
                    )}
                </ul>
            </div>
        </main>
    );
}

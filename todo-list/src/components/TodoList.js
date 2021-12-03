import Todo from "./Todo";
import { useState } from "react";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState(['take out the trash', 'eat', 'sleep'])
    const [completed, setCompleted] = useState(['shower', 'brush teeth'])

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, newTodo])
        setNewTodo("")
    }

    const changeHandler = (e) => {
        setNewTodo(e.target.value)
    }
    const switchToComplete = (e) => {
        console.log(e.target.innerHTML)
        setTodos(todos.filter(nonCompleted => nonCompleted != e.target.innerHTML))
        setCompleted([...completed, e.target.innerHTML])
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" name="newTodo" value={newTodo} onChange={(e) => changeHandler(e)} placeholder='New Todo'></input>
                <input type='submit'></input>
            </form>
            <h3>This is a Todo List</h3>
            <h4>Todo</h4>
            {todos.map((todo, index) => { return <a onClick={(e) => switchToComplete(e)} key={index} value={todo} > <Todo name={todo} />  </a> })}
            <h4>Completed</h4>
            {completed.map((todo, index) => { return <Todo name={todo} complete={true} key={index} /> })}
        </>
    );
};

export default TodoList;

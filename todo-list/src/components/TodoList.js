import Todo from "./Todo";
import { useState } from "react";
import './style/todoListStyles.css'

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
        setTodos(todos.filter(nonCompleted => nonCompleted !== e.target.innerHTML))
        setCompleted([...completed, e.target.innerHTML])
    }

    const deleteComplete = (e) => {
        setCompleted(completed.filter(complete => complete !== e.target.innerHTML))
    }

    return (
        <div id='component-todo-list'>
            <div id='not-completed-div'>
            <form onSubmit={submitHandler}>
                <label for={newTodo}>I need to...</label>
                <input type="text" name="newTodo" value={newTodo} onChange={(e) => changeHandler(e)} placeholder='New Todo' id='text--input'></input>
                <input type='submit' id='sub-button'></input>
                {/* <input type='submit' id='sub-button'></input> */}
            </form>
            <div className='todo-list'>
            {todos.map((todo, index) => { return <span key={index} className='todo-item'><span onClick={(e) => switchToComplete(e)} value={todo} > <Todo name={todo} /><br /> </span> </span> })}
            </div>
            </div>
            <div id='completed-div'>
            <h4>Completed</h4>
            <div className='todo-list'>
            {completed.map((todo, index) => { return <span key={index} className='todo-item'> <span onClick={(e) => deleteComplete(e)}> <Todo name={todo} complete={true} />  </span> <br /> </span>})}
            </div>
            </div>
        </div>
    );
};

export default TodoList;

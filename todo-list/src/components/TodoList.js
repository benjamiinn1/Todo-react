import Todo from "./Todo";


const TodoList = () => {
  return (
    <>
      <h3>This is a Todo List</h3>
      <h4>Todo</h4>
      <Todo name='TAKE OUT THE TRASH' complete={false}/>
    </>
  );
};

export default TodoList;

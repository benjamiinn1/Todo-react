const Todo = ({ name, complete }) => {

    const completeStyle = {
        color: 'green'
    }

    const notCompleteStyle = {
        color: 'red'
    }

    return (
        <div>
            <h5 style={complete === true ? completeStyle : notCompleteStyle}>{name}</h5>
        </div>
    );
};

export default Todo;

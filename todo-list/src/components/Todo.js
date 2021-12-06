const Todo = ({ name, complete }) => {

    const completeStyle = {
        color: '#118AB2',
        fontSize: '1.5rem'
    }

    const notCompleteStyle = {
        color: '#FFD166',
        fontSize: '1.5rem'
    }

    return (
        <>
            <span style={complete === true ? completeStyle : notCompleteStyle}>{name}</span>
        </>
    );
};

export default Todo;

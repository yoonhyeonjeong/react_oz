import React from "react";

const TodoInput = props => {
    const {addTodo, inputRef} = props;
    return (
        <>
            <input
                type="text"
                ref={inputRef}
            />
            <button onClick={addTodo}>추가</button>
        </>
    );
};

export default TodoInput;

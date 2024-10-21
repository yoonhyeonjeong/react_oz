import React from "react";

const TodoList = props => {
    const {todo, removeTodo} = props;
    return (
        <>
            <ul>
                {todo.map(item => (
                    <li key={item.id}>
                        {item.content}
                        <button
                            onClick={() => {
                                removeTodo(item.id);
                            }}
                        >
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodoList;

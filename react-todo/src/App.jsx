import {useState} from "react";

import "./App.css";

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 0,
            todo: "밥먹기",
            todochecked: false,
            priority: "medium",
        },
        {
            id: 1,
            todo: "잠자기",
            todochecked: false,
            priority: "high",
        },
    ]);

    return (
        <>
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <hr />
            <TodoInput
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </>
    );
}
function TodoInput({todoList, setTodoList}) {
    const [inputValue, setInputValue] = useState("");
    const addTodo = () => {
        const newTodo = {id: Number(new Date()), todo: inputValue, todochecked: false};
        setTodoList([...todoList, newTodo]);
        setInputValue("");
    };
    // 체크완료여부
    const chkTodo = () => {
        setTodoList(el => el.filter(el => el.todochecked === true));
    };
    return (
        <>
            <input
                value={inputValue}
                onChange={e => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    addTodo();
                }}
            >
                추가하기
            </button>
            <button
                onClick={() => {
                    chkTodo();
                }}
            >
                완료목록만보기
            </button>
        </>
    );
}

function TodoList({todoList, setTodoList, todochecked}) {
    return (
        <ul>
            {todoList.map(item => (
                <>
                    <Todo
                        item={item}
                        key={item.id}
                        todoList={todoList}
                        setTodoList={setTodoList}
                        todochecked={todochecked}
                    />
                </>
            ))}
            {/* 키속성은 맵안에서 정의해야함 */}
        </ul>
    );
}

function Todo({item, todoList, setTodoList}) {
    const removeItem = id => {
        // const todoArray = [...todoList].filter(todo => todo.id !== id);
        // setTodoList(todoArray);
        setTodoList(prev => prev.filter(el => el.id !== id));
    };
    // 수정 인풋,함수
    const [inputValue, setInputValue] = useState("");
    const editItem = id => {
        if (!inputValue) {
            alert("값을입력해주세요");
            return;
        }
        setTodoList(prev => prev.map(el => (el.id === id ? {...el, todo: inputValue, todochecked: false} : el)));
        console.log(todoList);
        setInputValue("");
    };
    // 체크박스
    const handleCheckboxChange = () => {
        setTodoList(prev => prev.map(el => (el.id === item.id ? {...el, todochecked: !el.todochecked} : el)));
        console.log(todoList);
    };
    // 우선순위
    const handleSelectChange = e => {
        const selectedPriority = e.target.value;
        setTodoList(prev => prev.map(el => (el.id === item.id ? {...el, priority: selectedPriority} : el)));
        console.log(todoList);
    };

    return (
        <li>
            <input
                type="checkbox"
                id={item.id}
                onChange={handleCheckboxChange}
                checked={item.todochecked}
            />
            <label htmlFor={item.id}>{item.todo}</label>{" "}
            <select
                value={item.priority}
                onChange={e => {
                    handleSelectChange(e);
                }}
            >
                <option value="low">낮음</option>
                <option value="medium">중간</option>
                <option value="high">높음</option>
            </select>
            <span>{item.priority}</span>
            <input
                value={inputValue}
                onChange={e => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    editItem(item.id);
                }}
            >
                수정
            </button>
            <span></span>
            <button
                onClick={() => {
                    removeItem(item.id);
                }}
            >
                삭제
            </button>
        </li>
    );
}

export default App;

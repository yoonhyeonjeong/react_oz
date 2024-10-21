import {useState, useRef} from "react";
import "./App.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import Clock from "./component/Clock";
import StopWatch from "./component/StopWatch";
import Timer from "./component/Timer";
import useFetch from "./customhook/useFetch";

function App() {
    const [todo, setTodo] = useState([
        {
            id: Number(new Date()),
            content: "안녕하세요",
        },
    ]);
    const inputRef = useRef(null);
    // todo 추가
    const addTodo = () => {
        const newTodo = {
            content: inputRef.current.value,
        };
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify(newTodo),
        });
        setTodo(prev => [...prev, newTodo]);
        // setTodo([...todo, newTodo]);
        // setTodo([
        //     ...todo,
        //     {
        //         id: Number(new Date()),
        //         content: inputRef.current.value,
        //     },
        // ]);
        inputRef.current.value = ""; // 초기화
    };
    // todo 삭제
    const removeTodo = id => {
        setTodo(prev => prev.filter(item => item.id !== id));
    };
    // api 불러오기
    const adviceUrl = "https://korean-advice-open-api.vercel.app/api/advice";
    const {data, loading, fetchData} = useFetch(adviceUrl);
    console.log(data);
    return (
        <>
            {/* <Clock />
            <StopWatch />
            <Timer /> */}
            <button
                onClick={() => {
                    fetchData(adviceUrl);
                }}
            >
                명언 불러오기
            </button>
            {loading ? (
                <p>로딩중</p>
            ) : (
                data && (
                    <div>
                        <p>{data.author}</p>
                        <p>{data.authorProfile}</p>
                        <p>
                            <strong>{data.message}</strong>
                        </p>
                    </div>
                )
            )}
            <TodoInput
                inputRef={inputRef}
                addTodo={addTodo}
            />
            <TodoList
                todo={todo}
                removeTodo={removeTodo}
            />
        </>
    );
}

export default App;

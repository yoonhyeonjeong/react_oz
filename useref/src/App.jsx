import "./App.css";
import {useState, useRef, useEffect} from "react";

function App() {
    const {count, increment, decrement} = useCounter(0, 5);
    // 고양이 사진 오픈 API 주소
    const catUrl = "https://api.thecatapi.com/v1/images/search";
    // const [fetchUrl, setFetchUrl] = useState(catUrl); // 상태로 url관리
    const {loading, data, fetchData} = useFetch(catUrl);
    return (
        <>
            <div>counter: {count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button
                onClick={() => {
                    fetchData(catUrl);
                }}
            >
                고양이 데이터 가져오기
            </button>
            {loading ? <p>loading중</p> : data && <img src={data[0].url}></img>}
        </>
    );
}
const useFetch = url => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = () => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    };
    useEffect(() => {
        fetchData();
    }, [url]);
    return {loading, data, fetchData};
};

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const numberRef = useRef(null);
    return (
        <>
            <div>counter: {counter}</div>
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
            <button onClick={() => setCounter(prev => prev - 1)}>-</button>
            <button onClick={() => (numberRef.current = counter)}>keep value</button>
            <button onClick={() => console.log(numberRef.current)}>show value</button>
        </>
    );
};
const UseRefInput = () => {
    const inputRef = useRef(null);
    const getInputValue = () => {
        console.log(inputRef.current.value);
    };
    const focusInput = () => {
        inputRef.current.focus();
    };
    return (
        <>
            <input
                ref={inputRef}
                type="text"
                placeholder="sdf"
            />
            <button onClick={getInputValue}>input값 가져오기</button>
            <button onClick={focusInput}>포커스 인풋</button>
        </>
    );
};

const ControlledInput = () => {
    const [inputValue, setInputValue] = useState("");
    console.log("Controlledinput");
    return (
        <input
            value={inputValue}
            onChange={e => {
                setInputValue(e.target.value);
            }}
        />
    );
};
// custom Hook
const useCounter = (initialValue = 0, step = 1) => {
    const [count, setCount] = useState(initialValue, step);
    const increment = () => setCount(prev => prev + step);
    const decrement = () => setCount(prev => prev - step);

    return {count, increment, decrement};
};
export default App;

import "./App.css";
import {useState, useRef} from "react";

function App() {
    return (
        <>
            <ControlledInput />
            <UseRefInput />
            <Counter />
        </>
    );
}
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

export default App;

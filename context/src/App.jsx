import "./App.css";
import {useCounter} from "./\bcontext/counterContext";
function App() {
    const [counter, setCounter] = useCounter();
    return (
        <>
            <p>Counter : {counter}</p>
            <button
                onClick={() => {
                    setCounter(prev => prev + 1);
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    setCounter(prev => prev - 1);
                }}
            >
                -
            </button>
        </>
    );
}

export default App;

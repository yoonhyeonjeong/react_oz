import {useCallback, useEffect, useMemo, useState} from "react";
import {memo} from "react";
import "./App.css";

function App() {
    const [number, setNumber] = useState(0);
    const [rerender, setRerender] = useState(false);

    const plus1 = useCallback(
        number => {
            console.log("plus 1 실행됨");
            return number + 1;
        },
        [rerender]
    );

    // useMemo 사용해서 number 값이 변경될때만 실행되게함
    const numberPlus1 = useMemo(() => {
        return plus1(number);
    }, [rerender]);

    // const numberPlus1 = plus1(number); //함수호출해서 계속 리렌더링됨

    useEffect(() => {
        console.log("plus1이 실행됨");
    }, [plus1]);
    return (
        <>
            <NumberDisplay number={number} />
            <div>numberPlus1: {numberPlus1}</div>
            <button
                onClick={() => {
                    setNumber(number + 1);
                }}
            >
                number +1
            </button>
            <button
                onClick={() => {
                    setRerender(!rerender);
                }}
            >
                Rerender
            </button>
        </>
    );
}

// props 값이 바뀔때만 실행댐
const NumberDisplay = memo(({number}) => {
    console.log("diplay 렌더링");
    return <div>number : {number}</div>;
});

export default App;

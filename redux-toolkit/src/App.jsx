import "./App.css";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment(state, action) {
            return state + 1;
        },
        decrement(state, action) {
            return state - 1;
        },
    },
});
const slowIncrementThunk = createAsyncThunk("counter/slowIncrement", (value, {dispatch}) => {
    setTimeout(() => {
        dispatch(counterSlice.actions.increment());
    }, 1000);
});

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

function App() {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <div>Counter : {counter}</div>
            <button
                onClick={() => {
                    dispatch(slowIncrementThunk());
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch(counterSlice.actions.decrement());
                }}
            >
                -
            </button>
        </>
    );
}

export default App;

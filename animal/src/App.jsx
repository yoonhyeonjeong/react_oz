import "./App.css";
import {useState} from "react";
import {Link, Routes, Route, useNavigate, useLocation, useParams, useSearchParams} from "react-router-dom";
import Main from "./page/Main";
import Search from "./page/Search";
import Detail from "./page/Detail";
function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputValue, setInputValue] = useState("");
    return (
        <>
            <header>
                <h1>동물 좋아</h1>
                <input
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.target.value);
                    }}
                />
                <button onClick={() => navigate(`/search?animal=${inputValue}`)}>검색</button>
            </header>
            <Routes>
                <Route
                    path="/"
                    element={<Main />}
                ></Route>
                <Route
                    path="/detail/:id"
                    element={<Detail />}
                ></Route>
                <Route
                    path="/search"
                    element={<Search />}
                ></Route>
            </Routes>
        </>
    );
}

export default App;

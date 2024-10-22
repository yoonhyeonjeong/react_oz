import {useState} from "react";
import "./App.scss";

function App() {
    return (
        <>
            <div className="test">테스트용 div입니다 </div>
            <h2 className="test">scss 변수연습</h2>
            <ul>
                <li>안녕하세요</li>
                <li>hi</li>
                <li>hi</li>
                <li>hi</li>
            </ul>
            <section>
                <article>scss문법에는</article>
                <article>변수사용과</article>
                <article>중첩문법과</article>
                <article>믹스인 등이있습니다</article>
            </section>
        </>
    );
}

export default App;

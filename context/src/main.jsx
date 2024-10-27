import {createRoot} from "react-dom/client";
import "./index.css";
import {CounterProvider} from "./\bcontext/counterContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <CounterProvider>
        <App />
    </CounterProvider>
);

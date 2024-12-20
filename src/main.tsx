import ReactDOM from 'react-dom/client';
import App from "./app";

window.onload = () => {
    const div = document.getElementById('root');
    if (div) {
        const root = ReactDOM.createRoot(div);
        root.render(
            <App/>
        );
    } else {
        console.error("Element with id 'app' not found");
    }
};

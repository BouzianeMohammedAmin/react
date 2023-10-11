import { createRoot } from "react-dom";
import User from "./User";

const App = () => {
        <h1>Hello </h1>
        ,
        <User name="amine"  email="amine@gmail.com" age="25" ></User>

};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App/>);
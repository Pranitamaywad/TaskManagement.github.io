import { Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Home from "./Home";


const App = () =>{
    return(
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="Home" element={<Home/>} />
        </Routes> 
    )
}
export default App;
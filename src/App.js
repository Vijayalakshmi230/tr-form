import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css';
import Protofile from "./Components/Protofile/Protofile";
import Calculator from './Components/Calculator/Calculator';
import Cartoon from './Components/Cartoon/Cartoon';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/'>Protofile</Link>
        </li>
        <li>
          <Link to="/calsi">Calculator</Link>
        </li>
        <li>
          <Link to="/cartoon">Cartoon</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path='/'element={<Protofile/>}></Route>
        <Route exact path='/calsi'element={<Calculator/>}></Route>
        <Route exact path='/cartoon'element={<Cartoon/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;

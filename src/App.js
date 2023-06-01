import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;

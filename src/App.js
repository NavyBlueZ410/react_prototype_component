import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Register from './page/Register';
import Datatable from './page/Datatable';
import LoginApi from './page/LoginApi';
import HomePageApi from './page/HomePageApi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/datatable" element={<Datatable/>}></Route>
          <Route path="/loginapi" element={<LoginApi/>}></Route>
          <Route path="/homepageapi" element={<HomePageApi/>}></Route>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;

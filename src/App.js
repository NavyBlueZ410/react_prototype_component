import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './page/Login';
import Register from './page/Register';
import Datatable from './page/Datatable';
import LoginApi from './page/LoginApi';
import HomePageApi from './page/HomePageApi';
import UserList from './page/UserList';
import MenuLink from './page/MenuLink';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuLink/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/datatable" element={<Datatable/>}></Route>
          <Route path="/loginapi" element={<LoginApi/>}></Route>
          <Route path="/homepageapi" element={<HomePageApi/>}></Route>
          <Route path="/userlist" element={<UserList/>}></Route>
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;

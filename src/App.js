
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import NavBar from './components/NavBar';
import ProductItems from './components/ProductItems';
import ShopingCart from './components/ShopingCart';
import WishMessage from './components/WishMessage';
import UserForm from './components/UserForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserAuth from './components/UserAuth';
import ProductCart from './components/ProductCart';
import ParentComponent from './components/Basics/ParentComponent';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path='/' element={<Navigate to="/productItems" />} />
            <Route path="/productItems" element={<ProductItems />} />
            <Route path="/shopingcart" element={<ShopingCart />} />
            <Route path="/wish" element={<WishMessage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user" element={<UserForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/userauth" element={<UserAuth />} />
            <Route path="/productcart" element={<ProductCart />} />
            <Route path="/parentcomponent" element={<ParentComponent />} />

          </Route>
        </Routes>




      </BrowserRouter>

    </>
  );
}

export default App;

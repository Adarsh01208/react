
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


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route>
            <Route path='/' element={<Navigate to="/productsItems" />} />
            <Route path="/productsItems" element={<ProductItems />} />
            <Route path="/cart" element={<ShopingCart />} />
            <Route path="/wish" element={<WishMessage />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/registerform" element={<RegisterForm />} />
            <Route path="/userauth" element={<UserAuth />} />
            <Route path="/productcart" element={<ProductCart />} />
          </Route>
        </Routes>




      </BrowserRouter>

    </>
  );
}

export default App;

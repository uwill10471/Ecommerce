import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Carts';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import ViewDetails from './components/ViewProduct';
import Notification from './components/Notification';
import Register from './components/Register';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/product-view" element={<ViewDetails/>}/>
        <Route path="/notification" element={<Notification/>}/>
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;

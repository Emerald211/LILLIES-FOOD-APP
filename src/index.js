import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./component/welcome";
import Login from "./component/login";
import Register from "./component/register";
import Dashboard from "./component/dashboard";
import Protectroute from "./component/protect";
import Addtocart from "./component/addtocart";
import Cart from "./component/cart";
import Orders from "./component/orders";
import Profile from "./component/profile";
import Wrongpath from "./component/wrongpath";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/welcome" element={<Welcome />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>

        <Route element={<Protectroute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="product/:id" element={<Addtocart />}>
        
              </Route>

            <Route path="cart" element={<Cart />}>
              
              
            </Route>
            <Route path="yourorders" element={<Orders />} />
            <Route path="yourprofile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="*" element={<Wrongpath />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

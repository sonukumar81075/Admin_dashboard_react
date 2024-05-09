import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Customers from "./components/Faq";
import Transaction from "./components/Transaction";
import Messages from "./components/Messages";
import './index.css';
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import HelpSupport from "./components/HelpSupport";
import Faq from "./components/Faq";
 

const App = () => {
  return (
  <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="faq" element={<Faq />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
          <Route path="helpsupport" element={<HelpSupport />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

 

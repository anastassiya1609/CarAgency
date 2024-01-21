import "./App.css";
import * as React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Pages/Home/Page.js";
import Auth from "./components/Pages/Auth/Auth.js";
import Reg from "./components/Pages/Auth/Reg.js";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/reg" element={<Reg />} />
        </Routes>
       </Router>
    </React.Fragment>
  );
}

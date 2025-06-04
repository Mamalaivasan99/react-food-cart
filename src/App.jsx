import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { ViewCart } from "./components/ViewCart";
import { createContext, useState } from "react";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Router basename="/react-food-cart">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<ViewCart />} />
          </Routes>
        </div>
      </Router>
    </cartContext.Provider>
  );
}

export default App;

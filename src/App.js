import ReactDOM from "react-dom/client";
import {React, useState, useEffect} from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Characters from "./Components/Characters";
import Favorites from ".//Components/Favorites";
import NoPage from "./Components/NoPage";
import Login from "./Components/Login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  



  if(!isAuthenticated) return <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Characters" element={<Characters />} />
          <Route path="Favorites" element={<Favorites />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

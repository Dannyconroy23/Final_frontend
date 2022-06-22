import ReactDOM from "react-dom/client";
import {React, useState, useEffect} from "react"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Characters from "./Components/Characters";
import Favorites from ".//Components/Favorites";
import NoPage from "./Components/NoPage";
import LoginSignup from "./Components/LoginSignup"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/authorized_user')
    .then(r => {
      if(r.ok){
        r.json()
        .then(user => {
          setIsAuthenticated(true)
          setUser(user)
        })
        
      }
    })
  }, []);


  if(!isAuthenticated) return <LoginSignup setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setUser={setUser} setIsAuthenticated={setIsAuthenticated} />}>
          <Route path="Home" element={<Home />} />
          <Route path="Characters" element={<Characters user={user} />} />
          <Route path="Favorites" element={<Favorites  user={user} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

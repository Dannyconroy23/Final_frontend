import {React, useState} from 'react'

function Login({setUser, setIsAuthenticated}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
        e.preventDefault();
        fetch('/login',{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ username: username, password: password }),
        })
        .then(r => {
          if(r.ok){
            r.json()
            .then(user => {
              setUser(user)
              setIsAuthenticated(true)
            })
          } 
        })
      }

    
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login;

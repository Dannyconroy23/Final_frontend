import {React, useState} from 'react';



function Signup({setUser, setIsAuthenticated}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/users',{
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
            <h1>Create User</h1>
            <label> Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          </label>
          <label>Password:
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      );
}
export default Signup;
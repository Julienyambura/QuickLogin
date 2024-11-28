import React from "react";
import "../src/App.css";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {

    e.preventDefault();
    
    Axios.post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
      }).then(response => {
          if(response.data.status) {
              navigate('/login')
          }
      }).catch(err => {
          console.log(err)
      })
    };
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="Username">Username</label>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
      <h1>Sign Up</h1>
    </div>
  );
};

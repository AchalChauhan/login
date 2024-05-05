import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username === "user" && formData.password === "password") {
      setIsLogedIn(true);
      setMessage(`Welcome, ${formData.username}!`);
    } else {
      setIsLogedIn(false);
      setMessage("Invalid username or password");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      {isLogedIn !== null && isLogedIn ? (
        <p>{message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {isLogedIn != null && isLogedIn == false ? <p>{message}</p> : null}
    </div>
  );
}

export default App;

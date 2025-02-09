import React, { useState } from 'react';
import './Login.css'; // Assuming you have a separate CSS file for login styles
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy credentials (for demonstration purposes)
  const validEmail = 'user@gmail.com';
  const validPassword = 'Pass@123';

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate login
    if (email === validEmail && password === validPassword) {
      setError('');
      alert('Login successful!');
      navigate('/home');

      // Redirect or take other action on success
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
        <h2>Login to YouMatter</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;

import { useState } from "react";

function Login({ onBack }) {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="login">
      <h1>Login</h1>

      <input type="text" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />

      <button onClick={() => setShowSuccess(true)}>
        Login
      </button>

      <button onClick={onBack}>Back</button>

      {showSuccess && (
        <div className="success-message">
          Login Successful!
        </div>
      )}
    </div>
  );
}

export default Login;
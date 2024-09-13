import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaText, setCaptchaText] = useState('MzAWn');

  const handleLogin = (e) => {
    e.preventDefault();
    if (captcha === captchaText) {
      alert('Login successful');
    } else {
      alert('Captcha is incorrect');
    }
  };

  const refreshCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let newCaptcha = '';
    for (let i = 0; i < 5; i++) {
      newCaptcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(newCaptcha);
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: '20px' }}>
      <h2>Login To PMSSS</h2>
      <div style={{ marginBottom: '15px', marginTop:"25px"}}>
        <label>Mobile Number or Email</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Mobile No. or Email "
          required
          style={{ display: 'block', width: '100%', padding: '10px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
          style={{ display: 'block', width: '100%', padding: '10px', marginTop: '5px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Enter Captcha</label>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', paddingRight: '10px' }}>{captchaText}</div>
          <button
            type="button"
            onClick={refreshCaptcha}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <img
              src="https://img.icons8.com/material-outlined/24/000000/refresh.png"
              alt="Refresh"
            />
          </button>
        </div>
        <input
          type="text"
          value={captcha}
          onChange={(e) => setCaptcha(e.target.value)}
          placeholder="Enter captcha text"
          required
          style={{ display: 'block', width: '100%', padding: '10px', marginTop: '5px' }}
        />
      </div>

      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;

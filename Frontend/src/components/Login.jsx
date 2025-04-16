import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setmessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json(); // <== This reads the JSON body
    console.log('Response data:', data);

    if (res.ok) {
      setmessage(data.message);
      localStorage.setItem('token', data.token); // or save it in cookies
      navigate('/');
    } else {
      setmessage(data.error || 'Login failed');
    }
  } catch (err) {
    console.error('Login error:', err);
    setmessage('Something went wrong');
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center">
      <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-lg w-full max-w-md p-8 border border-white/20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white drop-shadow-lg">
            Welcome Back 👋
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Please enter your credentials to login.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1">Username</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              name="username"
              value={form.username}
              placeholder="john_doe"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              name="password"
              type="password"
              value={form.password}
              placeholder="••••••••"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow hover:scale-[1.02] hover:shadow-xl transition-all"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-xs text-gray-300 text-center">
          Don’t have an account? <a href="#" className="underline">Sign up</a>
        </p>
       

      </div>
    </div>
  );
};

export default Login;

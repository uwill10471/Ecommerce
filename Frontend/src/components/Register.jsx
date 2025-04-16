import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || 'Registration successful');
        setTimeout(() => navigate('/login'), 1500); // Redirect to login
      } else {
        setMessage(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setMessage('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center">
      <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-lg w-full max-w-md p-8 border border-white/20">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white drop-shadow-lg">
            Create an Account ✨
          </h2>
          <p className="text-sm text-gray-300 mt-2">
            Please fill in your details to register.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-white mb-1">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="johndoe"
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow hover:scale-[1.02] hover:shadow-xl transition-all"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-xs text-gray-300 text-center">
          Already have an account?{' '}
          <a href="/login" className="underline">
            Sign in
          </a>
        </p>
        {message && (
          <p className="mt-4 text-sm text-center text-white bg-black/20 p-2 rounded-lg shadow-inner">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Register;

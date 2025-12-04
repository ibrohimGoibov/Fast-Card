import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE = 'http://37.27.29.18:8002/Account';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
      
        const res = await axios.post(`${API_BASE}/login`, {
          userName: formData.userName,
          password: formData.password,
        });

      
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));

        alert('Успешный вход!');
        navigate('/');
      } else {
      
        if (formData.password !== formData.confirmPassword) {
          setError('Пароли не совпадают');
          setLoading(false);
          return;
        }

        if (!formData.email || !formData.userName) {
          setError('Заполните все поля');
          setLoading(false);
          return;
        }

        const res = await axios.post(`${API_BASE}/register`, {
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        });
        setIsLogin(true);
        setFormData({ ...formData, email: '', confirmPassword: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          {isLogin ? 'Log in to Exclusive' : 'Create an account'}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {isLogin ? 'Enter your details below' : 'Enter your details to register'}
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 font-medium transition ${isLogin ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
          >
            Log in
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 font-medium transition ${!isLogin ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
          >
            Sign up
          </button>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition"
            />
          )}

          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-red-500 transition"
            />
          )}

          {isLogin && (
            <div className="text-right">
              <Link to="/forgot-password" className="text-red-500 hover:underline text-sm">
                Forget Password?
              </Link>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 text-white py-4 rounded font-medium hover:bg-red-600 transition disabled:bg-red-300"
          >
            {loading ? 'Loading...' : isLogin ? 'Log In' : 'Create Account'}
          </button>
        </form>

        {isLogin && (
          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{' '}
            <button onClick={() => setIsLogin(false)} className="text-red-500 font-medium hover:underline">
              Sign up
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
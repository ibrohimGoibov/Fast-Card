import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { message } from 'antd';
const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      userName: form.username.value.trim(),
      phoneNumber: form.phone.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
    };

    messageApi.open({
      key: 'reg',
      type: 'loading',
      content: 'Регистрируем...',
      duration: 0
    });

    try {
      await axios.post(
        "http://37.27.29.18:8002/Account/register",
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      messageApi.open({
        key: 'reg',
        type: 'success',
        content: 'Аккаунт успешно создан!',
        duration: 3,
      });

      form.reset();

    } catch (error) {
      messageApi.open({
        key: 'reg',
        type: 'error',
        content: 'Ошибка регистрации',
        duration: 5,
      });
    }
  };

  return (
    <>
      {contextHolder}

      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <h1 className="text-center text-4xl font-bold mb-2">Create an account</h1>
          <p className="text-center text-gray-600 mb-8">Enter your details below</p>

          <form onSubmit={handleRegister} className="space-y-4">
            <input name="username" type="text" placeholder="Username" required className="w-full h-12 px-4 border-2 rounded-md focus:border-[#DB4444] outline-none" />
            <input name="phone" type="tel" placeholder="Phone number"required className="w-full h-12 px-4 border-2 rounded-md focus:border-[#DB4444] outline-none" />
            <input name="email" type="email" placeholder="Email" required className="w-full h-12 px-4 border-2 rounded-md focus:border-[#DB4444] outline-none" />
            <input name="password" type="password" placeholder="Password" required className="w-full h-12 px-4 border-2 rounded-md focus:border-[#DB4444] outline-none" />
            <input name="confirmPassword" type="password" placeholder="Confirm password" required className="w-full h-12 px-[20px] border-2 rounded-md focus:border-[#DB4444] outline-none" />

            <button
              type="submit"
              className="w-full h-full h-12 bg-[#DB4444] text-white rounded-md font-medium hover:bg-[#c0392b] px-[20px] py-[10px] transition"
            >
              Create Account
            </button>
          </form>
          <div className="mt-6 text-center">
            Already have an account? <Link to="/login" className="text-[#DB4444] font-medium hover:underline">Log in</Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Register;
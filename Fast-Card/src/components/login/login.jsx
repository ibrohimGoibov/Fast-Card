import React, { useState } from 'react'
const URL = "http://37.27.29.18:8002/Account/register";
const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        userName,
        password
      });
      console.log(res.data);
      setUserName('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <div className='mt-[100px]'>
                <div className="text-center flex justify-center flex-col m-auto ">
                <h1 className='text-[36px]'>Log in to Exclusive</h1>
                <p className='mt-[10px]'>Enter your details below</p>
        <form onSubmit={handleAdd} className='w-[400px] m-auto'>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='mt-[20px] w-full h-[46px] px-[20px] border border-gray-400 rounded-[4px]'
            placeholder='Email or phone number'/>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-[20px] w-full h-[46px] px-[20px] border border-gray-400 rounded-[4px]'
            placeholder='Password'/>

          <button type="button" className='mt-[20px] w-full h-[46px] text-[#DB4444] border border-[#DB4444] rounded-[4px]'>
            Forget Password?
          </button>

          <button type="submit" className='mt-[20px] w-full h-[46px] bg-[#DB4444] text-white rounded-[4px] font-medium'>
            Create Account
          </button>
        </form>
                </div>
            </div>
    </div>
  )
}

export default Login
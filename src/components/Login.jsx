import React, { useState, useEffect } from 'react'
import Header from './Header'
import supabase from '../supabase.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [mess, setMess] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        });

        if(error) {
            console.error(error);
            setMess(error.msg);
        } else if(data) {
            console.log(data);
            setMess('User logged in successfully! Welcome!!');
            navigate('/');
        }
    }

  return (
    <div class="">
        <Header />

        <div className='text-center text-white'>{mess}</div>

        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div class="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                            <input type="email" name="email" id="email" class="bg-transparent border sm:text-sm rounded-lg block w-full p-2.5" placeholder="name@company.com" required="" value={user.email}
                              onChange={handleInputChange}/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-transparent border sm:text-sm rounded-lg block w-full p-2.5" required="" value={user.password}
                              onChange={handleInputChange}/>
                        </div>
                        <button onClick={handleLogin} type="submit" class="w-full text-black bg-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        <p class="text-sm font-light">
                            Don’t have an account yet? <a href="/signup" class="font-medium hover:underline">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
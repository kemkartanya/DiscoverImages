import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import catImg from '../assets/images/cat.jpeg'

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo || {});
    }, [navigate]);

    function handleLogout() {
        localStorage.removeItem('userInfo');
        navigate('/'); // Navigate to the desired page after logout
    }

    function handleProfile() {
        setIsDropdownVisible((prev) => !prev);
    }

    return (
        <div className='flex justify-between m-10 font-bold items-center backdrop-blur-xl p-3 relative'>
            <Link to={`/`}>
                <div className='cursor-pointer'>Home</div>
            </Link>
            {user.id ? (
                <div className='relative'>
                    <img src={catImg} className='rounded-3xl w-8 cursor-pointer' onClick={handleProfile} />
                    {/* Dropdown menu */}
                    {isDropdownVisible && (
                        <div className="absolute right-0 mt-2 bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow" id="dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-black">Hello G!!</span>
                                <span className="block text-sm font-medium text-gray-900 truncate">{user.email}</span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                <li>
                                    <a href="/history" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">History</a>
                                </li>
                                <li>
                                    <a href="/" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2" onClick={handleLogout}>Sign out</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <div className='flex items-center'>
                    <Link to={`/login`}>
                        <div className='mx-5 cursor-pointer'>Login</div>
                    </Link>
                    <Link to={`/signup`}>
                        <div className='border-solid border-2 rounded-md p-1 cursor-pointer'>Create Account</div>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Header;
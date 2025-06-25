import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast}  from 'react-toastify';
const API_BASE_URL = import.meta.env.VITE_API_URL;


const Account = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
        const res = await axios.post(`${API_BASE_URL}/api/users/login`, {email,password });

    localStorage.setItem('user', JSON.stringify(res.data));
    window.dispatchEvent(new Event('userUpdate'));
    window.location.href = '/';
      } catch (error) {
         console.error('Login Error:', error.response?.data?.message);
            toast.error(error.response?.data?.message || 'User not registerd');
                }
                 };
                                              
        const handleSignup = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(`${API_BASE_URL}/api/users/register`, formData);

            if (response && response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                window.dispatchEvent(new Event('userUpdate'));
                window.location.href = '/';
            } else {
                toast.error('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert(error.response?.data?.message || '.');
        }
    }; return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-10"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')` }}
        >
            <div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 max-w-md w-full">
             
                <div className="flex justify-center mb-6">
                    <button
                        className={`px-4 py-2 text-lg font-semibold ${isLogin ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`px-4 py-2 text-lg font-semibold ${!isLogin ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-500'}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {isLogin ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="w-full bg-orange-600 text-white py-2 rounded-lg"
                        >
                            Login
                        </motion.button>

                        <p
                        className="text-sm text-blue-500 mt-2 cursor-pointer"
                         onClick={() => navigate('/forgot-password')}
                              >
                                 Forgot Password?
                                           </p>

                    </form>
                ) : (
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            className="w-full bg-orange-600 text-white py-2 rounded-lg"
                        >
                            Signup
                        </motion.button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Account;

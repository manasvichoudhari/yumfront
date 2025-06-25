import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}/api/users/forgot-password`, { email });
            alert(`Reset Link: ${data.resetUrl}`);
        } catch (error) {
              console.error('API Error:', error.response?.data?.message || error.message);
        alert('Error: ' + (error.response?.data?.message || 'Something went wrong'));
    
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <input type="email" placeholder="Enter email" className="border p-2 w-full mb-4"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;
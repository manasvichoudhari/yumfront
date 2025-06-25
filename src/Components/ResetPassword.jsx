import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_BASE_URL}/api/users/reset-password/${token}`, { password });
            alert('Password reset successfully!');
        } catch (error) {
            alert('Error: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
            <input type="password" placeholder="Enter new password" className="border p-2 w-full mb-4"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Reset Password</button>
        </form>
    );
};

export default ResetPassword;

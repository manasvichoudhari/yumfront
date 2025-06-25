import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

const API_BASE_URL = import.meta.env.VITE_API_URL;

const UserProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users/profile/${id}`);
        setUser(res.data);
        setFormData(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        toast.error(error?.response?.data?.message || 'Failed to load user');
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`${API_BASE_URL}/api/users/profile/${id}`, formData);
      toast.success('Profile updated successfully!');
      localStorage.setItem('user', JSON.stringify(res.data));
      window.dispatchEvent(new Event('userUpdate'));
      setUser(res.data);
      setEditMode(false);
    } catch (error) {
      console.error('Update Error:', error);
      toast.error(error?.response?.data?.message || 'Update failed!');
    }
  };

  const handleImageUpload = async (e) => {
    const formDataImage = new FormData();
    formDataImage.append('profileImage', e.target.files[0]);

    try {
      setLoading(true);
      const res = await axios.post(`${API_BASE_URL}/api/users/upload/${id}`, formDataImage);
      toast.success('Image uploaded!');

      const updatedUser = {
        ...user,
        profileImage: `${res.data.imagePath}` // assume backend sends full path or relative
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));
      window.dispatchEvent(new Event('userUpdate'));
      setUser(updatedUser);
    } catch (error) {
      console.error('Image Upload Error:', error);
      toast.error(error?.response?.data?.message || 'Image upload failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.info('Logged out!');
    window.dispatchEvent(new Event('userUpdate'));
    setTimeout(() => navigate('/'), 1500);
  };

  if (!user) {
    return <div className="text-center mt-10 text-orange-600 text-xl font-semibold">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-200 flex justify-center items-center p-5">
      <ToastContainer position="top-center" />
      <motion.div
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <motion.img
            src={`${API_BASE_URL}/${user.profileImage}`}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-orange-400 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onError={(e) => (e.target.src = '/assets/default.jpg')}
          />
          <input type="file" onChange={handleImageUpload} className="mt-4 cursor-pointer" />
          {loading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
        </div>

        <motion.h1
          className="text-4xl font-bold text-center text-orange-700 mt-6 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hello, {user.name}!
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['name', 'phone', 'address', 'city', 'pincode', 'email'].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="font-semibold capitalize text-gray-700">{field}:</label>
              {editMode && field !== 'email' ? (
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              ) : (
                <p className="text-gray-800">{user[field]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          {editMode ? (
            <motion.button
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
              onClick={handleUpdate}
              whileTap={{ scale: 0.95 }}
            >
              Save Changes
            </motion.button>
          ) : (
            <motion.button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
              onClick={() => setEditMode(true)}
              whileTap={{ scale: 0.95 }}
            >
              Edit Profile
            </motion.button>
          )}

          <motion.button
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            onClick={handleLogout}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;

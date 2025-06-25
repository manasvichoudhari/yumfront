import { useState } from 'react';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

   const handleSubmit = async () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        toast.error('Please login to contact us');
        navigate('/account');
        return;
    }

    if (!formData.name || !formData.email || !formData.message) {
        toast.error('Please fill in all fields.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        toast.error('Please enter a valid email.');
        return;
    }

    setIsLoading(true);

    try {
        await axios.post(`${API_BASE_URL}/api/contact`, {
            userId: user._id,
            name: formData.name,
            email: formData.email,
            message: formData.message
        });

        setIsLoading(false);
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
        setIsLoading(false);
        console.error('Error submitting contact message:', error);
        toast.error('Failed to send message. Please try again.');
    }
};
    return (
        <motion.section
            className="max-w-7xl mx-auto px-4 py-16 min-h-screen bg-cover bg-center"
           
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-700 mb-12 text-center">
                Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* Contact Details */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-semibold text-orange-800 mb-4">Get in Touch</h3>
                    <ul className="space-y-6 text-lg">
                        <li className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                            <Phone className="w-7 h-7 text-yellow-500" />
                            <span className="text-orange-700 font-medium">+1 (123) 456-7890</span>
                        </li>
                        <li className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                            <Mail className="w-7 h-7 text-yellow-500" />
                            <span className="text-orange-700 font-medium">support@foodieapp.com</span>
                        </li>
                        <li className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                            <MapPin className="w-7 h-7 text-yellow-500" />
                            <span className="text-orange-700 font-medium">123 Foodie St, Flavor Town</span>
                        </li>
                    </ul>

                 
                    <img
                        src="/assets/contact-food.jpg"
                        alt="Contact Us"
                        className="mt-8 rounded-lg shadow-lg mx-auto md:mx-0"
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-xl shadow-lg space-y-6"
                >
                    <h3 className="text-2xl font-semibold text-orange-800 mb-2">Send a Message</h3>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        rows="4"
                    ></textarea>

                    <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold p-3 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all flex justify-center items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmit}
                        disabled={isLoading}
                    >
                        {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Send'}
                    </motion.button>

                    {successMessage && (
                        <motion.div
                            className="bg-green-200 text-green-800 p-3 rounded-lg text-center font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {successMessage}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;

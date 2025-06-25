import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
    const navigate = useNavigate();

    useEffect(() => {
        let storedCart = localStorage.getItem('cart');
        try {
            storedCart = storedCart && storedCart !== 'undefined' ? JSON.parse(storedCart) : [];
        } catch (error) {
            storedCart = [];
        }
        setCartItems(storedCart);

        const handleCartUpdate = () => {
            let updatedCart = localStorage.getItem('cart');
            try {
                updatedCart = updatedCart && updatedCart !== 'undefined' ? JSON.parse(updatedCart) : [];
            } catch (error) {
                updatedCart = [];
            }
            setCartItems(updatedCart);
        };

        window.addEventListener('cartUpdated', handleCartUpdate);
        return () => window.removeEventListener('cartUpdated', handleCartUpdate);
    }, []);

    const updateCartStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const increaseQuantity = (itemId) => {
        const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCartStorage(updatedCart);
    };

    const decreaseQuantity = (itemId) => {
        const updatedCart = cartItems.map(item =>
            item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        updateCartStorage(updatedCart);
    };

    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        updateCartStorage(updatedCart);
        toast.info('Item removed from cart');
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            toast.error('Your cart is empty!');
            return;
        }
        setShowModal(true);
    };

    const confirmOrder = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                toast.error('Please login to place order');
                navigate('/account');
                return;
            }

            const response = await axios.post(`${API_BASE_URL}/api/orders`, {
                userId: user._id,
                items: cartItems,
                paymentMethod,
                totalAmount: getTotal(), 
            });

            toast.success('Order placed successfully!');
            localStorage.removeItem('cart');
            window.dispatchEvent(new Event('cartUpdated'));
            setShowModal(false);
            navigate('/orders');
        } catch (error) {
            console.error('Order placement failed:', error);
            toast.error('Order failed. Please try again.');
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center p-4 sm:p-6 md:p-10"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')"
            }}
        >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center mb-6 space-x-3">
                    <ShoppingCart className="w-7 h-7 text-orange-700" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-orange-700">Your Cart</h1>
                </div>

                {cartItems.length === 0 ? (
                    <p className="text-lg text-gray-700">Your cart is empty.</p>
                ) : (
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {cartItems.map((item) => (
                            <motion.div
                                key={item.id}
                                className="flex flex-col sm:flex-row justify-between items-center bg-white p-3 rounded-xl shadow hover:shadow-md transition-shadow"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className="flex items-center gap-3 w-full sm:w-auto mb-4 sm:mb-0">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                    <div>
                                        <h2 className="text-base font-semibold">{item.name}</h2>
                                        <p className="text-gray-600 text-sm">₹{item.price}</p>
                                        <p className="text-orange-600 font-bold text-sm">Total: ₹{item.price * item.quantity}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 active:scale-95"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="text-base font-semibold">{item.quantity}</span>
                                    <button
                                        className="px-3 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 active:scale-95"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="text-red-500 hover:underline flex items-center mt-4 sm:mt-0"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <Trash2 className="w-4 h-4 mr-1" /> Remove
                                </button>
                            </motion.div>
                        ))}

                        <div className="text-right mt-6">
                            <h2 className="text-xl sm:text-2xl font-bold text-green-600">Grand Total: ₹{getTotal()}</h2>
                            <button
                                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 active:scale-95"
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>

           
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
                        <h2 className="text-lg font-bold mb-4">Confirm Order</h2>
                        <p className="mb-4 text-gray-700">Choose Payment Method:</p>

                        <div className="flex flex-col gap-2 mb-4 text-left">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="Cash on Delivery"
                                    checked={paymentMethod === 'Cash on Delivery'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="mr-2"
                                />
                                Cash on Delivery
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="UPI"
                                    checked={paymentMethod === 'UPI'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="mr-2"
                                />
                                UPI
                            </label>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 active:scale-95"
                                onClick={confirmOrder}
                            >
                                Place Order
                            </button>
                            <button
                                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 active:scale-95"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;

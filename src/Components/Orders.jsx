import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            toast.error('Please login to view your orders!');
            navigate('/account');
            return;
        }

        fetch(`${API_BASE_URL}/api/orders/${user._id}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching orders:', err);
                toast.error('Failed to fetch orders.');
                setLoading(false);
            });
    }, [navigate]);

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading your orders...</div>;
    }

    if (orders.length === 0) {
        return <div className="text-center mt-10 text-lg">No orders found.</div>;
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center p-4 sm:p-6 md:p-10"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')"
            }}
        >
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <div className="flex items-center mb-6 space-x-3 justify-center">
                    <ShoppingCart className="w-7 h-7 text-orange-700" />
                    <h2 className="text-3xl font-bold text-orange-700">My Orders</h2>
                </div>

           {orders.map((order) => (
    <div key={order._id} className="mb-10 p-6 bg-white rounded-2xl shadow-lg">
        <h3 className="text-xl font-bold mb-2 text-gray-700">Order ID: {order._id}</h3>
        <p className="text-gray-600 mb-1">Order Date: {new Date(order.createdAt).toLocaleString()}</p>
        <p className="text-gray-600 mb-4">Order Status: <span className="font-semibold">{order.orderStatus || 'Pending'}</span></p>

       
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-green-600">Total: ₹{order.totalAmount}</h2>
            <span className={`ml-4 px-3 py-1 rounded ${order.paymentStatus === 'Paid' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'}`}>
                {order.paymentStatus}
            </span>
        </div>

        <div className="text-right mt-4">
            <button
                className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 active:scale-95"
                onClick={() => setSelectedOrder(order)}
            >
                View Details
            </button>
        </div>
    </div>
))}

            </div>

            {/* Details Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-lg relative overflow-y-auto max-h-[80vh]">
                        <h3 className="text-xl font-bold mb-4 text-center">Order Details</h3>

                        <div className="mb-4">
                            <h4 className="font-semibold">Order info</h4>
                          
                            <p className="text-gray-700 text-sm">Payment Method: {selectedOrder.paymentMethod}</p>
                            <p className="text-gray-700 text-sm">Payment Status: {selectedOrder.paymentStatus}</p>
                            <p className="text-gray-700 text-sm">Order Status: {selectedOrder.orderStatus || 'Pending'}</p>
                        </div>

                        {selectedOrder.items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-between items-center bg-white p-3 rounded-xl shadow mb-4"
                                whileHover={{ scale: 1.01 }}
                            >
                                <div className="flex items-center gap-3">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                                    <div>
                                        <h2 className="text-base font-semibold">{item.name}</h2>
                                        <p className="text-gray-600 text-sm">Price: ₹{item.price}</p>
                                        <p className="text-orange-600 font-bold text-sm">Total: ₹{item.price * item.quantity}</p>
                                    </div>
                                </div>
                                <div className="text-base font-semibold text-gray-700">
                                    Qty: {item.quantity}
                                </div>
                            </motion.div>
                        ))}

                        <div className="text-right mt-6">
                            <button
                                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 active:scale-95"
                                onClick={() => setSelectedOrder(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Orders;

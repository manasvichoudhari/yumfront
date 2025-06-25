import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Menu = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const [menuItems] = useState([
    // Starter
    { id: '1', name: 'Paneer Tikka', price: 100, image: '/assets/panirtikka.jpg', category: 'Starter' },
    { id: '2', name: 'Veg Spring Roll', price: 80, image: '/assets/veg roll.jpg', category: 'Starter' },
    { id: '3', name: 'Hara Bhara Kabab', price: 100, image: '/assets/hara.jpg', category: 'Starter' },
    { id: '4', name: 'Cheese Balls', price: 250, image: '/assets/boll.jpg', category: 'Starter' },
    { id: '5', name: 'Crispy Corn', price: 100, image: '/assets/corn.jpg', category: 'Starter' },
    { id: '6', name: 'French Fries', price: 150, image: '/assets/fries.jpg', category: 'Starter' },

    // Pizza
    { id: '7', name: 'Margherita Pizza', price: 299, image: '/assets/margerita.jpg', category: 'Pizza' },
    { id: '8', name: 'Farmhouse Pizza', price: 399, image: '/assets/farm.jpg', category: 'Pizza' },
    { id: '9', name: 'Peppy Paneer Pizza', price: 149, image: '/assets/pappy.jpg', category: 'Pizza' },
    { id: '10', name: 'Mexican Green Wave', price: 199, image: '/assets/greenwave.jpg', category: 'Pizza' },
    { id: '11', name: 'Veg Extravaganza', price: 249, image: '/assets/vegextra.jpg', category: 'Pizza' },
    { id: '12', name: 'Cheese N Corn Pizza', price: 200, image: '/assets/chizcorn.jpg', category: 'Pizza' },

    // South Indian
    { id: '13', name: 'Masala Dosa', price: 70, image: '/assets/masala-dosa.jpg', category: 'South Indian' },
    { id: '14', name: 'Plain Dosa', price: 60, image: '/assets/plain-dosa.jpg', category: 'South Indian' },
    { id: '15', name: 'Rava Dosa', price: 80, image: '/assets/rava-dosa.jpg', category: 'South Indian' },
    { id: '16', name: 'Onion Uttapam', price: 50, image: '/assets/uttpam.jpg', category: 'South Indian' },
    { id: '17', name: 'Sambar Vada', price: 50, image: '/assets/samar.jpg', category: 'South Indian' },
    { id: '18', name: 'Idli Sambar', price: 50, image: '/assets/ideli.jpg', category: 'South Indian' },

    // Breakfast
    { id: '19', name: 'Aloo Poha', price: 25, image: '/assets/poha.jpg', category: 'Breakfast' },
    { id: '20', name: 'Upma', price: 30, image: '/assets/upama.jpg', category: 'Breakfast' },
    { id: '21', name: 'Sabudana Khichdi', price: 40, image: '/assets/sabudana.jpg', category: 'Breakfast' },
    { id: '22', name: 'Bread Butter', price: 50, image: '/assets/BUTTER.jpg', category: 'Breakfast' },
    { id: '23', name: 'Methi Thepla', price: 40, image: '/assets/methi.jpg', category: 'Breakfast' },
    { id: '24', name: 'Oats Porridge', price: 70, image: '/assets/oats.jpg', category: 'Breakfast' },
  ]);
  
    const categories = ['All', ...new Set(menuItems.map(item => item.category))];
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredItems =
        activeCategory === 'All'
            ? menuItems
            : menuItems.filter(item => item.category === activeCategory);

  const addToCart = (item) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        toast.error('Please login to add items to cart.');
        navigate('/account');
        return;
    }
    fetch(`${API_BASE_URL}/api/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user._id, item: { ...item, quantity: 1 } })
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('cart', JSON.stringify(data.items));  // Make sure your backend is sending items: cart.items
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${item.name} added to cart!`);
        })
        .catch(error => {
            console.error('Error adding to cart:', error);
            toast.error('Error adding to cart!');
        });
};

    // States for Order Form
    const [orderFormVisible, setOrderFormVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
   const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    paymentMethod: 'Cash on Delivery',
  });
  const [loadingOrder, setLoadingOrder] = useState(false);

  const handleOrder = (item) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      toast.error('Please login to add items to cart.');
      navigate('/account');
      return;
    }
    setSelectedItem(item);
    setFormData({
      name: '',
      address: '',
      phone: '',
      paymentMethod: 'Cash on Delivery',
    });
    setOrderFormVisible(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.address.trim() || !formData.phone.trim()) {
      toast.error('Please fill all fields');
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem('user'));
  if (!storedUser) {
    toast.error('User not found. Please login again.');
    return;
  }


    setLoadingOrder(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: storedUser._id,           
          
          items: [
            {
              id: selectedItem.id,
              name: selectedItem.name,
              price: selectedItem.price,
              image: selectedItem.image,
              quantity: 1,
            }
          ],
          totalAmount: selectedItem.price,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`Order placed for ${selectedItem.name}!`);
        setOrderFormVisible(false);
      } else {
        toast.error(data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Order error:', error);
      toast.error('Error placing order');
    } finally {
      setLoadingOrder(false);
    }
  };

    



    const SkeletonCard = () => (
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden animate-pulse">
            <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-300"></div>
            <div className="p-4 flex flex-col gap-3">
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                <div className="flex flex-col gap-2 mt-auto">
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                    <div className="h-10 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-orange-50 min-h-screen">
            <h2 className="text-4xl sm:text-5xl font-bold text-orange-900 mb-10 text-center">
                Our Delicious Menu
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-full border-2 text-sm sm:text-base font-semibold transition-colors ${activeCategory === category
                            ? 'bg-yellow-500 border-yellow-500 text-white'
                            : 'border-orange-900 text-orange-900 hover:bg-yellow-400 hover:border-yellow-400 hover:text-white'
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Menu Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    : filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-full h-48 sm:h-56 md:h-64">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) =>
                                        (e.target.src = `https://via.placeholder.com/400x200?text=${item.name.replace(' ', '+')}`)
                                    }
                                />
                            </div>

                            <div className="p-4 sm:p-5 flex flex-col flex-grow">
                                <h3 className="text-lg sm:text-xl font-semibold text-orange-900 truncate">
                                    {item.name}
                                </h3>

                                <p className="text-gray-600 text-sm sm:text-base mt-1">₹{item.price.toFixed(2)}</p>

                                <div className="mt-auto flex flex-col gap-2">
                                    <motion.button
                                        className="w-full bg-yellow-500 text-white px-4 py-2 sm:py-3 rounded-full hover:bg-yellow-600 transition-colors text-sm sm:text-base font-semibold"
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`Add ${item.name} to cart`}
                                        onClick={() => addToCart(item)}
                                    >
                                        Add to Cart
                                    </motion.button>

                                    <motion.button
                                        className="w-full bg-orange-900 text-white px-4 py-2 sm:py-3 rounded-full hover:bg-orange-800 transition-colors text-sm sm:text-base font-semibold"
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={`Order ${item.name} now`}
                                        onClick={() => handleOrder(item)}
                                    >
                                        Order Now
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>

            {/* Order Form Modal */}
            {orderFormVisible && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setOrderFormVisible(false)}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-semibold mb-4 text-center text-orange-700">Order: {selectedItem.name}</h3>
                        <form onSubmit={handleSubmitOrder} className="flex flex-col gap-4">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded"
                                required
                            />

                            <textarea
                                name="address"
                                placeholder="Delivery Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-3 border rounded"
                                required
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border rounded"
                                required
                            />

                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                className="w-full p-3 border rounded"
                            >
                                <option value="Cash on Delivery">Cash on Delivery</option>
                                <option value="Online Payment">Online Payment</option>
                            </select>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setOrderFormVisible(false)}
                                    className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loadingOrder}
                                    className={`px-4 py-2 rounded text-white ${loadingOrder ? 'bg-gray-400' : 'bg-orange-900 hover:bg-orange-800'} transition`}
                                >
                                    {loadingOrder ? 'Placing...' : 'Confirm Order'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Menu;



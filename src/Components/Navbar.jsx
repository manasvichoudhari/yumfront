import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';


const Navbar = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [cartCount, setCartCount] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = ['Home', 'Menu', 'Orders', 'Contact'];

    // Load User
    useEffect(() => {
        const loadUser = () => {
            const userData = localStorage.getItem('user');
            if (userData) {
                 console.log('Loaded User:', JSON.parse(userData));
                setCurrentUser(JSON.parse(userData));
            } else {
                setCurrentUser(null);
            }
        };
        loadUser();
        window.addEventListener('userUpdate', loadUser);
        return () => window.removeEventListener('userUpdate', loadUser);
    }, []);

    // Cart Count Update
   const updateCartCount = () => {
        let storedCart = localStorage.getItem('cart');
        try {
            storedCart = storedCart && storedCart !== 'undefined' ? JSON.parse(storedCart) : [];
        } catch (error) {
            storedCart = [];
        }
        const count = storedCart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
    };

    useEffect(() => {
        updateCartCount();

        const handleCartUpdate = () => {
            updateCartCount();
        };

        window.addEventListener('cartUpdated', handleCartUpdate);

        return () => window.removeEventListener('cartUpdated', handleCartUpdate);
    }, []);
    // Handle Account Click
    const handleAccountClick = () => {
       if (currentUser && currentUser._id) {
            navigate(`/profile/${currentUser._id}`);
        } else {
            navigate('/account'); // Account page for Login/Signup
        }
    };

    // ✅ Logout Logic
    const handleLogout = () => {
        localStorage.removeItem('user');
        setCurrentUser(null);
        window.dispatchEvent(new Event('userUpdate'));
        navigate('/');
    };

    return (
        <nav className="bg-orange-50 text-orange-700 shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto  sm:px-6 lg:px-6">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img className="h-10 w-auto" src="/assets/logo.jpg" alt="YumEats" />
                        <span className="ml-2 text-2xl font-bold text-orange-600">YumEats</span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {menuItems.map((item) => (
                            <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className="text-orange-700 hover:text-yellow-500 text-lg font-medium transition-colors"
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                        {currentUser?.isAdmin && (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
                to="/admin"
                className="text-orange-700 hover:text-yellow-500 text-lg font-medium transition-colors"
            >
                Admin Panel
            </Link>
        </motion.div>
    )}
                    </div>

                    {/* Cart & My Account */}
                    <div className="flex items-center space-x-6">
                        {/* Cart */}
                        <motion.button
                            className="relative text-orange-700 hover:text-yellow-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                             onClick={() => {
                                       if (!currentUser) {
                                         toast.info('Please login to view your cart');
                                          navigate('/account');
                                                } else {
                                               navigate('/cart');
                                                          }
                                                           }}
                        >
                            <ShoppingCart className="w-6 h-6" />
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        </motion.button>

                        {/* My Account / Profile */}

                        <motion.div className="relative group" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                           <button className="flex items-center space-x-2" onClick={handleAccountClick}>
       
          
        {currentUser ? (
            <span className="text-orange-700 hover:text-yellow-500 text-lg font-medium">
                {currentUser.name}
            </span>
        ) : (
            <span className="text-orange-700 hover:text-yellow-500 text-lg font-medium">
                My Account
            </span>
        )}
    </button>

    {/* Logout button hover dropdown */}
       {currentUser && (
        <div className="absolute right-0  w-32 bg-white border rounded-lg shadow-lg hidden group-hover:block">
            <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            >
                Logout
            </button>
        </div>
    )}
</motion.div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-orange-700 hover:text-yellow-500"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden bg-orange-50 text-orange-700 px-4 py-3 space-y-3"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                >
                    {menuItems.map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className="block text-orange-700 hover:text-yellow-500 text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}

                  

                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

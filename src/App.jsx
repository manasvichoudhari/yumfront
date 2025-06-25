import { Routes, Route,Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import { motion } from 'framer-motion'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Orders from './Components/Orders'
import Cart from './Components/Cart'
import Contact from './Components/Contact'
import Footer from './components/Footer'
import UserProfile from './Components/UserProfile'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import Account from './Components/Account'

    

const PrivateRoute = ({ children }) => {
const userId = localStorage.getItem('user');
 return userId ? children : <Navigate to="/account" replace />;
};

const App = () => (
     <div className="flex flex-col min-h-screen bg-gray-100">
       <Navbar/>
       <motion.main
         className="flex-grow"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/orders" element={<Orders />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/profile/:id" element={<UserProfile />} />
           <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route path="/reset-password/:token" element={<ResetPassword />} />
           <Route path="/account" element={<Account />} />
           <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        </Routes>
         
            <ToastContainer position="top-center" autoClose={2000} />
       </motion.main>
       <Footer />
     </div>
   )
export default App;
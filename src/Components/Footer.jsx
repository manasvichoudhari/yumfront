import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Home,
  List,
  ShoppingBag,
  PhoneCall,
  Mail,
  MapPin,
  Contact2,
  Map
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-orange-700 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">

        {/* Logo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img src="/assets/logo.jpg" alt="YumEats" className="h-10 w-10 mr-2 rounded-full" />
            <span className="text-2xl font-bold text-orange-700">YumEats</span>
          </div>
          <p className="text-orange-600 max-w-xs mx-auto md:mx-0">
            Fresh, fast, and delicious food delivered to your doorstep.
          </p>
        </motion.div>
        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-orange-700 mb-4 flex items-center justify-center md:justify-start">
            <PhoneCall className="w-5 h-5 mr-2" /> Contact
          </h3>
          <ul className="space-y-2 text-orange-600">
            <li className="flex items-center justify-center md:justify-start">
              <PhoneCall className="w-4 h-4 mr-2" />
              <a href="tel:+11234567890" className="hover:text-yellow-500">+1 (123) 456-7890</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:support@yumeats.com" className="hover:text-yellow-500">support@yumeats.com</a>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="w-4 h-4 mr-2" />
              <a href="https://maps.google.com/?q=123+Foodie+St+Flavor+Town" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                123 Foodie St, Flavor Town
              </a>
            </li>
          </ul>
        </motion.div>

        
        {/* Quick Links */}
<motion.div 
  initial={{ opacity: 0, y: 20 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.5, delay: 0.1 }}
  className="hidden md:block"
>
  <h3 className="text-xl font-semibold text-orange-700 mb-4 flex items-center justify-center md:justify-start">
    <List className="w-5 h-5 mr-2" /> Quick Links
  </h3>
  <ul className="space-y-2">
    {[
      { name: 'Home', icon: <Home className="inline w-4 h-4 mr-2" />, to: '/' },
      { name: 'Menu', icon: <List className="inline w-4 h-4 mr-2" />, to: '/menu' },
      { name: 'Orders', icon: <ShoppingBag className="inline w-4 h-4 mr-2" />, to: '/orders' },
      { name: 'Contact', icon: <Contact2 className="inline w-4 h-4 mr-2" />, to: '/contact' },
    ].map(({ name, icon, to }) => (
      <li key={name}>
        <Link to={to} className="group inline-flex items-center text-lg hover:text-yellow-500 transition-colors">
          {icon}
          {name}
          <span className="block h-0.5 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
      </li>
    ))}
  </ul>
</motion.div>

        

        {/* Social Media */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h3 className="text-xl font-semibold text-orange-700 mb-4 text-center md:text-left">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-6">
            {[
              { icon: <Facebook />, href: 'https://facebook.com' },
              { icon: <Instagram />, href: 'https://instagram.com' },
              { icon: <Twitter />, href: 'https://twitter.com' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-orange-600 hover:text-yellow-500"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-orange-500 text-sm mt-10 border-t border-orange-300 pt-4">
        © {new Date().getFullYear()} YumEats. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

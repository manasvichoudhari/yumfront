import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';


const images = [
  '/assets/Hero1.jpg',
  '/assets/Hero2.jpg',
  '/assets/Hero3.jpg'
];

const Home = () => {
  
  
  const [currentImage, setCurrentImage] = useState(0);

  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-orange-50 min-h-screen flex flex-col justify-center items-center text-center px-4 py-10">

      {/* Carousel */}
      <div className="w-full max-w-4xl h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg mb-8 relative">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt="Delicious Food"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>

      {/* Welcome Text */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-700 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome to YumEats
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl text-orange-600 mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Fresh, fast, and delicious food delivered right to your doorstep. Explore our wide variety of mouth-watering dishes.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mb-10"
      >
        <Link to="/menu" className="bg-yellow-400 text-orange-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors">
          Order Now
        </Link>
      </motion.div>

      {/* Popular Dishes Preview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {['ideli.jpg', 'boll.jpg', 'hara.jpg', 'corn.jpg'].map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={`/assets/${image}`}
              alt="Popular Dish"
              className="w-full h-32 sm:h-40 md:h-48 object-cover hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Home;

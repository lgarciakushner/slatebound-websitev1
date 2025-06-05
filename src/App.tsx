import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Hero from './sections/Hero';
import Marketing from './sections/Marketing';
import Services from './sections/Services';
import Process from './sections/Process';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen isLoading={isLoading} />
      ) : (
        <Layout>
          <Hero />
          <Marketing />
          <Services />
          <Process />
          <Contact />
        </Layout>
      )}
    </AnimatePresence>
  );
}

export default App;
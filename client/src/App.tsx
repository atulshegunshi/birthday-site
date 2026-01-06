
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import RSVPForm from './components/RSVPForm';
import { motion } from 'framer-motion';

function App() {
  return (
    <div
      className="w-full min-h-screen relative overflow-x-hidden bg-cover bg-center bg-fixed font-body"
      style={{ backgroundImage: "url('/assets/nature_bg.png')" }}
    >

      {/* Overlay for better text readability if needed, though vivid colors usually pop */}
      <div className="absolute inset-0 bg-sky-300/20 pointer-events-none z-0"></div>

      {/* Background Animated Clouds - adjusted opacity */}
      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="fixed top-20 left-10 text-9xl text-white opacity-60 z-0 pointer-events-none"
      >
        ☁️
      </motion.div>
      <motion.div
        animate={{ x: [0, -150, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="fixed top-40 right-20 text-8xl text-white opacity-50 z-0 pointer-events-none"
      >
        ☁️
      </motion.div>

      <HeroSection />

      <main className="relative z-10">
        <InfoSection />
        <RSVPForm />
      </main>

      <footer className="w-full text-center py-8 text-party-purple font-party text-2xl relative z-10">
        Made with ❤️ for the Birthday Boy!
      </footer>
    </div>
  );
}

export default App;

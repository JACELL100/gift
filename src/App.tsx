import { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import LoveLetter from './components/LoveLetter';
import LoveQuestion from './components/LoveQuestion';
import GiftReveal from './components/GiftReveal';
import Footer from './components/Footer';

// Floating particles component
function FloatingParticles() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    emoji: ['💖', '✨', '💕', '🌟', '💗', '⭐'][i % 6],
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 8,
    size: 14 + Math.random() * 12,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-heart"
          style={{
            left: `${p.left}%`,
            bottom: '-50px',
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </div>
      ))}
    </div>
  );
}

// Sparkle cursor effect
function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) {
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setSparkles((prev) => [...prev, newSparkle].slice(-15));
        
        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle text-2xl"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}

function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [showGifts, setShowGifts] = useState(false);
  const [showLoveQuestion, setShowLoveQuestion] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => setShowWelcome(false), 1500);
    const letterTimer = setTimeout(() => setShowLetter(true), 2000);
    const giftsTimer = setTimeout(() => setShowGifts(true), 4000);
    const questionTimer = setTimeout(() => setShowLoveQuestion(true), 6000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(letterTimer);
      clearTimeout(giftsTimer);
      clearTimeout(questionTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 overflow-x-hidden relative">
      <FloatingParticles />
      <SparkleEffect />
      
      {/* Welcome overlay */}
      <div className={`fixed inset-0 z-40 bg-gradient-to-br from-rose-400 via-pink-400 to-amber-300 flex items-center justify-center transition-all duration-1000 ${showWelcome ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="text-center">
          <div className="text-8xl animate-heartbeat mb-6">💝</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-pulse neon-text">
            Loading Love...
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
        <CountdownTimer />

        <div className={`transition-all duration-1000 transform ${
          showLetter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {showLetter && <LoveLetter />}
        </div>

        <div className={`transition-all duration-1000 transform ${
          showGifts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {showGifts && <GiftReveal />}
        </div>

        <div className={`transition-all duration-1000 transform ${
          showLoveQuestion ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {showLoveQuestion && <LoveQuestion />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

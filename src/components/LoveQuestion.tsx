import { useState, useEffect } from 'react';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';

function LoveQuestion() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [knifeAngle, setKnifeAngle] = useState(0);

  // Animate knife
  useEffect(() => {
    if (!answered) {
      const interval = setInterval(() => {
        setKnifeAngle((prev) => (prev + 5) % 30 - 15);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [answered]);

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  const handleNoHover = () => {
    const newX = Math.random() * 400 - 200;
    const newY = Math.random() * 300 - 150;
    setNoButtonPosition({ x: newX, y: newY });
    setNoHoverCount((prev) => prev + 1);
    // Yes button grows with each no hover
    setYesButtonSize((prev) => Math.min(prev + 0.1, 1.8));
  };

  const handleNoClick = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  const messages = [
    "Choose wisely... 👀",
    "Nice try, but you can't escape! 😏",
    "The No button is scared of you! 🏃",
    "Stop trying to click No! You know you love me! 😤",
    "The No button has trust issues now 😢",
    "JUST SAY YES ALREADY! 💕",
    "I will literally find you 🔪💖",
    "Resistance is futile! 🌌",
    "You're making this harder than it needs to be 😩",
    "Fine, even clicking No means you love me! 😊",
  ];

  const confettiPieces = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    color: ['#f43f5e', '#ec4899', '#f59e0b', '#8b5cf6', '#06b6d4', '#22c55e'][i % 6],
    size: 8 + Math.random() * 12,
    emoji: ['❤️', '💖', '💕', '✨', '🎉', '🥳', '💗', '💝'][i % 8],
  }));

  if (answered) {
    return (
      <div className="my-16 text-center relative">
        {/* Confetti */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
            {confettiPieces.map((piece) => (
              <div
                key={piece.id}
                className="absolute animate-confetti text-xl"
                style={{
                  left: `${piece.left}%`,
                  top: '-30px',
                  animationDelay: `${piece.delay}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              >
                {piece.emoji}
              </div>
            ))}
          </div>
        )}

        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-[3rem] opacity-50 blur-3xl animate-pulse"></div>
          
          <div className="relative bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-lg rounded-[2rem] shadow-2xl p-12 max-w-2xl mx-auto animate-popIn neon-box">
            <div className="flex justify-center gap-4 mb-6">
              <PartyPopper className="w-12 h-12 text-amber-500 animate-wiggle" />
              <div className="text-8xl animate-heartbeat">🥰</div>
              <PartyPopper className="w-12 h-12 text-amber-500 animate-wiggle" style={{ animationDelay: '0.25s' }} />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 animate-zoomInOut">
              I knew it!
            </h2>
            
            <p className="text-xl md:text-2xl text-rose-700 leading-relaxed mb-8">
              You can't resist me! 💖 We're meant to be together forever and ever!
              Here's to another amazing year of us! 🎊
            </p>
            
            <div className="flex justify-center gap-3 mb-6">
              {[...Array(7)].map((_, i) => (
                <Heart 
                  key={i} 
                  className={`w-8 h-8 text-rose-500 fill-rose-500 animate-float`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>

            <div className="bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 rounded-2xl p-6 mt-6">
              <p className="text-3xl md:text-4xl text-gradient font-bold animate-pulse">
                Happy New Year 2026, my love! 🎆
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Sparkles className="w-6 h-6 text-amber-500 animate-spin-slow" />
              <span className="text-lg text-rose-600 font-medium">Forever & Always</span>
              <Sparkles className="w-6 h-6 text-amber-500 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-16">
      <div className="relative">
        {/* Glow behind card */}
        <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-[3rem] opacity-30 blur-2xl"></div>
        
        <div className="relative bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-lg rounded-[2rem] shadow-2xl p-8 md:p-12 max-w-3xl mx-auto neon-box">
          <div className="text-center mb-8">
            {/* Scary cute emoji with knife */}
            <div className="relative inline-block mb-6">
              <div 
                className="text-8xl md:text-9xl animate-bounce inline-block"
                style={{ transform: `rotate(${knifeAngle}deg)` }}
              >
                😈
              </div>
              <div 
                className="absolute -right-8 top-4 text-6xl md:text-7xl animate-knife-swing"
              >
                🔪
              </div>
              {/* Blood drops effect */}
              <div className="absolute -bottom-2 right-0 flex gap-1">
                <span className="text-2xl animate-float" style={{ animationDelay: '0s' }}>💧</span>
                <span className="text-xl animate-float text-rose-500" style={{ animationDelay: '0.3s' }}>❤️</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4 animate-zoomInOut">
              Do you love me?
            </h2>
            
            <p className="text-lg md:text-xl text-rose-600 italic font-medium">
              {messages[Math.min(noHoverCount, messages.length - 1)]}
            </p>

            {noHoverCount > 3 && (
              <p className="text-sm text-rose-500 mt-2 animate-pulse">
                (The Yes button is getting bigger... just saying 👀)
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative min-h-[180px]">
            {/* YES Button */}
            <button
              onClick={handleYes}
              className="relative group"
              style={{ transform: `scale(${yesButtonSize})` }}
            >
              {/* Button glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 rounded-full opacity-50 blur-lg group-hover:opacity-80 transition-all duration-300 animate-pulse"></div>
              
              <div className="relative bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 animate-glow">
                <span className="flex items-center gap-2">
                  Yes! 
                  <Heart className="w-6 h-6 fill-white animate-heartbeat" />
                </span>
              </div>
            </button>

            {/* NO Button */}
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              onClick={handleNoClick}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transform transition-all duration-200 hover:shadow-lg"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              No 😢
            </button>
          </div>

          {noHoverCount > 5 && (
            <div className="mt-8 text-center animate-bounce">
              <p className="text-rose-600 font-bold text-lg">
                ⚠️ Warning: The knife is getting impatient! ⚠️
              </p>
            </div>
          )}

          {noHoverCount > 8 && (
            <div className="mt-4 text-center">
              <p className="text-rose-500 text-sm italic animate-pulse">
                (Psst... clicking anywhere basically means yes at this point 😏)
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoveQuestion;

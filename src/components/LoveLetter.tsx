import { useState } from 'react';
import { Mail, Heart, Send, Feather } from 'lucide-react';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1,
    color: ['#f43f5e', '#ec4899', '#f59e0b', '#8b5cf6', '#06b6d4'][i % 5],
    size: 8 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="flex justify-center my-16 relative">
      {/* Confetti explosion */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute animate-confetti"
              style={{
                left: `${piece.left}%`,
                top: '-20px',
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                backgroundColor: piece.color,
                borderRadius: piece.id % 2 === 0 ? '50%' : '0',
                animationDelay: `${piece.delay}s`,
                transform: `rotate(${piece.rotation}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-3xl w-full">
        {/* Decorative elements */}
        <div className="absolute -top-8 -left-8 text-5xl animate-float hidden md:block">💌</div>
        <div className="absolute -top-4 -right-8 text-4xl animate-float hidden md:block" style={{ animationDelay: '1s' }}>💝</div>
        
        <div
          className={`cursor-pointer transition-all duration-700 transform ${
            isOpen ? 'scale-100' : 'hover:scale-105 hover:rotate-1'
          }`}
          onClick={handleOpen}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className={`absolute -inset-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-3xl opacity-30 blur-2xl transition-all duration-700 ${isOpen ? 'opacity-50' : ''}`}></div>
            
            <div className={`relative bg-gradient-to-br from-rose-100 via-pink-100 to-amber-50 rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-700 neon-box ${
              isOpen ? 'animate-glow' : ''
            }`}>
              {/* Envelope header */}
              <div className="flex items-center justify-center mb-6 gap-4">
                <Feather className={`w-8 h-8 text-rose-500 transition-transform duration-700 ${isOpen ? 'rotate-12' : ''}`} />
                <Mail className={`w-16 h-16 text-rose-600 transition-all duration-700 ${
                  isOpen ? 'rotate-12 scale-110' : 'animate-bounce-gentle'
                }`} />
                <Send className={`w-8 h-8 text-rose-500 transition-transform duration-700 ${isOpen ? '-rotate-12' : ''}`} />
              </div>

              <div className={`transition-all duration-1000 overflow-hidden ${
                isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-6 text-rose-900">
                  <div className="flex justify-center mb-6 gap-2">
                    <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-heartbeat" />
                    <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-heartbeat" style={{ animationDelay: '0.2s' }} />
                    <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-heartbeat" style={{ animationDelay: '0.4s' }} />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-8 animate-slideDown">
                    ✨ To My Dearest One ✨
                  </h2>

                  <div className="space-y-6 text-base md:text-xl leading-relaxed">
                    <p className="animate-slideInLeft first-letter:text-5xl first-letter:font-bold first-letter:text-rose-600 first-letter:float-left first-letter:mr-2">
                      As we stand at the threshold of 2026, I want you to know how much you mean to me.
                      Every moment with you is a treasure, every laugh we share is a melody, and every day
                      with you is a blessing.
                    </p>

                    <p className="animate-slideInRight" style={{ animationDelay: '0.2s' }}>
                      You are the sunshine that brightens my darkest days, the warmth that comforts my soul,
                      and the love that makes everything worthwhile. This new year, I promise to love you
                      even more deeply, to cherish you even more tenderly, and to stand by your side through
                      every adventure life brings us.
                    </p>

                    <p className="animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                      Here's to another year of making beautiful memories together, to countless smiles,
                      endless laughter, and a love that grows stronger with each passing day.
                    </p>

                    <div className="text-center pt-8 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                      <p className="text-2xl font-bold mb-4">Forever yours,</p>
                      <p className="text-3xl text-gradient font-bold">With all my love 💕</p>
                    </div>
                  </div>
                </div>
              </div>

              {!isOpen && (
                <div className="text-center">
                  <p className="text-rose-700 text-xl font-bold animate-pulse mb-2">
                    💌 Click to open the letter 💌
                  </p>
                  <p className="text-rose-500 text-sm">A special message awaits...</p>
                </div>
              )}
            </div>

            {/* Floating hearts when open */}
            {isOpen && (
              <>
                <div className="absolute -top-6 -right-6 animate-float">
                  <Heart className="w-14 h-14 text-rose-400 fill-rose-400" />
                </div>
                <div className="absolute -top-4 -left-6 animate-float" style={{ animationDelay: '0.5s' }}>
                  <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
                </div>
                <div className="absolute -bottom-4 -right-4 animate-float" style={{ animationDelay: '1s' }}>
                  <Heart className="w-8 h-8 text-red-400 fill-red-400" />
                </div>
                <div className="absolute top-1/2 -left-8 animate-spin-slow hidden md:block">
                  <span className="text-3xl">💫</span>
                </div>
                <div className="absolute top-1/3 -right-10 animate-spin-slow hidden md:block" style={{ animationDirection: 'reverse' }}>
                  <span className="text-3xl">✨</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;

import { useState } from 'react';
import { Gift, Heart, Star, Sparkles, Coffee, Music, Camera, Plane, Gem, Crown, Rocket, Rainbow } from 'lucide-react';

function GiftReveal() {
  const [revealed, setRevealed] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  const handleReveal = () => {
    if (!revealed) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
        setShowExplosion(true);
        setRevealed(true);
        setTimeout(() => setShowExplosion(false), 1000);
      }, 800);
    }
  };

  const gifts = [
    { icon: Heart, label: 'Endless Love', color: 'text-rose-500', bgColor: 'from-rose-100 to-pink-100', emoji: '💖' },
    { icon: Star, label: 'Dreams Come True', color: 'text-amber-500', bgColor: 'from-amber-100 to-yellow-100', emoji: '⭐' },
    { icon: Coffee, label: 'Cozy Moments', color: 'text-amber-700', bgColor: 'from-orange-100 to-amber-100', emoji: '☕' },
    { icon: Music, label: 'Our Song', color: 'text-pink-500', bgColor: 'from-pink-100 to-rose-100', emoji: '🎵' },
    { icon: Camera, label: 'Memories Together', color: 'text-blue-500', bgColor: 'from-blue-100 to-sky-100', emoji: '📸' },
    { icon: Plane, label: 'Adventures Await', color: 'text-sky-600', bgColor: 'from-sky-100 to-cyan-100', emoji: '✈️' },
    { icon: Gem, label: 'Precious Moments', color: 'text-purple-500', bgColor: 'from-purple-100 to-violet-100', emoji: '💎' },
    { icon: Crown, label: 'My Everything', color: 'text-yellow-600', bgColor: 'from-yellow-100 to-amber-100', emoji: '💝' },
    { icon: Rocket, label: 'To The Moon', color: 'text-indigo-500', bgColor: 'from-indigo-100 to-purple-100', emoji: '🚀' },
    { icon: Rainbow, label: 'Colorful Days', color: 'text-emerald-500', bgColor: 'from-emerald-100 to-teal-100', emoji: '🌈' },
  ];

  // Explosion particles
  const explosionParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    angle: (i / 30) * 360,
    distance: 100 + Math.random() * 150,
    size: 10 + Math.random() * 20,
    emoji: ['✨', '💖', '🎁', '⭐', '💫', '🌟'][i % 6],
  }));

  return (
    <div className="my-16 relative">
      {/* Explosion effect */}
      {showExplosion && (
        <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">
          {explosionParticles.map((p) => (
            <div
              key={p.id}
              className="absolute animate-explode text-2xl"
              style={{
                transform: `rotate(${p.angle}deg) translateY(-${p.distance}px)`,
                fontSize: `${p.size}px`,
              }}
            >
              {p.emoji}
            </div>
          ))}
        </div>
      )}

      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Sparkles className="w-10 h-10 text-amber-500 animate-spin-slow" />
          <h2 className="text-4xl md:text-6xl font-bold text-gradient">
            Your Gifts
          </h2>
          <Sparkles className="w-10 h-10 text-amber-500 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>
        <p className="text-xl text-rose-600 font-medium">
          {revealed ? '🎉 Here are all your surprises! 🎉' : '🎁 Click the gift box to reveal your surprises! 🎁'}
        </p>
      </div>

      <div className="flex flex-col items-center">
        {/* Gift box */}
        <div
          className={`cursor-pointer mb-12 transition-all duration-500 transform relative ${
            revealed ? 'scale-50 opacity-30' : 'hover:scale-110'
          } ${isShaking ? 'animate-shake' : ''}`}
          onClick={handleReveal}
        >
          {/* Glow behind gift */}
          <div className={`absolute -inset-8 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-full blur-2xl transition-all duration-500 ${
            revealed ? 'opacity-0' : 'opacity-40 animate-pulse'
          }`}></div>
          
          <div className="relative">
            <Gift
              className={`w-40 h-40 text-rose-500 transition-all duration-300 ${
                revealed ? '' : 'animate-bounce-gentle hover:text-rose-600'
              }`}
            />
            {!revealed && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-rose-600 font-bold text-lg shadow-lg animate-pulse">
                    Click Me! 🎁
                  </span>
                </div>
                {/* Floating sparkles around gift */}
                <div className="absolute -top-4 -left-4 text-2xl animate-float">✨</div>
                <div className="absolute -top-2 -right-4 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>💫</div>
                <div className="absolute -bottom-2 -left-2 text-xl animate-float" style={{ animationDelay: '1s' }}>🌟</div>
                <div className="absolute -bottom-4 -right-2 text-xl animate-float" style={{ animationDelay: '1.5s' }}>⭐</div>
              </>
            )}
          </div>
        </div>

        {/* Revealed gifts grid */}
        {revealed && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-6xl">
            {gifts.map((gift, index) => {
              const Icon = gift.icon;
              return (
                <div
                  key={index}
                  className={`group relative animate-popIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-300"></div>
                  
                  <div className={`relative bg-gradient-to-br ${gift.bgColor} glass rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-translate-y-2`}>
                    <div className="flex flex-col items-center">
                      {/* Emoji badge */}
                      <div className="absolute -top-3 -right-3 text-2xl animate-bounce">
                        {gift.emoji}
                      </div>
                      
                      <div className={`mb-4 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}>
                        <Icon className={`w-12 h-12 md:w-16 md:h-16 ${gift.color}`} />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-rose-800 text-center group-hover:text-gradient transition-all duration-300">
                        {gift.label}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Message after reveal */}
        {revealed && (
          <div className="mt-12 text-center animate-slideUp">
            <p className="text-2xl text-rose-600 font-bold mb-2">
              ✨ All these and more await you in 2026! ✨
            </p>
            <p className="text-lg text-rose-500">
              Every gift represents a promise of love and happiness 💕
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftReveal;

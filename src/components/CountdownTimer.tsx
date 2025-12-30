import { useState, useEffect } from 'react';
import { Clock, Sparkles, PartyPopper, Stars } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear2026 = new Date('2026-01-01T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = newYear2026 - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const emojis = ['🎉', '🎊', '🥳', '✨', '🎆', '🎇', '💫', '🌟'];
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <div className="text-center mb-12 animate-fadeIn relative">
      {/* Decorative floating elements */}
      <div className="absolute -top-4 left-1/4 animate-float text-4xl" style={{ animationDelay: '0s' }}>🎈</div>
      <div className="absolute -top-8 right-1/4 animate-float text-3xl" style={{ animationDelay: '1s' }}>🎊</div>
      <div className="absolute top-20 left-10 animate-float text-2xl hidden md:block" style={{ animationDelay: '0.5s' }}>✨</div>
      <div className="absolute top-16 right-10 animate-float text-2xl hidden md:block" style={{ animationDelay: '1.5s' }}>💖</div>

      <div className="inline-block mb-6 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-full opacity-30 blur-xl animate-pulse"></div>
        <div className="relative flex items-center justify-center gap-4">
          <PartyPopper className="w-10 h-10 text-amber-500 animate-wiggle" />
          <Sparkles className="w-14 h-14 text-rose-500 animate-heartbeat" />
          <PartyPopper className="w-10 h-10 text-amber-500 animate-wiggle" style={{ animationDelay: '0.25s' }} />
        </div>
      </div>

      <h1 className="text-5xl md:text-8xl font-bold text-gradient mb-4 animate-slideDown relative">
        <span className="relative">
          Welcome to 2026
          <Stars className="absolute -top-2 -right-8 w-8 h-8 text-amber-400 animate-spin-slow" />
        </span>
      </h1>

      <p className="text-xl md:text-3xl text-rose-700 mb-8 animate-slideUp font-semibold">
        ✨ A special gift for someone special ✨
      </p>

      <div className="flex items-center justify-center gap-3 mb-8 glass rounded-full py-3 px-6 max-w-md mx-auto">
        <Clock className="w-7 h-7 text-rose-600 animate-pulse" />
        <p className="text-lg md:text-xl text-rose-600 font-bold">Countdown to New Year 2026</p>
        <span className="text-2xl animate-bounce">{randomEmoji}</span>
      </div>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className={`relative group cursor-pointer`}
            onMouseEnter={() => setIsHovered(unit)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {/* Glow effect */}
            <div className={`absolute -inset-2 bg-gradient-to-r from-rose-400 via-pink-500 to-amber-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500`}></div>
            
            <div
              className={`relative glass rounded-2xl shadow-xl p-6 md:p-8 min-w-[100px] md:min-w-[130px] transform transition-all duration-300 hover:scale-110 hover:shadow-2xl neon-box ${
                isHovered === unit ? 'animate-shake' : ''
              }`}
            >
              <div className={`text-5xl md:text-6xl font-bold text-gradient mb-2 transition-all duration-300 ${
                unit === 'seconds' ? 'animate-pulse' : ''
              }`}>
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-rose-800 uppercase tracking-wider font-bold">
                {unit}
              </div>
              
              {/* Hover emoji */}
              <div className={`absolute -top-4 -right-2 text-2xl transition-all duration-300 ${
                isHovered === unit ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}>
                {unit === 'days' ? '📅' : unit === 'hours' ? '⏰' : unit === 'minutes' ? '⏱️' : '💓'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom decorative message */}
      <div className="mt-10 animate-bounce-gentle">
        <p className="text-lg text-rose-600 font-medium">
          🎁 Keep scrolling for your surprises 🎁
        </p>
      </div>
    </div>
  );
}

export default CountdownTimer;

import { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <div className="text-center mb-12 animate-fadeIn">
      <div className="inline-block mb-6">
        <Sparkles className="w-12 h-12 text-rose-500 animate-pulse mx-auto mb-4" />
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 mb-4 animate-slideDown">
        Welcome to 2026
      </h1>

      <p className="text-xl md:text-2xl text-rose-700 mb-8 animate-slideUp">
        A special gift for someone special
      </p>

      <div className="flex items-center justify-center gap-2 mb-8">
        <Clock className="w-6 h-6 text-rose-600" />
        <p className="text-lg text-rose-600 font-semibold">Countdown to New Year 2026</p>
      </div>

      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 min-w-[100px] transform hover:scale-110 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-rose-800 uppercase tracking-wider font-semibold">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountdownTimer;

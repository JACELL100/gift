import { useState } from 'react';
import { Gift, Heart, Star, Sparkles, Coffee, Music, Camera, Plane } from 'lucide-react';

function GiftReveal() {
  const [revealed, setRevealed] = useState(false);

  const gifts = [
    { icon: Heart, label: 'Endless Love', color: 'text-rose-500', delay: 'delay-100' },
    { icon: Star, label: 'Dreams Come True', color: 'text-amber-500', delay: 'delay-200' },
    { icon: Coffee, label: 'Cozy Moments', color: 'text-amber-700', delay: 'delay-300' },
    { icon: Music, label: 'Our Song', color: 'text-pink-500', delay: 'delay-400' },
    { icon: Camera, label: 'Memories Together', color: 'text-blue-500', delay: 'delay-500' },
    { icon: Plane, label: 'Adventures Await', color: 'text-sky-600', delay: 'delay-600' },
  ];

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4 flex items-center justify-center gap-3">
          <Sparkles className="w-10 h-10" />
          Your Gifts
          <Sparkles className="w-10 h-10" />
        </h2>
        <p className="text-lg text-rose-600">Click the gift box to reveal your surprises!</p>
      </div>

      <div className="flex flex-col items-center">
        <div
          className={`cursor-pointer mb-12 transition-all duration-500 transform ${
            revealed ? 'scale-75 opacity-50' : 'hover:scale-110'
          }`}
          onClick={() => setRevealed(true)}
        >
          <div className="relative">
            <Gift
              className={`w-32 h-32 text-rose-500 ${
                revealed ? 'animate-bounce' : 'animate-pulse'
              }`}
            />
            {!revealed && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Click Me!</span>
              </div>
            )}
          </div>
        </div>

        {revealed && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            {gifts.map((gift, index) => {
              const Icon = gift.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl animate-popIn ${gift.delay}`}
                >
                  <div className="flex flex-col items-center">
                    <div className={`mb-4 transform transition-transform duration-300 hover:rotate-12`}>
                      <Icon className={`w-16 h-16 ${gift.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-rose-800 text-center">
                      {gift.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default GiftReveal;

import { Heart, Sparkles } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 py-12 mt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-4 left-10 text-2xl animate-float">💖</div>
        <div className="absolute top-8 right-20 text-xl animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute bottom-4 left-1/4 text-lg animate-float" style={{ animationDelay: '1s' }}>💕</div>
        <div className="absolute bottom-6 right-1/4 text-xl animate-float" style={{ animationDelay: '1.5s' }}>🌟</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Made with love */}
          <div className="flex items-center justify-center gap-3 text-rose-700 group">
            <Sparkles className="w-5 h-5 text-amber-500 animate-spin-slow" />
            <span className="text-xl font-bold">Made with</span>
            <div className="relative">
              <Heart className="w-7 h-7 text-rose-500 fill-rose-500 animate-heartbeat" />
              <Heart className="absolute inset-0 w-7 h-7 text-rose-400 fill-rose-400 animate-ping opacity-50" />
            </div>
            <span className="text-xl font-bold text-gradient">by jacell</span>
            <Sparkles className="w-5 h-5 text-amber-500 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Divider */}
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full"></div>

          {/* Special Edition */}
          <div className="text-center">
            <p className="text-rose-600 font-semibold text-lg animate-pulse">
              ✨ New Year 2026 Special Edition ✨
            </p>
            <p className="text-rose-500 text-sm mt-2">
              Wishing you endless love and happiness 💝
            </p>
          </div>

          {/* Hearts row */}
          <div className="flex justify-center gap-2 mt-4">
            {['💖', '💕', '❤️', '💗', '💓', '💕', '💖'].map((heart, i) => (
              <span 
                key={i} 
                className="text-lg animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {heart}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

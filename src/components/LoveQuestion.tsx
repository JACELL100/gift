import { useState } from 'react';
import { Heart } from 'lucide-react';

function LoveQuestion() {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noHoverCount, setNoHoverCount] = useState(0);

  const handleYes = () => {
    setAnswered(true);
  };

  const handleNoHover = () => {
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 200 - 100;
    setNoButtonPosition({ x: newX, y: newY });
    setNoHoverCount((prev) => prev + 1);
  };

  const handleNoClick = () => {
    setAnswered(true);
  };

  if (answered) {
    return (
      <div className="my-16 text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto animate-popIn">
          <div className="text-8xl mb-6 animate-bounce">🥰</div>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-6">
            I knew it!
          </h2>
          <p className="text-xl text-rose-700 leading-relaxed mb-6">
            You can't resist me! We're meant to be together forever and ever!
            Here's to another amazing year of us!
          </p>
          <div className="flex justify-center gap-2 animate-pulse">
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          </div>
          <p className="text-2xl text-rose-600 font-bold mt-8">
            Happy New Year 2026, my love!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-16">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-8xl md:text-9xl mb-6 animate-bounce inline-block">
            😈🔪
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-rose-700 mb-4">
            Do you love me?
          </h2>
          <p className="text-lg text-rose-600 italic">
            {noHoverCount > 3
              ? "Stop trying to click No! You know you love me! 😤"
              : noHoverCount > 0
              ? "Nice try, but you can't escape! 😏"
              : "Choose wisely... 👀"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative min-h-[120px]">
          <button
            onClick={handleYes}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-xl px-12 py-6 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
          >
            Yes! 💕
          </button>

          <button
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold text-xl px-12 py-6 rounded-full shadow-xl transform transition-all duration-200"
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
          >
            No 😢
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-rose-500 italic">
          {noHoverCount > 5 && "Okay fine, even clicking No means you love me! 😊"}
        </div>
      </div>
    </div>
  );
}

export default LoveQuestion;

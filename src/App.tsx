import { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import LoveLetter from './components/LoveLetter';
import LoveQuestion from './components/LoveQuestion';
import GiftReveal from './components/GiftReveal';
import Footer from './components/Footer';

function App() {
  const [showLetter, setShowLetter] = useState(false);
  const [showGifts, setShowGifts] = useState(false);
  const [showLoveQuestion, setShowLoveQuestion] = useState(false);

  useEffect(() => {
    const letterTimer = setTimeout(() => setShowLetter(true), 2000);
    const giftsTimer = setTimeout(() => setShowGifts(true), 4000);
    const questionTimer = setTimeout(() => setShowLoveQuestion(true), 6000);

    return () => {
      clearTimeout(letterTimer);
      clearTimeout(giftsTimer);
      clearTimeout(questionTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-amber-100 overflow-x-hidden">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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

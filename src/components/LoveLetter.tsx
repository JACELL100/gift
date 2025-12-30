import { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center my-16">
      <div className="relative">
        <div
          className={`cursor-pointer transition-all duration-700 transform ${
            isOpen ? 'scale-110' : 'hover:scale-105'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative">
            <div className={`bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg shadow-2xl p-8 md:p-12 max-w-2xl transition-all duration-700 ${
              isOpen ? 'animate-bounce-gentle' : ''
            }`}>
              <div className="flex items-center justify-center mb-6">
                <Mail className={`w-16 h-16 text-rose-600 transition-transform duration-700 ${
                  isOpen ? 'rotate-12' : ''
                }`} />
              </div>

              <div className={`transition-all duration-700 overflow-hidden ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-6 text-rose-900">
                  <div className="flex justify-center mb-4">
                    <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-700 mb-6">
                    To My Dearest One
                  </h2>

                  <div className="space-y-4 text-base md:text-lg leading-relaxed">
                    <p>
                      As we stand at the threshold of 2026, I want you to know how much you mean to me.
                      Every moment with you is a treasure, every laugh we share is a melody, and every day
                      with you is a blessing.
                    </p>

                    <p>
                      You are the sunshine that brightens my darkest days, the warmth that comforts my soul,
                      and the love that makes everything worthwhile. This new year, I promise to love you
                      even more deeply, to cherish you even more tenderly, and to stand by your side through
                      every adventure life brings us.
                    </p>

                    <p>
                      Here's to another year of making beautiful memories together, to countless smiles,
                      endless laughter, and a love that grows stronger with each passing day.
                    </p>

                    <p className="text-center font-semibold text-xl mt-8">
                      Forever yours,
                      <br />
                      <span className="text-rose-600">With all my love</span>
                    </p>
                  </div>
                </div>
              </div>

              {!isOpen && (
                <p className="text-center text-rose-700 text-lg font-semibold animate-pulse">
                  Click to open the letter
                </p>
              )}
            </div>

            {isOpen && (
              <div className="absolute -top-4 -right-4 animate-spin-slow">
                <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;

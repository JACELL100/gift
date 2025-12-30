import { Heart } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-200 via-pink-200 to-amber-200 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-rose-700">
          <span className="text-lg font-semibold">Made with love</span>
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
          <span className="text-lg font-semibold">by jacell</span>
        </div>
        <div className="text-center mt-4 text-rose-600 text-sm">
          New Year 2026 Special Edition
        </div>
      </div>
    </footer>
  );
}

export default Footer;

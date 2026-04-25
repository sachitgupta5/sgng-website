import { MessageCircle } from 'lucide-react';

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919910764704"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-center
                 h-14 w-14 sm:h-16 sm:w-16
                 rounded-full bg-accent-500 text-primary-900 shadow-lg shadow-accent-500/30
                 transition-all duration-300
                 hover:bg-accent-600 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" />

      <span
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap
                   rounded-md bg-primary-900 px-3 py-1.5 text-sm text-white
                   opacity-0 transition-opacity duration-200
                   group-hover:opacity-100"
      >
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;

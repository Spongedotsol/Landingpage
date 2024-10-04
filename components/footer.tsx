import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ['latin'] })

export function Footer() {
  return (
    <footer className={`bg-white text-black py-10 relative ${inter.className}`}>
      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-4"></div>
      {/* Footer Content */}
      {/* Footer Bottom */}
      <div className="absolute text-left text-neutral-500 mt-20 left-4 bottom-4 text-sm">
        © Sponge 2024
      </div>

      {/* Twitter Icon */}
      <div className="absolute bottom-4 right-4 mt-20">
        <a href="https://x.com/Snail__Finance" className="text-gray-600 hover:text-black transition-colors duration-300">
          <FontAwesomeIcon 
            icon={faXTwitter} 
            size="lg" 
            className="hover:scale-110 transition-transform duration-300"
          />
        </a>
      </div>
    </footer>
  )
}
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";


export default function App() {
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bg.avif')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 max-w-[700px]">
        {/* Brand */}
        <img
  src="/logo.png"
  alt="Shree Maya Homes Logo"
  className="mx-auto w-48 md:w-72 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
  loading="lazy"
/>
        {/* <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-white drop-shadow-lg" style={{ fontFamily: "var(--font-heading)" }}>
  Shree Maya Homes
</h1> */}

        {/* Tagline */}
        <p className="text-lg md:text-2xl mt-3 text-white/90">
          Divine Comfort for Every Space
        </p>

        {/* Under Construction */}
        <p className="text-white/75 mt-6 text-sm md:text-base">
          Our website is currently under development.
        </p>

        {/* Social / Contact */}
        <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+919004865002"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/shreemayahomes"
            className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
          >
            <FaInstagram size={22} /> Instagram
          </a>

          {/* Phone Call */}
          <a
            href="tel:+919004865002"
className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition border border-white/70"
          >
            <FaPhoneAlt size={20} /> Call Us
          </a>
        </div>

        {/* Location */}
        <p className="text-white/85 text-sm mt-10">
  📍 Mumbai, Maharashtra | Supplying Homes & Hospitality Nationwide
</p>

      </div>
    </div>
  );
}
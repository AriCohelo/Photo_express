import { Camera } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-[600ms] ease-out delay-100">
      <div className="flex items-start justify-center mb-4">
        <Camera className="w-16 h-16 text-[#2d7a7a] mr-2" />
        <div className="flex flex-col text-left">
          <div className="text-5xl md:text-7xl font-bold">
            <span className="text-[#2d7a7a]">photo</span>
            <span className="text-[#ff6b35]">_</span>
          </div>
          <div className="text-5xl md:text-7xl font-bold">
            <span className="text-[#2d7a7a]">expr</span>
            <span className="text-[#ff6b35]">ess</span>
          </div>
        </div>
      </div>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Descubre nuestra colección curada de productos premium, cada pieza<br />cuidadosamente
        seleccionada por su calidad excepcional y diseño atemporal.
      </p>
    </header>
  );
};

export default Header;
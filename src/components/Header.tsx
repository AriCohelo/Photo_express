import { Camera } from 'lucide-react';

const Header = () => {
  return (
    <header className="text-center mb-12 fade-in">
      <div className="flex items-start justify-center mb-4">
        <Camera className="w-16 h-16 logo-icon mr-2" />
        <div className="flex flex-col text-left">
          <div className="text-5xl md:text-7xl font-bold">
            <span className="logo-text">photo</span>
            <span className="logo-accent">_</span>
          </div>
          <div className="text-5xl md:text-7xl font-bold">
            <span className="logo-text">expr</span>
            <span className="logo-accent">ess</span>
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
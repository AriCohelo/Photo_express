const Header = () => {
  return (
    <header className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-[600ms] ease-out delay-100">
      <div className="flex items-start justify-center m-4">
        <img
          src="/Photo_express/logo-violeta.png"
          alt="Photo Express"
          className="h-52 w-auto"
        />
      </div>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Descubre nuestra colección de productos premium. Cada pieza es
        cuidadosamente tratada, con materiales de una calidad superior,
        especialmente seleccionados por su durabilidad.
      </p>
    </header>
  );
};

export default Header;

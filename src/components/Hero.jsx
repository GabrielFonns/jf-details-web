function Hero({ onBookingClick }) {
  return (
    <section
     id="home" className="relative h-screen flex items-center..."
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/car-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* A MÁGICA DO ESPAÇO: mt-32 empurra tudo mais para baixo, fugindo do cabeçalho */}
      <div className="relative z-20 text-center px-4 max-w-5xl mt-32">

        {/* FONTE MAIOR: lg:text-7xl para dar aquele impacto */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 uppercase tracking-widest leading-tight drop-shadow-2xl">
          A ARTE DO <span className="text-dourado">POLIMENTO</span> <br /> AUTOMOTIVO PREMIUM
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto drop-shadow-lg font-light tracking-wide">
          Restauramos a beleza original do seu veículo com técnicas exclusivas e os melhores produtos do mercado automotivo.
        </p>

        {/* BOTÃO RETANGULAR: Usei rounded-md ao invés de rounded-full */}
        <button
          onClick={onBookingClick}
          className="bg-dourado text-escuro font-bold text-lg px-12 py-5 rounded-md hover:bg-yellow-500 hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] transition-all duration-300 uppercase tracking-[0.2em] scale-100 hover:scale-105"
        >
          Agendar Agora
        </button>
      </div>
    </section>
  )
}

export default Hero
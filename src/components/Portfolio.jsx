function Portfolio() {
  // Mapeamos os seus vídeos reais.
  // O Vite entende que a barra "/" no início significa "procure na pasta public"
  const projetos = [
    { id: 1, videoUrl: "/primeiroV.mp4", etiqueta: "Tucson - Externa" },
    { id: 2, videoUrl: "/SegundoV.mp4", etiqueta: "Tucson - Interna" },
    { id: 3, videoUrl: "/QuartoV.mp4", etiqueta: "Jetta - Externa" },
    { id: 4, videoUrl: "/quintoV.mp4", etiqueta: "Jetta - Interna" },
    { id: 5, videoUrl: "/TerceiroV.mp4", etiqueta: "Fiesta - Premium" }
  ]

  return (
    // AQUI ESTÁ A CORREÇÃO: Adicionamos o id="portfolio" nesta linha 👇
    <section id="portfolio" className="bg-escuro py-20 px-4 border-t border-gray-900/50">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl text-dourado text-center font-bold mb-16 tracking-wider">
          Nosso Padrão de Qualidade
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projetos.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-md overflow-hidden border border-gray-800 shadow-lg cursor-pointer bg-black h-80 flex items-center justify-center"
            >

              {/* --- A MÁGICA DO VÍDEO AQUI --- */}
              {/* O atributo 'muted' garante que fique sem som. 'autoPlay' e 'loop' fazem rodar infinito */}
              <video
                src={item.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Etiqueta Dourada Dinâmica (Puxa o nome exato que definimos lá em cima) */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-dourado text-escuro text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded uppercase tracking-widest shadow-xl z-10">
                {item.etiqueta}
              </div>

              {/* Efeito de brilho ao passar o mouse */}
              <div className="absolute inset-0 bg-dourado/0 group-hover:bg-dourado/20 transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Portfolio
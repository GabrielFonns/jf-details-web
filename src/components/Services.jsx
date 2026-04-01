function Services() {
  const servicos = [
    {
      titulo: "Polimento Técnico",
      descricao: "Polimento detalhado por profissionais visando a restauração e proteção automotiva.",
      icone: "✨" // Depois trocamos por ícones reais
    },
    {
      titulo: "Lavagem Premium",
      descricao: "Lavagem detalhada com produtos importados, cuidando de cada fresta do seu veículo.",
      icone: "🚘"
    },
    {
      titulo: "Leva e Traz",
      descricao: "Sistema Leva e Traz: Praticidade de ponta a ponta. Cuidar do carro nunca foi tão fácil. Se você não pode vir até nós, nós vamos até você!",
      icone: "🛡️"
    }
  ]

  return (
    // AQUI ESTÁ A CORREÇÃO: Adicionamos o id="servicos" nesta linha 👇
    <section id="servicos" className="bg-escuro py-20 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Título da Seção */}
        <h2 className="text-3xl md:text-4xl text-dourado text-center font-bold mb-16 tracking-wider">
          Serviços em Destaque
        </h2>

        {/* Grade com os 3 Cartões */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Usamos o .map do JavaScript para desenhar os 3 cartões de forma inteligente */}
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-chumbo border border-dourado/30 rounded-lg p-8 text-center hover:border-dourado hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(197,160,89,0.2)] relative overflow-hidden"
            >
              {/* Ícone */}
              <div className="text-5xl mb-6">{servico.icone}</div>

              {/* Textos */}
              <h3 className="text-xl text-dourado font-semibold mb-4">{servico.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {servico.descricao}
              </p>

              {/* Marca d'água de fundo (Opcional, dá um charme extra) */}
              <div className="absolute -bottom-4 -right-4 text-dourado/5 text-8xl font-black italic select-none">
                JF
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services
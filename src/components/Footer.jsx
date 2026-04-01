import logoImg from '../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-black py-16 px-4 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

        {/* 1. Coluna da Esquerda: A Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={logoImg}
            alt="Logo JF Details"
            className="w-48 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          />
        </div>

        {/* 2. Coluna do Meio: Contatos (Instagram e WhatsApp com Ícones SVG) */}
        <div className="flex flex-col items-center md:items-start space-y-6 text-gray-300 font-light">

          {/* Link do Instagram Direto para a Postagem */}
          <a href="https://www.instagram.com/jf_det4il/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-dourado cursor-pointer transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <p className="text-lg tracking-wide">@jf_details</p>
          </a>

          {/* Link do WhatsApp direto para o seu número */}
          <a href="https://wa.me/5515998390907" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-dourado cursor-pointer transition-colors group">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p className="text-lg tracking-wide">(15) 99839-0907</p>
          </a>

        </div>

        {/* 3. Coluna da Direita: Endereço Texto + Mapa de Sorocaba */}
        <div className="w-full h-full flex flex-col space-y-4">

          {/* O Seu Endereço em Texto */}
          <div className="flex items-start gap-3 text-gray-400 font-light text-sm">
            <span className="text-lg">📍</span>
            <p>
              Rua Pedro José da Silva, número 23<br />
              Sorocaba - SP, CEP 18053-330
            </p>
          </div>

          {/* Mapa Interativo focando na sua rua */}
          <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-dourado/20 shadow-xl relative opacity-90 hover:opacity-100 hover:border-dourado/50 transition-all duration-300">
             <iframe
                // Link configurado para o CEP 18053-330
                src="https://maps.google.com/maps?q=18053-330&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </div>

      {/* Linha de Direitos Autorais e Assinatura */}
      <div className="text-center text-gray-600 text-xs mt-16 pt-6 border-t border-gray-900 tracking-wider">
        © {new Date().getFullYear()} JF Details - Estética Automotiva. Todos os direitos reservados.
        <br />
      </div>
    </footer>
  )
}

export default Footer
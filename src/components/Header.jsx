import logoImg from '../assets/logo.png'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* A MÁGICA DA LOGO: Agora ela está dentro de uma tag <a> que aponta para o #home */}
        <a href="#home" aria-label="Voltar para o topo">
          <img
            src={logoImg}
            alt="Logo JF Details"
            className="w-[150px] md:w-[220px] object-contain drop-shadow-lg hover:scale-105 transition-transform cursor-pointer"
          />
        </a>

        {/* Links direcionais apontando para os IDs das seções */}
        <nav className="flex items-center gap-8 text-gray-200 uppercase text-sm tracking-widest">
          <a href="#home" className="hover:text-dourado transition-colors font-medium">Home</a>
          <a href="#servicos" className="hover:text-dourado transition-colors font-medium">Serviços</a>
          <a href="#portfolio" className="hover:text-dourado transition-colors font-medium">Portfólio</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
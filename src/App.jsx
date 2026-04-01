import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BookingModal from './components/BookingModal'
import Services from  './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  // 1. ESTADO DE SENIOR: Controla se o Modal de Agendamento está visível ou não
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  // Função para abrir o modal
  const openModal = () => setIsBookingModalOpen(true)
  // Função para fechar o modal
  const closeModal = () => setIsBookingModalOpen(false)

  return (
    // Fundo escuro premium em toda a página
    <div className="min-h-screen bg-escuro font-sans">

      {/* 2. CHAMA O CABEÇALHO */}
      <Header />

      {/* 3. CHAMA O TOPO GIGANTE: Passamos a função openModal para o botão lá dentro */}
      <Hero onBookingClick={openModal} />
      <Services />
      <Portfolio />
      <Footer />


      {/* 4. CHAMA O FORMULÁRIO (MODAL): Ele fica 'escondido' até que isBookingModalOpen seja true */}
      <BookingModal isOpen={isBookingModalOpen} onClose={closeModal} />

    </div>
  )
}

export default App
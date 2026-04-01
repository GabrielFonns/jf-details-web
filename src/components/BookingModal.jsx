import { useState } from 'react'

function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nomeCliente: '', telefone: '', modeloCarro: '', servico: '', data: '', hora: '', observacoes: ''
  })

  const [agendamentosRealizados, setAgendamentosRealizados] = useState([]);

  const horariosDisponiveis = [
    "08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  if (!isOpen) return null;

  // --- A MÁGICA DO TEMPO COMEÇA AQUI ---
  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');

  const dataDeHojeStr = `${ano}-${mes}-${dia}`;
  const horaAtual = agora.getHours();
  // ---------------------------------------

  const ocupadosNestaData = agendamentosRealizados
    .filter(agendamento => agendamento.data === formData.data)
    .map(agendamento => agendamento.hora);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataHoraCombinada = `${formData.data}T${formData.hora}`;

    const dadosParaEnviar = {
      nomeCliente: formData.nomeCliente,
      telefone: formData.telefone,
      modeloCarro: formData.modeloCarro,
      servico: formData.servico,
      dataHora: dataHoraCombinada,
      observacoes: formData.observacoes
    }

    try {
      const resposta = await fetch('http://localhost:8080/agendamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosParaEnviar)
      })

      if (resposta.status === 201) {

        setAgendamentosRealizados([...agendamentosRealizados, { data: formData.data, hora: formData.hora }]);

        const dataFormatadaBr = formData.data.split('-').reverse().join('/');

        const mensagem = `Olá, JF Details!\n\nGostaria de confirmar meu agendamento:\n\n* DADOS DO CLIENTE *\nNome: ${formData.nomeCliente}\nContato: ${formData.telefone}\n\n* DADOS DO VEÍCULO *\nCarro: ${formData.modeloCarro}\nServiço: ${formData.servico}\n\n* AGENDAMENTO *\nData: ${dataFormatadaBr} às ${formData.hora}\nObs: ${formData.observacoes || 'Nenhuma'}\n\nAguardo a confirmação!`;

        const textoCodificado = encodeURIComponent(mensagem);
        const numeroJFDetails = "5515998390907";
        const linkWhatsApp = `https://wa.me/${numeroJFDetails}?text=${textoCodificado}`;

        // MUDANÇA 1: Alerta o usuário antes de sair da página
        alert("Agendamento registrado com sucesso! Vamos concluir no WhatsApp.");

        // MUDANÇA 2: Limpa o formulário e fecha o modal para deixar tudo pronto para o próximo
        setFormData({ nomeCliente: '', telefone: '', modeloCarro: '', servico: '', data: '', hora: '', observacoes: '' })
        onClose();

        // MUDANÇA 3: O REDIRECIONAMENTO NA MESMA ABA (Burla bloqueador de pop-ups)
        window.location.href = linkWhatsApp;

      } else {
        alert("Ops! Verifique os dados. Preencha todos os campos corretamente.")
      }
    } catch (erro) {
      alert("Erro ao conectar com o servidor. O Java está rodando?")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-chumbo p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-xl border border-gray-800 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-dourado text-3xl font-bold">&times;</button>
        <h2 className="text-2xl md:text-3xl text-dourado mb-6 text-center font-bold tracking-wide">Agende seu Horário</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="nomeCliente" value={formData.nomeCliente} onChange={handleChange} placeholder="Seu Nome Completo" required
            className="w-full bg-escuro text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors" />

          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Seu WhatsApp (ex: 15 99999-9999)" required
            className="w-full bg-escuro text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors" />

          <input type="text" name="modeloCarro" value={formData.modeloCarro} onChange={handleChange} placeholder="Modelo do Veículo (ex: Porsche 911)" required
            className="w-full bg-escuro text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors" />

          <select name="servico" value={formData.servico} onChange={handleChange} required
            className="w-full bg-escuro text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors">
            <option value="" disabled>Selecione o Serviço</option>
            <option value="Lavagem Premium">Lavagem Premium</option>
            <option value="Lavagem Simples">Lavagem Simples</option>
            <option value="Polimento Técnico">Polimento Técnico</option>
            <option value="Vitrificação de Pintura">Vitrificação de Pintura</option>
          </select>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-400 text-xs md:text-sm mb-1 ml-1">Data</label>
              <input
                type="date"
                name="data"
                value={formData.data}
                onChange={handleChange}
                required
                min={dataDeHojeStr}
                className="w-full bg-escuro text-gray-400 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-400 text-xs md:text-sm mb-1 ml-1">Horário</label>

              <select
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
                disabled={!formData.data}
                className="w-full bg-escuro text-gray-400 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" disabled>
                  {formData.data ? "Escolha o horário" : "Escolha a data"}
                </option>

                {horariosDisponiveis.map((horaOpcao) => {
                  const taOcupado = ocupadosNestaData.includes(horaOpcao);
                  const isHoje = formData.data === dataDeHojeStr;
                  const horaDoSelect = parseInt(horaOpcao.split(':')[0], 10);
                  const tempoEsgotado = isHoje && (horaDoSelect <= horaAtual);

                  const desabilitar = taOcupado || tempoEsgotado;

                  let etiqueta = "";
                  if (taOcupado) etiqueta = "(Indisponível)";
                  else if (tempoEsgotado) etiqueta = "(Encerrado)";

                  return (
                    <option key={horaOpcao} value={horaOpcao} disabled={desabilitar} className={desabilitar ? "text-gray-600" : "text-gray-300"}>
                      {horaOpcao} {etiqueta}
                    </option>
                  );
                })}
              </select>

            </div>
          </div>

          <textarea name="observacoes" value={formData.observacoes} onChange={handleChange} placeholder="Observações (opcional)" rows="2"
            className="w-full bg-escuro text-gray-300 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-dourado transition-colors"></textarea>

          <button type="submit"
            className="w-full bg-dourado text-escuro font-bold text-lg py-4 rounded-lg mt-4 hover:bg-yellow-600 transition-all duration-300 uppercase tracking-widest shadow-lg">
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
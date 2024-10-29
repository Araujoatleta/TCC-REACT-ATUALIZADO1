import React, { useState } from "react";

function Relatorios() {
  // Hook de estado para armazenar os relatórios
  const [relatorioTexto, setRelatorioTexto] = useState("");
  const [historico, setHistorico] = useState([]);

  // Função para enviar o relatório para o histórico
  const enviarRelatorio = () => {
    if (relatorioTexto.trim() !== "") {
      setHistorico([...historico, relatorioTexto]); // Adiciona o novo relatório no histórico
      setRelatorioTexto(""); // Limpa o campo de texto
    } else {
      alert("Por favor, insira algum texto no relatório.");
    }
  };

  // Função para excluir um relatório do histórico
  const excluirRelatorio = (index) => {
    const novoHistorico = historico.filter((_, i) => i !== index);
    setHistorico(novoHistorico);
  };

  return (
    <div>
      {/* Section de envio de relatórios */}
      <section className="relatorios">
        <div id="h2-relatorio">
          <h2>RELATÓRIOS</h2>
        </div>
        <textarea
          id="relatorio-texto"
          placeholder="Adicionar relatório/atualizações"
          value={relatorioTexto}
          onChange={(e) => setRelatorioTexto(e.target.value)}
        ></textarea>
        <button id="enviar" onClick={enviarRelatorio}>
          Enviar
        </button>
      </section>

      {/* Section histórico */}
      <section className="historico">
        <div className="h2-historico">
          <h2>Meu histórico:</h2>
        </div>
        <div className="caixa-historico" id="caixa-historico">
          {historico.length === 0 ? (
            <p id="historico-conteudo">O histórico será exibido aqui.</p>
          ) : (
            historico.map((item, index) => (
              <div className="relatorio-item" key={index}>
                <p >{item}</p>
                <button
                  className="btn-excluir"
                  onClick={() => excluirRelatorio(index)}
                >
                  Excluir
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Relatorios;
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'; // Importando axios
import 'bootstrap/dist/css/bootstrap.css';
import './relatorio.css'; 
import backgroundImage from '../../assets/images/background1.png';
import BackgroundImagem1 from '../../assets/images/img-relatorio.svg';

const Relatorio = () => {
  const [relatorioTexto, setRelatorioTexto] = useState("");
  const [historico, setHistorico] = useState([]);

  // Função para adicionar um relatório ao histórico
  const enviarRelatorio = async () => {
    if (relatorioTexto.trim() === "") {
      alert("Por favor, adicione um texto no relatório.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/relatorio', {
        email: "tudoaqui@404.com", // Substitua por dados reais
        senha: "nada123",             // Substitua por dados reais
        texto: relatorioTexto           // O texto do relatório
      });

      // Adiciona o texto do relatório ao histórico
      setHistorico(prevHistorico => [...prevHistorico, response.data.texto]);
      setRelatorioTexto(""); // Limpa o campo de texto após o envio

    } catch (error) {
      console.error("Erro ao enviar relatório:", error);
      
      if (error.response) {
        alert(`Erro: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        alert("Erro na requisição. O servidor não respondeu.");
      } else {
        alert("Erro desconhecido: " + error.message);
      }
    }
  };

  // Função para excluir um item do histórico
  const excluirRelatorio = (index) => {
    const novoHistorico = historico.filter((_, i) => i !== index);
    setHistorico(novoHistorico);
  };

  return (
    <>
      <header>
        <aside>
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu" data-theme='t-orange'>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/home'}><li>Barber Area</li></Link>
              <Link to={'/desktop'}><li>Desktop</li></Link>
              <Link to={'/perfil'}><li>Editar Perfil</li></Link>
              <Link to={'/relatorio'}><li>Relatórios</li></Link>
              <Link to={'/agenda'}><li>Agenda</li></Link>
            </ul>
          </div>
        </aside>
      </header>

      <section className="s-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="container">
          <div className="left-area">
            <h1>Relatórios</h1>
            <p>Nesta área você pode adicionar pendências e informações relacionadas ao trabalho diário.</p>
          </div>
        </div>
      </section>

      <section className="relatorios">
        <div id="h2-relatorio">
          <h2>Adicionar relatório/atualizações:</h2>
        </div>
        <textarea
          id="relatorio-texto"
          placeholder="Adicionar relatório/atualizações"
          value={relatorioTexto}
          onChange={(e) => setRelatorioTexto(e.target.value)}
        />
        <button id="enviar" onClick={enviarRelatorio}>
          Enviar
        </button>
      </section>

      <section className="s-relatorio" style={{ backgroundImage: `url(${BackgroundImagem1})` }}>
      </section>

      <section className="historico">
        <div className="h2-historico">
          <h2>Meu histórico / Organize suas anotações da forma que desejar</h2>
        </div>
        <div className="caixa-historico" id="caixa-historico">
          {historico.length === 0 ? (
            <p id="historico-conteudo">O histórico será exibido aqui.</p>
          ) : (
            historico.map((item, index) => (
              <div className="relatorio-item" key={index}>
                <p>{item}</p>
                <button className="btn-excluir" onClick={() => excluirRelatorio(index)}>
                  Excluir
                </button>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Relatorio;
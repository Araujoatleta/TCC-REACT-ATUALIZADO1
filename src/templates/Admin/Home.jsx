import { useEffect, useState, useRef } from 'react'; 
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Header from "../../components/Header/Header"; 
import Sidebar from '../../components/Menu/Sidebar'; 
import logo from '../../assets/images/home.png'; 
import './Home.css'; 
import backgroundImage from '../../assets/images/background1.png'; 
import Image1 from '../../assets/images/imagem.svg'; 
import Imagem from '../../assets/images/footer.png'; 

const Home = () => { 
  const carousel = useRef(null); 

  const handleLeftClick = (e) => { 
    e.preventDefault(); 
    carousel.current.scrollLeft -= carousel.current.offsetWidth; 
  }; 

  const handleRightClick = (e) => { 
    e.preventDefault(); 
    carousel.current.scrollLeft += carousel.current.offsetWidth; 
  }; 

  const [barbearias, setBarbearias] = useState([]);

  const handleAddNewItem = (event) => {
    const file = event.target.files[0]; // Pega o primeiro arquivo selecionado

    if (file) {
      const reader = new FileReader(); // Cria um FileReader para ler a imagem

      reader.onload = (e) => {
        const newBarbearia = {
          id: barbearias.length + 1,
          img: e.target.result, // Usa o resultado do FileReader como fonte da imagem
          name: 'Nova Barbearia',
          status: 'Ativa',
        };

        // Atualiza o estado com a nova barbearia
        setBarbearias((prevBarbearias) => [...prevBarbearias, newBarbearia]);
      };

      // Lê o arquivo de imagem como URL
      reader.readAsDataURL(file);
    }
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
              <Link to={'/'}> 
                <li>Home</li> 
              </Link> 
              <Link to={'/home'}> 
                <li>Barber Area</li> 
              </Link> 
              <Link to={'/desktop'}> 
                <li>Desktop</li> 
              </Link> 
              <Link to={'/perfil'}> 
                <li>Editar Perfil</li> 
              </Link> 
              <Link to={'/relatorio'}> 
                <li>Relatórios</li> 
              </Link> 
              <Link to={'/agenda'}> 
                <li>Agenda</li> 
              </Link> 
            </ul> 
          </div> 
        </aside> 
      </header>

      <section className="s-hero" style={{ backgroundImage: `url(${backgroundImage})` }}> 
        <div className="container"> 
          <div className="left-area"> 
            <h1>Admin Area</h1>
            <p>
              Olá! Esta é a área administrativa do nosso site, aqui você pode gerir sua(s) barbearia(s), membros da sua equipe, ver avaliações e etc.  
              Clique em nossa logo presente no canto superior esquerdo para abrir o menu de opções.  
            </p>
          </div>
        </div>
      </section>

      
      <section className="carrossel">
        <h3>Sua(s) barbearia(s) disponível(is):</h3>
        <div className="carrossel-container" ref={carousel}>
          {barbearias.map((barbearia) => (
            <div className="item" key={barbearia.id}>
              <img src={barbearia.img} alt={barbearia.name} />
              <p>{barbearia.name}</p>
              <span className={`status ${barbearia.status === 'Ativa' ? 'ativa' : 'desativa'}`}>
                {barbearia.status}
              </span>
            </div>
          ))}
          <div className="item add-new" onClick={() => document.getElementById('addImageInput').click()}>
            <p>+</p>
            <input type="file" id="addImageInput" accept="image/*" style={{ display: 'none' }} onChange={handleAddNewItem} />
          </div>
        </div>
      </section>
        <div className="button1s"> 
          <button className='btt' onClick={handleLeftClick}> 
            <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" /> 
          </button> 
        </div> 

        <div className="button2s"> 
          <button className='btt2' onClick={handleRightClick}> 
            <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" /> 
          </button> 
        </div> 

      <section className="s-villain" style={{ backgroundImage: `url(${Image1})` }}> 
        <div className="container"> 
          <img src="../img/i" alt="villain" /> 
        </div> 
      </section>

      {/* Rodapé */}
      <footer>
        <h2 className="Depoimento">DEPOIMENTOS</h2>
        <div className="text-section">
          <p className="testimonial-text">"Desde que comecei a parceria com a BC (Barber's Club) nunca mais tive problemas com horários e agendamentos"</p>
          <p className="author">"R10"</p>
          <img src={Imagem} id="imagem-footer" alt="footer" />
        </div>
      </footer>
    </>
  ); 
}; 

export default Home;
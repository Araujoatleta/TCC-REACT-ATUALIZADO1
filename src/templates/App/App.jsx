import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import Logo from '../../assets/images/1.svg'
import backgroundImage from '../App/bg-hero.png';
import Image from '../../assets/images/imagem_background.svg';
function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5173/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <>
<header>
      <div className="container">
        <a href="./img/1.svg">
          <img src={Logo} alt="Logo barbearia"/>
        </a>
            <Link to={'/login'} className='btn desktop'>Admin</Link>
            <a href="#" className="btn mobile">Comprar</a>
      </div>
    </header>
    <section className="s-hero"  style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container">
        <div className="left-area">
          <h1>BARBA DO MÊS</h1>
          <p>A barba do mês seria uma votação dos melhores serviços de cada barbearia avaliada, 
            sendo uma forma de mostrar os cortes em destaque de barbearias em geral.</p>
          <div className="value">
            <h3>Clique Abaixo</h3>
            <div className="btns">
              <a href="#" className="btn">Instale o nosso APP</a>
            </div>
  </div>
          </div>
    </div>
</section>
<section className='carousel1'>
<div className="carousel1" ref={carousel}>
        {data.map((item) => {
          const { id, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} />
              </div>
            </div>
          );
        })}
      </div>
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
      
      </section>
    <>
     <section className="s-villain"  style={{ backgroundImage: `url(${Image})` }}></section>

     <section className="pricing-section">
          <h5 className="h1-last">GARANTA O SEU !!!
            ESCOLHA O QUE MAIS TE ATENDE e se identifica.</h5>

          <div className="plans-container">
            <div className="plan plan-bronze">
              <p className="slogan-secundario">Edição First
              </p>
              <h2>PLAN BRONZE</h2>
              <ul>
                <li>Cortes ilimitados</li>
                <li>1 Penteado</li>
              </ul>
              <p className="price">R$ 89,90</p>
              <button>Comprar</button>
            </div>

            <div className="plan plan-silver">
              <p className="slogan-principal">Edição Premium
              </p>
              <h2>PLAN SILVER</h2>
              <ul>
                <li>Luzes</li>
                <li>Limpeza de pele</li>
                <li>Barboterapia</li>
                <li>Prioridade no atendimento</li>
                <li>Sombrancelha</li>
                <li>Corte ilimitado</li>
                <li>Nutrição capilar</li>
                <li>Hidratação</li>
              </ul>
              <p className="price">R$ 149,90</p>
              <button>Comprar</button>
            </div>

            <div className="plan plan-deluxe" placeholder="Eduardo">
              <p className="slogan-terciario">Edição Deluxy</p>
              <h2>PLAN DELUXE</h2>
              <ul>
                <li>Luzes</li>
                <li>Limpeza de pele</li>
                <li>Barboterapia</li>
                <li>Prioridade no atendimento</li>
                <li>Sombrancelha</li>
                <li>Corte ilimitado</li>
                <li>Nutrição capilar</li>
                <li>Hidratação</li>
                <li>Visagismo/Barbearias especiais</li>
                <li>2 por 1: Leve um acompanhante uma vez por mês de graça!</li>
                <li>Cortes ilimitados</li>
              </ul>
              <p className="price">R$ 399,50</p>
              <button>Comprar</button>
            </div>
          </div>
        </section><footer>
          <div className="container">
            <div className="left-area">
              <h3>©Barbearia</h3>
              <p>Com a nossa Empresa de Intermediação de Serviços de Barbearia, tanto as barbearias quanto os
                clientes podem desfrutar de uma experiência mais eficiente
                e satisfatória no mundo dos serviços de corte de cabelo e barbearia.</p>
            </div>

            <div className="right-area">
              <a href="https://designboost.com.br/" target="_blank">
                <img src="img/1.svg" alt="" />
              </a>
            </div>
          </div>
        </footer></>
  </>
      )
      }
export default App;

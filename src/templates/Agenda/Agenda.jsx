import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './agenda.css';
import backgroundImage from '../../assets/images/background1.png';
import Image1 from '../../assets/images/imagem.svg';
import Imagem from '../../assets/images/footer.png';

const Agenda = () => {
    const [data, setData] = useState([]); // Dados do carrossel
    const [servicos, setServicos] = useState([]); // Dados dos serviços
    const [horarios, setHorarios] = useState([]); // Dados dos horários
    const [showServicos, setShowServicos] = useState(true); // Estado para mostrar serviços ou horários
    const carousel = useRef(null);

    // Carregar dados ao montar o componente
    useEffect(() => {
        fetch('http://localhost:5173/static/shoes.json')
            .then((response) => response.json())
            .then(setData);

        carregarDadosServicos();
        carregarDadosHorarios();
    }, []);

    const carregarDadosServicos = async () => {
      try {
          const response = await fetch('servicos.json'); // Ajuste o caminho conforme necessário
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          console.log('Serviços carregados:', data); // Verifique se os dados estão sendo carregados
          setServicos(data);
      } catch (error) {
          console.error('Erro ao carregar serviços:', error);
      }
  };
  
  const carregarDadosHorarios = async () => {
      try {
          const response = await fetch('horario.json'); // Ajuste o caminho conforme necessário
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          console.log('Horários carregados:', data); // Verifique se os dados estão sendo carregados
          setHorarios(data);
      } catch (error) {
          console.error('Erro ao carregar horários:', error);
      }
  };
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) return null;

    const renderizarTabelaServicos = () => (
        <table id="tabela-servicos">
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>ID</th>
                    <th>Nome do Cliente</th>
                    <th>Horário</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {servicos.map(servico => (
                    <tr key={servico.id}>
                        <td>{servico.tipo}</td>
                        <td>{servico.id}</td>
                        <td>{servico.cliente}</td>
                        <td>{servico.horario}</td>
                        <td><button className={`status-btn ${getStatusClass(servico.status)}`}>{servico.status}</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderizarTabelaHorarios = () => (
        <table id="tabela-horarios" style={{ display: showServicos ? 'none' : 'table' }}>
            <thead>
                <tr>
                    <th>Horário</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {horarios.map(horario => (
                    <tr key={horario.horario}>
                        <td>{horario.horario}</td>
                        <td className={horario.status === 'Livre' ? 'status-livre' : 'status-ocupado'}>
                            {horario.status}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const getStatusClass = (status) => {
        if (status === "Realizado") return "status-realizado";
        if (status === "Não realizado") return "status-nao-realizado";
        return "";
    };

    return (
        <>
            {/* Header and Sidebar */}
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

            {/* Background Section */}
            <section className="s-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="container">
                    <div className="left-area">
                        <h1>Agenda</h1>

                        <p> 
                        É aqui que você poderá ver todas as informações do serviço solicitado e dados do cliente!.
                        As tabelas estão separadas dentro dos membros, escolha o membro que desejar e veja as informações
                        </p>
                    </div>
                </div>
            </section>
    <div className="barbearia-section">
        <div className="barbearia-info">
            <img src="https://via.placeholder.com/80" alt="Imagem da barbearia"/>
            <h3>Batista Barbearia</h3>
            <p>Média (1239 avaliações)</p>
            <div class="rating">
                <span>4.3/5</span>
                <div class="stars">
                    <input type="radio" name="star" id="star1"/><label for="star1">★</label>
                    <input type="radio" name="star" id="star2"/><label for="star2">★</label>
                    <input type="radio" name="star" id="star3"/><label for="star3">★</label>
                    <input type="radio" name="star" id="star4"/><label for="star4">★</label>
                    <input type="radio" name="star" id="star5"/><label for="star5">★</label>
              </div>
              </div>           
        </div>
        <div class="descricao">
            Temos os melhores cortes da região metropolitana, nossos clientes saem satisfeitos pois recebem o serviço de maior qualidade!
        </div>
        </div>
        
        <section className="carousel1" style={{ display: 'flex', overflowX: 'hidden' }} onWheel={(e) => handleWheel(e, carousel)}>
          <div className="button1s left">
            <button className='btt' onClick={() => carousel.current.scrollLeft -= carousel.current.offsetWidth}>
              <img src="/static/images/setaleft.svg" alt="Scroll Left" />
            </button>
          </div>
          <div className="carousel" ref={carousel} style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory' }}>
            {data.map((item) => {
              const { id, image } = item;
              return (
                <div className="item" key={id} style={{ flex: '0 0 auto', marginRight: '10px', scrollSnapAlign: 'start' }}>
                  <div className="image">
                    <img src={image} alt={`item-${id}`} style={{ width: '100%', height: 'auto' }} />
                  </div>
                </div>
              );
            })}
          </div>
                    {/* Buttons for Carousel */}
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

            {/* New Section for Services and Schedules */}
            <section className="services-schedules">
                {/* Buttons to Toggle Tables */}
                <div className="tabs">
                    <button onClick={() => setShowServicos(true)} className={showServicos ? "active" : ""}>Serviços</button>
                </div>
               <div className="tabs2">
                <button onClick={() => setShowServicos(false)} className={!showServicos ? "active" : ""}>Horários</button>
                </div>
                {/* Render Tables */}
                {showServicos ? renderizarTabelaServicos() : renderizarTabelaHorarios()}
            </section>

            {/* Villain Section */}
            <section className="s-villain" style={{ backgroundImage: `url(${Image1})` }}>
                {/* Your existing content */}
                {/* ... */}
            </section>

                    {/* Buttons for Carousel */}
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
  
        </>
    );
}

export default Agenda;
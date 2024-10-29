import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './perfil.css';
import backgroundImage from '../../assets/images/background1.png';
import Image1 from '../../assets/images/3.svg';

const Perfil = () => {
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
    }, []);

    const Carrossel = () => {
        const [barbearias, setBarbearias] = useState([
    
        ]);
    
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
            <section className="carrossel">
                <h3>Sua(s) barbearia(s) disponível(is):</h3>
                <div className="carrossel-container">
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
        );
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
                        <h1>Editar perfil</h1>

                        <p> 
                        Nesta área você anotará pendências e coisas que acontecem no horário de trabalho, explicar com as inatividades de funcionários dando justificativas/explicações para ausentes de funcionários.
                        </p>
                    </div>
                </div>
            </section>

            {/* Barbearia Section */}
            <div className="barbearia-section">
                {/* Informações da Barbearia */}
                <div className="barbearia-info">
                    <img src="https://via.placeholder.com/80" alt="Imagem da barbearia"/>
                    <h3>Batista Barbearia</h3>
                    <p>Média (1239 avaliações)</p>
                    <div className="rating">
                        {[...Array(5)].map((_, index) => (
                            <>
                                <input type="radio" name="star" id={`star${index + 1}`} />
                                <label htmlFor={`star${index + 1}`}>★</label>
                            </>
                        ))}
                        {/* Exibir a nota média */}
                        <span>4.3/5</span>
                    </div>           
                </div>

                {/* Formulário de Perfil */}
                <div className="perfil-form">
                    <h3>Sobre a barbearia</h3>
                    <form>
                    <label>Email:</label>
                        <input className='email' type="email" required />

                        <label>Nome e Sobrenome</label>
                        <input className='email' type="nome" required />
                       

                        <label htmlFor="file">Anexados:</label>
                        <input type="file" id="file" name="file"/>

                       
                        
                        <label htmlFor="file">Gênero:</label>
                        <input type="radio" id="novo" name="foto" value="Masculino"/> Masculino
                        <input type="radio" id="novo" name="foto" value="Masculino"/> Feminino
                        <input type="radio" id="anexo" name="foto" value="Indefinido"/> Indefinido

                        <Link className='button2' to={'/perfil2'}>
                         Proximo</Link>
                    </form>
                </div>

            </div>

            {/* Villain Section */}
            <section className="s-villain" style={{ backgroundImage: `url(${Image1})` }}>
                {/* Your existing content */}
                {/* ... */}
            </section>
            {/* Carrossel Component */}
           
            <Carrossel />
        </>
    );
};

export default Perfil;
import { Link} from "react-router-dom";
import './Cadastro3.css';
const Cadastro3 = () => {

    return (
        <div className="wrapper">
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Sobre Barbearia</h2>
            <div className="inputbox">
              <input type="name" required/>
              <label htmlFor="">Nome/apelido</label>
            </div>
            <div className="inputbox">
              <input type="number" required/>
              <label htmlFor="">Quant. de Funcionários</label>
            </div>
            <div className="form">
              <label>Enviar arquivo:</label>
             <input type="file" name="arquivo"/>

            </div>
            <Link to={'/cadastro4'}
          className='btn btn-sm btn-warning'>
          Proximo
        </Link>
            <div className="forget">
            </div>
            <div className="register">
              <p>If have a account ? <a className="a1" href="../Login/index.html">Logue</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>

 )
}

export default Cadastro3
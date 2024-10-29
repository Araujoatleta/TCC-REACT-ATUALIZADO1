import { Link} from "react-router-dom";
import './Cadastro2.css';
const Cadastro2 = () => {

    return (
<div className="wrapper">

        <section>
          <div className="form-box">
            <div className="form-value">
              <form action="">
    
                <h2>Localização</h2>
                <div className="inputbox">
                  <input type="number" required/>
                  <label htmlFor="">Cep</label>
                </div>
    
                <div className="inputbox">
                  <ion-icon name="name"></ion-icon>
                  <input type="nome" required/>
                  <label htmlFor="">Bairro</label>
                </div>
    
                <div className="inputbox">
                  <ion-icon name="name"></ion-icon>
                  <input type="nome" required/>
                  <label htmlFor="">Complemento (opcional)</label>
                </div>
    
                <div className="inputbox">
                  <ion-icon name="name"></ion-icon>
                  <input type="nome" required/>
                  <label htmlFor="">Cidade</label>
                </div>
    
                <div className="inputbox">
                  <ion-icon name="name"></ion-icon>
                  <input type="nome" required/>
                  <label htmlFor="">Logradouro</label>
                </div>
                <Link to={'/cadastro3'}
          className='btn btn-sm btn-warning'>
          Proximo
        </Link>
    
                <div className="forget">
                 
                  <label>
                    <input type="checkbox"/> Remember me
                  </label>
    
                </div>
                   
      
                <div className="register">
                  <p>if have a account ? <a href="../Login/index.html">logue</a></p>
                </div>
    
              </form>
            </div>
          </div>
    
          <div className="form-box1">
          <div className="form-value1">
            
            </div>
           
          
          </div>
        </section>
      </div>  
 )
}

export default Cadastro2
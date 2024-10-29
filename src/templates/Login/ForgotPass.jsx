import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/system-logo_128_x_128.png';
import './forgotpass.css';

const ForgotPass = () => {

    const navigate = useNavigate();

    const goto = () => {
        navigate("/");
    }

    const backto = () => {
        navigate("/");
    }


    return (
                <div class="wrapper">
                <section>
                    <div class="form-box">
                    <div class="form-value">
                        <form action="">
                        <h2>Recupere sua Senha</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required/>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required/>
                            <label for="">New Password</label>
                        </div>
                        <div class="forget">
                        </div>
                        <button type="submit" className='btn btn-sm btn-warning'>
                                Logue
                            </button>
                        <div class="register">
                            <p>Do you remeber the password ?  <Link to="/Login">Login</Link></p>
                        </div>
                        </form>
                    </div>
                    </div>
                </section>
                </div>
    )
    }
export default ForgotPass
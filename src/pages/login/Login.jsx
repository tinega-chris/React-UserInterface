import  './login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Tinega Social</h3>
                <span className="loginDesc">connect with friends around 
                world in TinegaSocial</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input type="email"placeholder='email' className="loginInput" />
                <input type="password"placeholder='password' className="loginInput" />
                <button className="logInButton">log In</button>
                <span className="loginForgot">forgot Password?</span>
                <button className='loginRegistrationButton'>Create new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

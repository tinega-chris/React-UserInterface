import  './register.css'

export default function Register() {
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
                <input type="text"placeholder='username' className="loginInput" />
                <input type="email"placeholder='email' className="loginInput" />
                <input type="password"placeholder='password'
                 className="loginInput" />
                 <input type="password"placeholder='password Again' className="loginInput" />
                <button className="logInButton">Sign Up</button>
                <button className='loginRegistrationButton'>Login
                into account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

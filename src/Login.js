import React from "react";

const Login = (props) =>{

    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
    } = props;
    
    return(
        <section className ="login">
            <div className="loginContainer">
                <label>Nombre de Usuario</label>
                <input 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} >
                </input>

                <p className="erroMsg">{emailError}</p>
                <label>Contraseña</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <p className="errorMsg">{passwordError}</p>

              <div className="btnContainer">
                  {hasAccount ? (
                    <>
                    <button className="bprimario" onClick={handleSignup}>Registrarse</button>
                    <p>Tengo una cuenta <span onClick={() => setHasAccount(!hasAccount)}>Iniciar Sesión</span></p>                    
                    </>
                  ) : (
                    <>
                    <button className="bprimario" onClick={handleLogin}>Iniciar Sesión</button>
                    <p>¿No tienes una cuenta? <span onClick={() => setHasAccount(!hasAccount)}>Registrate</span> </p>
                    </>
                  )}

              </div>  
            </div>
        </section>
    )
}

export default Login;
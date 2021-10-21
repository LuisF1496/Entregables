import './App.css';
import React, {useState, useEffect} from "react";
import firebase from './firebase';
import Login from './Login';
import Crud from './Crud';


const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const [emailError, setElmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearImputs = () =>{
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setElmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
   firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setElmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    firebase
       .auth()
       .createUserWithEmailAndPassword(email, password)
       .catch(err => {
         switch (err.code) {
           case "auth/email-already-use":
           case "auth/invalid-email":          
             setElmailError(err.message);
             break;
           case "auth/weak-password":
             setPasswordError(err.message);
             break;
         }
       });
      }
  const handleLogout = () =>{
    firebase.auth().signOut();
  };

  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        clearImputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    })
  };

  useEffect(() =>{
    authListener();
  },[]);

  return (
    <><div className="App">   
    {user ? (
         <Crud handleLogout={handleLogout}></Crud>
        
    ) : (
        <Login 
        email={email}
        setEmail={setEmail} 
        password={password}
        setPassword={setPassword} 
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
     />
     
    )}      
    </div>
    
    
  
      
      </>
  );
}

export default App;

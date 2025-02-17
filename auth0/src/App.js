
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {user , logout , loginWithRedirect ,isAuthenticated } = useAuth0();
   console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <h3>{isAuthenticated && user.name }</h3>
         { isAuthenticated ? <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>:<button onClick={() => loginWithRedirect()}>Log In</button> }
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { useState } from "react";
import { ToastContainer } from "react-toastify"
import GlobalStyle from './styles/global';

function App() {

  const [user, setUser] = useState()

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Switch>
        <Route exact path="/">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard user={user} setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

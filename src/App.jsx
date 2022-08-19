import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { ToastContainer } from "react-toastify"
import GlobalStyle from './styles/global';
import UserProvider from './contexts/UserContext';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalStyle />
        <ToastContainer />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </UserProvider>
    </div>
  );
}

export default App;

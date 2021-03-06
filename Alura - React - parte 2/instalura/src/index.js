import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route} from 'react-router-dom';
/* import createHistory from 'history/createBrowserHistory' */

function verificaAutenticacao(nextState,replace) {
    if(localStorage.getItem('auth-token') === null){
      replace('/?msg=você precisa estar logado para acessar o endereço');
    }
  }
  

ReactDOM.render((

    <BrowserRouter>
     
                <Route path="/" component={Login} />
                <Route path="/timeline" component={App} onEnter={verificaAutenticacao}/>
      <Route path="/logout" component={Logout}/>
         
    </BrowserRouter>),

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


 /*  <App />, document.getElementById('root') */
import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import {FormularioAutor, TabelaAutores} from './Autor/Autor';


class App extends Component {

  constructor() {
    super();
    this.state = {lista : []};
  }

  componentDidMount() {

    let url = `https://cdc-react.herokuapp.com/api/autores`;
    
    fetch(url, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => data.filter(dado => dado.id < 100))
    .then(data => this.setState({lista:data}))
    .catch(error => console.error(error));
    
  }

  
  render() {
    return (
       
      <div id="layout">
    
        <a href="#menu" id="menuLink" className="menu-link">
        
          <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Company</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
                </ul>
            </div>
        </div>

        <div id="main">
            <div className="header">
              <h1>Cadastro de Autores</h1>
            </div>
            <br/>
            <div className="content" id="content">
              <FormularioAutor />
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        this.state.lista.map(autor => {
                          return (
                            <tr key={autor.id}>
                              <td>{autor.nome}</td>
                              <td>{autor.email}</td>
                            </tr>
                          );
                        })
                      }               
                  </tbody>
                </table> 
              </div>     
          </div>        
        </div>
      </div>
    );
  }
}

export default App;

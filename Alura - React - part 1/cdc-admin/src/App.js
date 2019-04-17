import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {

  constructor() {
    super();
    this.state = {lista : [], nome : '', email : '', senha : ''};
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

  enviaForm(evento) {

    evento.preventeDefault();

    let url = `https://cdc-react.herokuapp.com/api/autores`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({nome: this.state.nome , email:this.state.email , senha:this.state.senha}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => console.log(res.status))
    .catch(error => console.error(error));
  }

  setNome(evento) {
    this.setState({nome:evento.target.value});
  }

  setEmail(evento) {
    this.setState({email:evento.target.value});
  }

  setSenha(evento) {
    this.setState({senha:evento.target.value});
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
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="POST">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value={this.state.nome}  onChange={this.setNome.bind(this)}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value={this.state.email}  onChange={this.setEmail.bind(this)}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha.bind(this)}/>                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
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

import React, { Component } from 'react';
import {InputCustomizado, InputSubmit} from '../componentes/';
/* import InputSubmit from './componentes/inputSubmit'; */

export class FormularioAutor extends Component {

    constructor() {
        
        super();
        this.state = {nome : '', email : '', senha : ''}
    }

    render() {

        return(

            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="POST">
                  <InputCustomizado id="nome" type="text" label="Nome" name="nome" value={this.state.nome}  onChange={this.setNome.bind(this)}/>                  
                  <InputCustomizado id="email" type="email" label="Email" name="email" value={this.state.email}  onChange={this.setEmail.bind(this)}/>                  
                  <InputCustomizado id="senha" type="password" label="Senha" name="senha" value={this.state.senha}  onChange={this.setSenha.bind(this)}/>                  
                  <InputSubmit type="submit" label="Gravar" />
                </form>             

              </div>  
        );
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
    
}


export class TabelaAutores extends Component {

    render() {

        return(

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
        );
    }
}




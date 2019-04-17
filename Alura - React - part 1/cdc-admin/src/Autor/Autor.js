import React, { Component } from 'react';
import InputCustomizado from '../componentes/inputCustomizado';
import InputSubmit from '../componentes/inputSubmit';
import Redux from 'redux';
import TratadorErros from '../Util/TratadorErros'

class FormularioAutor extends Component {

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
        .then(res => console.log(res))
        .catch(error => {
            if(error.status === 400){
                new TratadorErros().publicaErros(error.responseJSON);
            }
        });
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


class TabelaAutores extends Component {

    

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
                    this.props.lista.map(autor => {
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

export default class AutorBox extends Component {

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

      atualizaListagem(novaLista) {

        this.setState({lista:novaLista});
      }


    render() {

        return(

            <div>
                <FormularioAutor callbackAtualizaListabem={this.atualizaListagem.bind(this)} />
                <TabelaAutores lista={this.state.lista} />
            </div>
        );
    }
}

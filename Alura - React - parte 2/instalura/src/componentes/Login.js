import React, { Component } from 'react';

export default class Login extends Component {

    constructor(param) {
        super();
        this.state = {mensagem : ''};
    }

    envia(event) {

        event.preventDefault();

        fetch('http://localhost:8080/api/public/login', {
            method:'POST',
            body:JSON.stringify({login:this.login.value, senha:this.senha.value}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        })
        .then(response => {
            if(response.ok){
                return response.text();
            } else {
                throw new Error('Não foi possível fazer o login')
            }
        })
        .then(token => {
            localStorage.setItem('auth-token', token);
            
        })
        .catch(error => console.error(error));
        
    }

    render() {
        return(

            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.mensagem}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={input => this.login = input} />
                    <input type="password" ref={input => this.senha = input}/>
                    <input type="submit" value="login" />
                </form>
            </div>

        );
    }
}
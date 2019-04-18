import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor() {
        
        super();
        this.state = {listaFoto : []};
    }

    componentDidMount() {

        let url = `https://instalura-api.herokuapp.com/api/public/fotos/rafael`;
        /* let url = `https://instalura-api.herokuapp.com/api/public/fotos?X-AUTH-TOKE=${localStorage.getItem('auth-token')}`; */


        fetch(url)
        .then(res => res.json())
        .then(dados => this.setState({listaFoto:dados}))
        .catch(error => console.error(error));
        
    }

    render() {
        return(

            <div className="fotos container">
                {
                    this.state.listaFoto.map(foto => <FotoItem key={foto.id} foto={foto}/>)
                }
            </div>   

        );
    }
}
import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor() {
        
        super();
        this.state = {listaFoto : []};
    }

    componentDidMount() {

        let url = `https://instalura-api.herokuapp.com/api/public/fotos/rafael`;

        fetch(url)
        .then(res => res.json())
        .then(dados => this.setState({listaFoto:dados}))
        .catch(error => console.error(error));
        
    }

    render() {
        return(

            <div className="fotos container">
                {
                    this.state.listaFoto.map(foto => <FotoItem foto={foto}/>)
                }
               {/*  <FotoItem/>
                <FotoItem/> */}
            </div>   

        );
    }
}
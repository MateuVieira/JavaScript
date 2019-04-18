import React, { Component } from 'react';

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>

            </section>            
        );
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-info">
              <div className="foto-info-likes">
                {
                    this.props.foto.likers.map(liker => <a href="#">liker.login,</a>)
                }

                 curtiram

              </div>

              <p className="foto-info-legenda">
                <a className="foto-info-autor">autor </a>
                {this.props.foto.comentario}
              </p>

              <ul className="foto-info-comentarios">

                {
                    this.props.foto.comentarios.map(comentario => {

                        return(

                            <li className="comentario">
                                    <a className="foto-info-autor">{comentario.login} </a>
                                    {comentario.texto}
                            </li>
                        );
                    })
                }
                
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                {/* <img src="https://instagram.fsjk3-1.fna.fbcdn.net/vp/b1487255092b0ee537ebe347fee4a622/5D485009/t51.2885-19/s150x150/57176996_383648115695702_5711857623762993152_n.jpg?_nc_ht=instagram.fsjk3-1.fna.fbcdn.net" alt="foto do usuario"/> */}
                <img src={this.props.foto.urlPerfil} alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <a href="#">
                    {this.props.foto.loginUsuario}
                  </a>  
                </figcaption>
              </figure>
              <time className="foto-data">{this.props.foto.horario}</time>
            </header>            
        );
    }
}

export default class FotoItem extends Component {
    render(){
        return (
          <div className="foto">
            <FotoHeader foto={this.props.foto}/>
           {/*  <img alt="foto" className="foto-src" src="https://instagram.fsjk3-1.fna.fbcdn.net/vp/b03ab65290ffe817571b716602d96f60/5D36DAB5/t51.2885-15/e35/56997706_2359847260926590_5491967438082079981_n.jpg?_nc_ht=instagram.fsjk3-1.fna.fbcdn.net"/> */}
           <img alt="foto" className="foto-src" src={this.props.foto.urlFoto}/>

            <FotoInfo foto={this.props.foto}/>
            <FotoAtualizacoes/>
          </div>            
        );
    }
}
import React, { Component } from 'react';
import './style.css';

export default class BookSearch extends Component {

  render() {
    return (
      <div className={"mainExt"} >
        <div className={'titleDecor'}>
          <h1>BUSCA DE LIVROS</h1>
          <div id={"decoration"} />
        </div>

        <div className={'searchContainer'}>
          <text>Digite o título do livro: </text>
          <input />
        </div>
        <button id={'searchButton'}>Buscar</button>
        <div className={'searchSeparator'} />
      </div>
    );
  }
}

import React, { Component } from "react";
import "./style.css";

export default class Services extends Component {
  render() {
    return (
      <div className={"mainExt"}>
        <div className={'titleDecor'}>
          <h1>NOSSOS SERVIÇOS</h1>
          <div id={"decoration"} />
        </div>

        <div className={"serviceBox"}>
          <div className={"serviceItem"} id={"services01"}>
            <h2 >SERVIÇOS 01</h2>
            <p>Lorem Impsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e embaralhou para fazer um livro de modelos de tipos</p>
            <button>Ler Mais</button>
          </div>

          <div className={"serviceItem"} id={"services02"}>
            <h2>SERVIÇOS 02</h2>
            <p>Lorem Impsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e embaralhou para fazer um livro de modelos de tipos</p>
            <button>Ler Mais</button>
          </div>

          <div className={"serviceItem"} id={"services03"}>
            <h2>SERVIÇOS 03</h2>
            <p>Lorem Impsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e embaralhou para fazer um livro de modelos de tipos</p>
            <button>Ler Mais</button>
          </div>
        </div>
      </div>
    )
  }
}

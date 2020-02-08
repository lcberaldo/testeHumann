import React, { Component } from "react";
import './style.css';
import transp from "../../images/transp.png";
import headerImg from '../../images/header.png';


export default class Header extends Component {
  render() {
    return (
      <>
        <div className={"contExt"} >
          <div className={"contInt"}>
            <img src={transp} alt={"logo"} />
            <nav>
              <a href="#">HOME</a>
              <a href="#">A EMPRESA</a>
              <a href="#">SERVIÇOS</a>
              <a href="#">CONTATO</a>
            </nav>
          </div>
        </div >
        <img id={'headerImg'} src={headerImg} />
      </>
    )
  }
}


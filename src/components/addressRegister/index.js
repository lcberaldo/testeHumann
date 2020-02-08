import React, { Component } from 'react';
import Select from 'react-select';
import './style.css'

const options = [
  { value: '', label: '-' },
  { value: 'sp', label: 'SP' },
  { value: 'rj', label: 'RJ' },
  { value: 'mg', label: 'MG' }
]


export default class AddressRegister extends Component {
  render() {
    return (
      <div className={"mainExt"} >
        <div className={'titleDecor'}>
          <h1>CADASTRO DE ENDEREÇO</h1>
          <div id={"decoration"} />
        </div>
        <div className={'adressContainer'}>
          <div className={'adressItem'}>

            <div className={'itemRaw'}>
              <text>Endereço</text>
              <input />
            </div>

            <div className={'itemRaw'}>
              <text>Complemento</text>
              <input />
            </div>

            <div className={'itemRaw'}>
              <text>Cidade</text>
              <input />
            </div>
          </div>

          <div className={'adressItem'}>

            <div className={'itemRaw'}>
              <text>Número</text>
              <input />
            </div>

            <div className={'itemRaw'}>
              <text>Bairro</text>
              <input />
            </div>

            <div className={'itemRaw'}>
              <text>Estado</text>
              <Select className={'inputSelect'} options={options} />
            </div>

          </div>
        </div>
        <button id={'addressButton'}>Cadastrar</button>
      </div >
    )
  }
}

import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <div className='container-newsletter'>
      <div className="fundo-puple">
          <div className='title-newsletter'>
        <h1>Seu Treino, Seu</h1>
        <p><h1>Resultado.</h1></p>
      </div>
      <form action="" className='newsletter'>
        <h2>Começe Agora!</h2>
        <input type="text" placeholder='Seu Nome' />
        <input type="email" placeholder='Seu Email' />
        <input type="text" placeholder='Defina seu Objetivo'/>
        <button>Criar minha conta gratis</button>
      </form>
      </div>
    </div>
  )
}

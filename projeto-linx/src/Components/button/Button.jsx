
import React from 'react'
import S from '../button/Button.module.css'

const button = () => {
  return (
    <div className={S.Button}>
        <button>Conheça a Linx</button>
        <button>Ajude o Algoritimo</button>
        <button>Seus Produtos</button>
        <button>Compartilhe</button>
    </div>
  )
}

export default button
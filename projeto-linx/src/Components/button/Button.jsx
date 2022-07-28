
import React from 'react'
import S from '../button/Button.module.css'

const button = () => {
  return (
    <div className={S.Butoon}>
        <button className={S.Button}>Conheça a Linx</button>
        <button className={S.Button} >Ajude o Algoritimo</button>
        <button className={S.Button}>Seus Produtos</button>
        <button className={S.Button}>Compartilhe</button>
    </div>
  )
}

export default button
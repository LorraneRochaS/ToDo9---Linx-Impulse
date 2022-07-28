import React from 'react'
import S from '../Header/Header.module.css'
import Button from '../button/Button'

const Header = () => {
  return (
    <header className={S.Header}>
            <h3>
                Uma Seleção de Produtos
            </h3>
            <h2>
                Especial Para Você
            </h2>
            <p>
            Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
            </p>
            <Button />
        </header>
  )
}

export default Header
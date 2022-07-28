import React from 'react'
import Section from '../Section/Section'
import S from '../Especial/Especial.module.css'

const Especial = () => {
  return (
    <div className={S.conteiner}>
        <Section props='Sua seleção especial'/>
    </div>
  )
}

export default Especial
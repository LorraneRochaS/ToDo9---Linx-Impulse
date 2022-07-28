import React from 'react'
import S from '../Compartilhe/Compartilhe.module.css'
import Section from '../Section/Section'

const Compartilhe = () => {
  return (
    <div className={S.Compartilhe}>
        <Section props='Compartilhe a novidade' />
    
    <p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
   
    <form action="" className={S.form}>
      <div className={S.div}>
        <label htmlFor="">Nome do seu amigo:</label>
        <input type="text" className={S.input}/>
      </div>

      <div className={S.div}>
        <label htmlFor="">E-mail:</label>
        <input type="email" name="" id="" className={S.input} />
      </div>
    </form>
    {/* <Button props="Enviar agora"></Button> */}

    </div>
  )
}

export default Compartilhe
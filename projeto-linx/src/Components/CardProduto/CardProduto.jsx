import React from 'react'
import S from '../CardProduto/CardProduto.module.css'


const CardProduto = ({ img, title, descri, precoAnterior, precoAtual, parcelas, qtParcelas }) => {
    return (
        <div className={S.DivCard}>
            <section className={S.Card}>
                <figure style={{ 'backgroundImage': `url(${img})` }}></figure>

                <figcaption>{title}</figcaption>

                <span>
                    {descri}
                </span>
                <p>
                    <small>De: {precoAnterior}</small>
                    <strong> Para: {precoAtual}</strong>
                    <small> ou {qtParcelas} de: {parcelas}</small>
                </p>
                <button className={S.Button}>Comprar</button>
            </section>

        </div>
    )
}

export default CardProduto
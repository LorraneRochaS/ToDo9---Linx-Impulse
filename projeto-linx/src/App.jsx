import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header/Header'
import Enviar from './Components/Enviar/Enviar'
import CardProduto from './Components/CardProduto/CardProduto'
import Footer from './Components/Footer/Footer'
import Compartilhe from './Components/Compartilhe/Compartilhe'
import Especial from './Components/Especial/Especial'

function App() {
  const [produtos, setProdutos] = useState({})
  const [carregado, setCarregado] = useState(false)
 
  useEffect(() => {
    async function GetAPI() {
      const rota =
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1";

      const data = await fetch(rota);
      setProdutos(await data.json());
      setCarregado(carregado => carregado = true)
    }
    GetAPI();
  }, []);

  return (
    <div className="App">
      <Header />
      <Enviar/>
      <Especial />
      <ul>
        {carregado === true
        ? produtos.products.map((produto) => {
            return <CardProduto 
            img={produto.image} 
            title={produto.name} 
            descri={produto.description} 
            precoAnterior={produto.oldPrice} 
            precoAtual={produto.price} 
            parcelas={produto.installments.value} 
            qtParcelas={produto.installments.count}
             />
          
          }) 
          : ''}
      </ul>
          
          <Compartilhe />
          <Footer />

    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import store from './store/index'
import { Provider } from 'react-redux'
import { useGetProdutosQuery } from './services/api'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
  //     .then((res) => res.json())
  //     .then((res) => setProdutos(res))
  // }, []

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos
          // produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritar}
        />
      </div>
    </Provider>
  )
}

export default App

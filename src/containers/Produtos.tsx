import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarProduto } from '../store/reducers/carrinho'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  // produtos: ProdutoType[]
  favoritos: ProdutoType[]
  // adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  // produtos,
  favoritos,
  // adicionarAoCarrinho,
  favoritar
}: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }
  const dispatch = useDispatch()
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) {
    return <h2>Esta carregando</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto: ProdutoType) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
            aoComprar={() => dispatch(adicionarProduto(produto))}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent

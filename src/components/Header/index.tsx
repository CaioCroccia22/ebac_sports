import * as S from './styles'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/index'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  // const valorTotal = itensNoCarrinho.reduce((acc, item) => {
  //   acc += item.preco
  //   return acc
  // }, 0)

  const quantidade = useSelector(
    (state: RootState) => state.carrinho.produtos.length
  )

  const valorTotal = useSelector(
    (state: RootState) => state.carrinho.produtos
  ).reduce((total, p) => {
    total += p.preco
    return total
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {quantidade} itens, valor total: {valorTotal}
        </span>
      </div>
    </S.Header>
  )
}

export default Header

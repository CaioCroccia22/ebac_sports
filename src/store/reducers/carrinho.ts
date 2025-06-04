import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  produtos: Produto[]
}

const initialState: CarrinhoState = {
  produtos: []
}

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const produtos = action.payload

      if (state.produtos.find((item) => item.id === produtos.id)) {
        alert('Produto já esta no carrinho')
      } else {
        state.produtos.push(produtos)
        console.log(produtos)
      }
    }
  }
})

export const { adicionarProduto } = carrinhoSlice.actions

export default carrinhoSlice.reducer

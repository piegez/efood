import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  items: Cardapio[]
  isOpen: boolean
  alertMessage: string
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  alertMessage: ''
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        state.alertMessage = 'Item já está no carrinho!'
      } else {
        state.items.push(action.payload)
        state.alertMessage = ''
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clearAlert: (state) => {
      state.alertMessage = ''
    }
  }
})

export const { add, open, close, clearAlert, remove } = cartSlice.actions
export default cartSlice.reducer

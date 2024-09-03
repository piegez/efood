import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Menu[]
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
    add: (state, action: PayloadAction<Menu>) => {
      state.items.push(action.payload)
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
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, clearAlert, remove, clear } = cartSlice.actions
export default cartSlice.reducer

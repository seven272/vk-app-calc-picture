import { createSlice } from '@reduxjs/toolkit'


// Начальное значение
const initialState = {
  price: 10,
  photo: '',
  showResult: false
}

const pictureSlice = createSlice({
  name: 'picture',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload
    },
    setShowResult: (state, action) => {
      state.showResult = action.payload
    }
  },
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setPrice , setShowResult} = pictureSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default pictureSlice.reducer

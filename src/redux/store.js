import { configureStore } from '@reduxjs/toolkit'
import pictureSlice from './slices/pictureSlice'
import collectionSlice from './slices/collectionSlice'

const store = configureStore({
  reducer: {
    // Свойствa picture and collection будет внутри объекта общего состояния: state.counter
    picture: pictureSlice,
    collection: collectionSlice,
  },
})

export default store

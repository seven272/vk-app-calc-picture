/* eslint-disable no-unused-vars */
import bridge from '@vkontakte/vk-bridge'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import testImg from '../../assets/images/img.jpg'

// Начальное значение
const initialState = {
  collection: [
    {
      title: 'Дом у леса',
      price: '20 000 руб.',
      img: testImg,
    },
  ],
}

export const fetchCollection = createAsyncThunk(
  'collection/fetch',
  async () => {
    await bridge
      .send('VKWebAppStorageGet', {
        keys: ['listPictures'],
      })
      .then((data) => {
        let list = JSON.parse(data.keys[0].value)
        // dispatch(loadCollection([...list]))
        console.log(list)
        return list
      })
  }
)

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    setCollection: (state, action) => {
      state.collection.push(action.payload)
    },
    loadCollection: (state, action) => {
      state.collection = action.payload
    },
    deleteCollection: (state) => {
      state.collection = []
    },
    deleteElement: (state, action) => {
      state.collection =  state.collection.filter((elem) => elem.id !== action.payload.id)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      console.log(action.payload)
      // state.collection = action.payload
    })
  }
})

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { setCollection, loadCollection, deleteCollection } =
  collectionSlice.actions

export const thunkFunction = async (dispatch, getState) => {
  try {
    await bridge
      .send('VKWebAppStorageGet', {
        keys: ['listPictures'],
      })
      .then((data) => {
        let list = JSON.parse(data.keys[0].value)
        dispatch(loadCollection([...list]))
        console.log(list)
      })
  } catch (error) {
    console.log('errror from load list module')
  }
}

export const thunkFuncDelete = async (dispatch, getState) => {
  dispatch(deleteCollection([]))
  try {
    await bridge.send('VKWebAppStorageSet', {
      key: 'listPictures',
      value: JSON.stringify([]),
    })
  } catch (error) {
    console.log('error from delete list')
  }
}

export const thunkFuncDeleteElem = async (dispatch, getState) => {
  dispatch(deleteCollection([]))
  try {
    await bridge.send('VKWebAppStorageSet', {
      key: 'listPictures',
      value: JSON.stringify([]),
    })
  } catch (error) {
    console.log('error from delete list')
  }
}


// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default collectionSlice.reducer

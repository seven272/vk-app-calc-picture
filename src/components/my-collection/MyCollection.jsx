import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import bridge from '@vkontakte/vk-bridge'
import { Button } from '@vkontakte/vkui'
import { Icon12Delete } from '@vkontakte/icons'

import { thunkFuncDelete } from '../../redux/slices/collectionSlice'
import styles from './MyCollection.module.css'
import Loader from '../../UI/loader/Loader'

const MyCollection = () => {
  const dispatch = useDispatch()
  const listFromStore = useSelector(
    (state) => state.collection.collection
  )
  const [isLoading, setIsLoading] = useState(true)
  const [collection, setCollection] = useState(listFromStore)

  const loadCollection = async () => {
    setIsLoading(true)
    try {
      await bridge
        .send('VKWebAppStorageGet', {
          keys: ['listPictures'],
        })
        .then((data) => {
          let list = JSON.parse(data.keys[0].value)
          setCollection(list)
          console.log(list)
        })
    } catch (error) {
      console.log('errror from load list in My-Collection module')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteList = () => {
    dispatch(thunkFuncDelete)
    setCollection([])
  }

  const handleDeleteElem = async (id) => {
    try {
      await bridge
        .send('VKWebAppStorageGet', {
          keys: ['listPictures'],
        })
        .then((data) => {
          let list = JSON.parse(data.keys[0].value)
          return list
        })
        .then((list) => {
          let newList = list.filter((elem) => elem.id !== id)
          console.log('Old list: ' + list)
          console.log('New List: ' + newList)
          
          return newList
        })
        .then((newList) => {
          bridge.send('VKWebAppStorageSet', {
            key: 'listPictures',
            value: JSON.stringify(newList),
          })
          dispatch(loadCollection([...newList]))
        })
    } catch (error) {
      console.log('errror from load list module')
    }
  }

  useEffect(() => {
    loadCollection()
  }, [])

  return (
    <div className={styles.section_collection}>
      <h3 className={styles.title}>Подборка моих картин</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.items}>
          {collection &&
            collection.map((item, inx) => {
              return (
                <div key={inx} className={styles.item}>
                  <span className={styles.subtitle}>
                    {item.title}
                  </span>
                  <span className={styles.price}>
                    Стоимость: {item.price}
                  </span>
                  <div className={styles.img_wrap}>
                    <img className={styles.img} src={item.img} />
                  </div>
                  <Button
                    className={styles.btn}
                    style={{
                      margin: '20px 0',
                    }}
                    before={<Icon12Delete />}
                    align="center"
                    mode="primary"
                    appearance="accent"
                    size="s"
                    loading={false}
                    onClick={() => handleDeleteElem(item.id)}
                  >
                    удалить
                  </Button>
                </div>
              )
            })}
        </div>
      )}
      <div className={styles.btn_group}>
        <Button
          className={styles.btn}
          style={{
            margin: '20px 0',
          }}
          before={<Icon12Delete />}
          align="center"
          mode="primary"
          appearance="accent"
          size="l"
          loading={false}
          onClick={handleDeleteList}
        >
          Очистить весь список
        </Button>
      </div>
    </div>
  )
}

export default MyCollection

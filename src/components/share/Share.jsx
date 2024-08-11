import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, FormItem, File, Input } from '@vkontakte/vkui'
import {
  Icon24Camera,
  Icon24Share,
  Icon24MoneyCircle,
  Icon16CancelCircle,
} from '@vkontakte/icons'
import { v4 as uuidv4 } from 'uuid'

import styles from './Share.module.css'
import testImg from '../../assets/images/img.jpg'
import { setShowResult } from '../../redux/slices/pictureSlice'
import {
  setCollection,
} from '../../redux/slices/collectionSlice'
import {
  setElemInCollection,
} from '../../utils/vkStorage'

const Share = () => {
  const dispatch = useDispatch()
  const price = useSelector((state) => state.picture.price)
  const listPictures = useSelector(
    (state) => state.collection.collection
  )
  const [nameImg, setNameImg] = useState('')


  const closeResult = () => {
    dispatch(setShowResult(false))
  }

  const addPicture = () => {
    const nextObj = {
      id: uuidv4(),
      title: nameImg,
      price: price,
      img: testImg,
    }
    dispatch(setCollection(nextObj))
    setElemInCollection([...listPictures, nextObj])
  }


  // загрузка всего списка из хранилища и отправка его в стейт
  // const handleLoadPictures = async () => {
    // try {
    //   await bridge
    //     .send('VKWebAppStorageGet', {
    //       keys: ['listPictures'],
    //     })
    //     .then((data) => {
    //       let list = JSON.parse(data.keys[0].value)
    //       dispatch(loadCollection([...list]))
    //     })
    // } catch (error) {
    //   console.log('errror from load list module')
    // }

    // dispatch(thunkFunction)
  // }

  return (
    <div className={styles.section_share}>
      <div className={styles.price_info}>
        Ваша работа стоит:{' '}
        <span className={styles.number}>{price}</span>{' '}
        <Icon24MoneyCircle width={20} height={20} />
        <div className={styles.close_info} onClick={closeResult}>
          <Icon16CancelCircle width={50} height={50} />
        </div>
      </div>

      <div className={styles.title}>
        <span>Поделиться у себя на странице</span>
      </div>
      <div className={styles.input_wrap}>
        <FormItem htmlFor="name-img" top="Название картины">
          <Input
            id="name-img"
            type="text"
            align="center"
            disabled={false}
            value={nameImg}
            onChange={(evt) => setNameImg(evt.target.value)}
          />
        </FormItem>

        <FormItem top="Загрузите фото картины">
          <File
            before={<Icon24Camera role="presentation" />}
            size="l"
          >
            Открыть галерею
          </File>
        </FormItem>
      </div>

      <div className={styles.preview}>
        <span className={styles.subtitle}>
          Картина <q>{`${nameImg}`}</q> стоит
          <span style={{ fontSize: '18px', padding: '0 5px' }}>
            {price}
          </span>{' '}
          руб.
        </span>
        <div className={styles.img_wrap}>
          <img
            className={styles.img}
            src={testImg}
            alt="test photo"
          />
        </div>

        <Button
          className={styles.btn}
          style={{
            margin: '20px 0',
          }}
          before={<Icon24Share />}
          align="center"
          mode="primary"
          appearance="accent"
          stretched={false}
          rounded={false}
          disabled={false}
          size="l"
          loading={false}
          onClick={addPicture}
        >
          Поделиться
        </Button>
      </div>
    </div>
  )
}

export default Share

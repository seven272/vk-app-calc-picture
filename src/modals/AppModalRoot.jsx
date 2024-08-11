import React, { useState, useEffect } from 'react'
import { ModalRoot, ModalPage } from '@vkontakte/vkui'
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router'
import bridge from '@vkontakte/vk-bridge'
import styles from './AppModalRoot.module.css'

const AppModalRoot = ({activeModal}) => {
  const [showPopup, setShowPopup] = useState(null)
  const setIsShowPopup = async () => {
    await bridge.send('VKWebAppStorageSet', {
      key: 'isShowPopup',
      value: '1',
    })
  }

  const getIsShowPopup = async () => {
    try {
      await bridge
        .send('VKWebAppStorageGet', {
          keys: ['isShowPopup'],
        })
        .then((data) => {
          let res = data.keys[0].value
          console.log(res)
          return res
        })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    const val = getIsShowPopup()
    console.log(val)
    if (val === '') {
      setShowPopup(true)
    } else if (val === '1') {
      setShowPopup(true)
    }
  }, [])

  console.log(showPopup)
  // из отого обьекта воспользуемся методом для закрытия модального окна
  const routeNavigator = useRouteNavigator()
  const [modal, setModal] = useState('main_modal')

  const handleCloseModal = () => {
    setIsShowPopup()
    setModal('')
  }
  return (
    <ModalRoot activeModal={modal}>
      {showPopup && (
        <ModalPage id="main_modal" onClose={handleCloseModal}>
          <div className={styles.conteiner}>
            <h3 className={styles.title}>Добро пожаловать!</h3>
            <span className={styles.content}>
              Калькулятор призван помочь определить диапазон цен на
              свои работы современным худоникам. Вы можете сохранять
              работы в коллекции, делиться результатом на своей
              странице, а главное использовать цену, расчитанную
              программой, как аргумент при общении с покупателем.
            </span>
          </div>
        </ModalPage>
      )}
    </ModalRoot>
  )
}

export default AppModalRoot

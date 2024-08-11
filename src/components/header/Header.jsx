import React from 'react'
import { RouterLink, useHref } from '@vkontakte/vk-mini-apps-router'
import { Icon32FilmStripOutline } from '@vkontakte/icons'
import styles from './Header.module.css'
import Img from '../../assets/images/header.png'

const Header = () => {
  return (
    <div className={styles.header}>
      {/* <Icon32FilmStripOutline
        width={60}
        height={60}
        className={styles.icon}
      /> */}
      <div className={styles.img_wrapper}>
        <img src={Img} alt="painting" className={styles.img} />
      </div>

      <div className={styles.title_wrapper}>
        <span className={styles.title}>
          Калькулятор оценки картин
        </span>
        <span className={styles.quote_wrap}>
          <q>Живопись стоит дорого, а писать надо много.</q>
          <cite> &copy; Винсент Ван Гог</cite>
        </span>
      </div>
      <ul className={styles.items}>
        <li className={styles.item}>
          <RouterLink to="/">Калькулятор</RouterLink>
        </li>
        <li className={styles.item}>
          <RouterLink to="/info">Инфо</RouterLink>
        </li>
        <li className={styles.item}>
          <RouterLink to="/collection">Коллекция</RouterLink>
        </li>
      </ul>
    </div>
  )
}

export default Header

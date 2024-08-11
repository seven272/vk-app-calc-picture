import React from 'react'
import { Select } from '@vkontakte/vkui'

import styles from './GenreArt.module.css'

const arrStyles = [
  {
    value: 'painting',
    label: 'живопись',
  },
  {
    value: 'watercolor',
    label: 'акварель',
  },
  {
    value: 'graphics',
    label: 'графика',
  },
  {
    value: 'photo',
    label: 'фотография',
  },
  {
    value: 'computer-illustration',
    label: 'компьютерная иллюстрация',
  },
  {
    value: 'other',
    label: 'другое',
  },
]

const GenreArt = ({ getGenre }) => {
  const handleChange = (value) => {
    getGenre(value.value)
  }

  return (
    <div className={styles.section_genreart}>
      <span className={styles.title}>Моя работа это</span>
      <Select
        id="select-genre"
        placeholder="не выбрано"
        className={styles.input}
        onChange={handleChange}
        options={arrStyles}
      />
    </div>
  )
}
export default GenreArt

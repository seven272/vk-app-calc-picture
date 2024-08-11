import React from 'react'

import { Select } from '@vkontakte/vkui'

import styles from './Styles.module.css'

const arrStyles = [
  {
    value: 'abstractionism',
    label: 'абстракционизм',
  },
  {
    value: 'avant-garde',
    label: 'авангардизм',
  },
  {
    value: 'academism',
    label: 'академизм',
  },
  {
    value: 'impressionism',
    label: 'импрессионизм',
  },
  {
    value: 'classicism',
    label: 'классицизм',
  },
  {
    value: 'modernism',
    label: 'модерн',
  },
  {
    value: 'naturalism',
    label: 'натурализм',
  },
  {
    value: 'pop-art',
    label: 'поп-арт',
  },
  {
    value: 'primitivism',
    label: 'примитивизм',
  },
  {
    value: 'realism',
    label: 'реализм',
  },
  {
    value: 'symbolism',
    label: 'символизм',
  },
  {
    value: 'social-art',
    label: 'соц-арт',
  },
  {
    value: 'surrealism',
    label: 'сюрреализм',
  },
  {
    value: 'expressionism',
    label: 'экспрессионизм',
  },
  {
    value: 'other',
    label: 'другое',
  },
]

const Styles = ({ getStyle }) => {
  const handleChange = (value) => {
    getStyle(value.value)
  }
  return (
    <div className={styles.section_styles}>
      <span className={styles.title}>Стиль</span>
      <Select
        id="select-style"
        placeholder="не выбран"
        className={styles.input}
        onChange={handleChange}
        options={arrStyles}
      />
    </div>
  )
}
export default Styles

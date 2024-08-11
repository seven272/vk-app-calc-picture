import React, { useState } from 'react'
import {  Input, Slider } from '@vkontakte/vkui'

import styles from './HeightStep.module.css'

const HeightStep = ({ getHeight }) => {
  const [inputValue, setInputValue] = useState(1)
  const onChange = (newValue) => {
    setInputValue(newValue)
    getHeight(newValue)
  }
  return (
    <div className={styles.section_slider}>
      <span className={styles.title}>Высота картины в см</span>

      <Slider
        className={styles.slider}
        value={Number(inputValue)}
        step={1}
        min={1}
        max={300}
        aria-labelledby="basic"
        onChange={onChange}
      />

      <Input
        className={styles.input}
        type="number"
        value={String(inputValue)}
        onChange={(evt) => setInputValue(evt.target.value)}
      />
    </div>
  )
}

export default HeightStep

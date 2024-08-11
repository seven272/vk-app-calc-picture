import React, { useState } from 'react';
import {  Input, Slider } from '@vkontakte/vkui'

import styles from './WidthStep.module.css'

const WidthStep = ({getWidth}) => {
  const [inputValue, setInputValue] = useState(1);
 
  const onChange = (newValue) => {
    setInputValue(newValue);
    getWidth(newValue)
  };
  return (
    <div className={styles.section_slider}>
      <span className={styles.title}>Ширина картины в см</span>

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

export default WidthStep
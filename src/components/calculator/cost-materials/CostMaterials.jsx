import React, { useState } from 'react'

import styles from './CostMaterials.module.css'
import { useInput } from '../../../utils/useValidation'

const CostMaterials = ({ getCost }) => {
  const [cost, setCost] = useState('')

  const validInput = useInput(cost)

  const handleCost = (evt) => {
    validInput.onChange(evt.target.value)
    setCost(evt.target.value)
    getCost(Number(evt.target.value))
   
  }


  return (
    <div className={styles.section_materials}>
      <span className={styles.title}>
        Стоимость материалов (холст, краски и т.п.)
      </span>
      <div className={styles.input_wrap}>
        <input
          className={styles.input}
          type="text"
          placeholder="цифры"
          value={cost}
          onChange={handleCost}
          onBlur={(evt) => validInput.onBlur(evt.target.value)}
          disabled={false}
        />
        <span className={styles.input_error}>
          {validInput.textError}
        </span>
      </div>
    </div>
  )
}

export default CostMaterials

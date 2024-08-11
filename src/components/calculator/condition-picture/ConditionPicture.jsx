import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './ConditionPicture.module.css'

const ConditionPicture = ({ getCondition }) => {
  const onChange = (e) => {
    getCondition(e.target.value)
  }

  return (
    <div className={styles.section_condition}>
      <span className={styles.title}>Состояние картины?</span>
      <Flex vertical gap="middle">
        <Radio.Group
          onChange={onChange}
          defaultValue="100"
          size="middle"
          className={styles.btn_group}
        >
          <Radio.Button className={styles.btn} value="100">
            Идеальное
          </Radio.Button>
          <Radio.Button className={styles.btn} value="50">
            Есть дефекты
          </Radio.Button>
          <Radio.Button className={styles.btn} value="0">
            Требует реставрации
          </Radio.Button>
        </Radio.Group>
      </Flex>
    </div>
  )
}

export default ConditionPicture

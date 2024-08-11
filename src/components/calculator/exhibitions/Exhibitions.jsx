import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './Exhibitions.module.css'

const Exhibitions = ({ getExhibitions }) => {
  const onChange = (e) => {
    getExhibitions(e.target.value)
  }

  return (
    <div className={styles.section_exhibitions}>
      <span className={styles.title}>Участие в выставках?</span>
      <Flex vertical gap="middle">
        <Radio.Group
          onChange={onChange}
          defaultValue="0"
          size="middle"
          className={styles.btn_group}
        >
          <Radio.Button value="0">Нет</Radio.Button>
          <Radio.Button value="1-3">От 1 до 3</Radio.Button>
          <Radio.Button value="3-10">От 3 до 10</Radio.Button>
          <Radio.Button value=">10">Больше 10</Radio.Button>
        </Radio.Group>
      </Flex>
    </div>
  )
}
export default Exhibitions

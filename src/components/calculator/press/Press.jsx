import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './Press.module.css'

const Press = ({ getPress }) => {
  const onChange = (evt) => {
    getPress(evt.target.value)
  }
  return (
    <div className={styles.section_press}>
      <span className={styles.title}>Публикации в СМИ?</span>
      <Flex vertical gap="middle">
        <Radio.Group
          onChange={onChange}
          defaultValue={false}
          size="middle"
        >
          <Radio.Button value={true}>Да</Radio.Button>
          <Radio.Button value={false}>Нет</Radio.Button>
        </Radio.Group>
      </Flex>
    </div>
  )
}
export default Press

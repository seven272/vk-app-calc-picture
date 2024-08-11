import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './Education.module.css'

const Education = ({ getEducation }) => {
  const onChange = (evt) => {
    getEducation(evt.target.value)
  }
  return (
    <div className={styles.section_education}>
      <span className={styles.title}>
        Художественное образование?
      </span>
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
export default Education

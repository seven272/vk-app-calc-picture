import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './OriginalCopy.module.css'

const OriginalCopy = ({ getIsOriginal }) => {
  const onChange = (evt) => {
    getIsOriginal(evt.target.value)
  }

  return (
    <div className={styles.section_originalcopy}>
      <span className={styles.title}>
        Оригинал или копия другой работы?
      </span>
      <Flex vertical gap="middle">
        <Radio.Group
          onChange={onChange}
          defaultValue={false}
          size="middle"
        >
          <Radio.Button value={true}>Оригинал</Radio.Button>
          <Radio.Button value={false}>Копия</Radio.Button>
        </Radio.Group>
      </Flex>
    </div>
  )
}
export default OriginalCopy

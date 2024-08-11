import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './SoloShow.module.css'

const SoloShow = ({ getSoloShow }) => {
  const onChange = (e) => {
    getSoloShow(e.target.value)
  }

  return (
    <div className={styles.section_soloshow}>
      <span className={styles.title}>Персональные выставки?</span>
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
export default SoloShow

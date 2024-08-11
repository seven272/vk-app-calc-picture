import React from 'react'
import { Flex, Radio } from 'antd'

import styles from './InCollection.module.css'


const InCollection = ({ getInCollection }) => {
   const onChange = (e) => {
    getInCollection(e.target.value)
  }
 
  return (
    <div className={styles.section_incollection}>
      <span className={styles.title}>
        Работы в частных коллекциях в России и зарубежом?
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
export default InCollection

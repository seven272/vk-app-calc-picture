import React from 'react'
import { Panel } from '@vkontakte/vkui'

import MyCollection from '../components/my-collection/MyCollection'

const InfoPanel = ({ id }) => {
  return (
    <Panel id={id}>
      <MyCollection />
    </Panel>
  )
}

export default InfoPanel
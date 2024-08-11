import React from 'react'
import { Panel } from '@vkontakte/vkui'

import Info from '../components/info/Info'

const InfoPanel = ({ id }) => {
  return (
    <Panel id={id}>
      <Info />
    </Panel>
  )
}

export default InfoPanel

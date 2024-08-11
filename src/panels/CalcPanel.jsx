import React from 'react'
import { Panel } from '@vkontakte/vkui'
import Calculator from '../components/calculator/Calculator'


const CalcPanel = ({id}) => {
  return (
    <Panel id={id}>
        <Calculator />
    </Panel>
  )
}

export default CalcPanel
import React from 'react'
import { Root, View, Panel } from '@vkontakte/vkui'

import CalcPanel from '../panels/CalcPanel'
import InfoPanel from '../panels/InfoPanel'
import CollectionPanel from '../panels/CollectionPanel'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const MainView = ({ activePanel, id }) => {
  return (
    <>
      <Header /> 
      <View id={id} activePanel={activePanel}>
        <CalcPanel id="calc_panel" />
        <InfoPanel id="info_panel" />
        <CollectionPanel id="collection_panel" />
      </View>
      <Footer />
    </>
  )
}

export default MainView

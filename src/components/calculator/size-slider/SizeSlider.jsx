import React, { useState, useEffect } from 'react'

import WidthStep from './widthStep/WidthStep'
import HeightStep from './heightStep/HeightStep'
import styles from './SizeSlider.module.css'

const SizeSlider = ({ getSize }) => {
  const [sizeImg, setSizeImg] = useState({
    width: 0,
    height: 0,
  })
  const getWidth = (payload) => {
    setSizeImg({ ...sizeImg, width: payload })
  }

  const getHeight = (payload) => {
    setSizeImg({ ...sizeImg, height: payload })
  }

  useEffect(() => {
    getSize(sizeImg)
  }, [sizeImg])

  return (
    <div className={styles.size}>
      <WidthStep getWidth={getWidth} />
      <HeightStep getHeight={getHeight} />
    </div>
  )
}

export default SizeSlider

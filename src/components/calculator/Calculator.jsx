/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Button } from '@vkontakte/vkui'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Calculator.module.css'
import CostMaterials from './cost-materials/CostMaterials'
import SizeSlider from './size-slider/SizeSlider'
import OriginalCopy from './original-copy/OriginalCopy'
import ConditionPicture from './condition-picture/ConditionPicture'
import GenreArt from './genre-art/GenreArt'
import Styles from './styles/Styles'
import Education from './education/Education'
import InCollection from './in-collection/InCollection'
import Exhibitions from './exhibitions/Exhibitions'
import SoloShow from './solo-show/SoloShow'
import Press from './press/Press'
import Share from '../share/Share'
import {
  setPrice,
  setShowResult,
} from '../../redux/slices/pictureSlice'

const Calculator = () => {
  const dispatch = useDispatch()
  const showResult = useSelector((state) => state.picture.showResult)
  const [finalPrice, setFinalPrice] = useState(0)
  const [dataPainting, setDataPainting] = useState({
    materialsCost: 0,
    size: {
      width: 1,
      height: 1,
    },
    original: false,
    condition: '100',
    genre: 'painting',
    style: 'abstractionism',
    education: false,
    exhibitions: '0',
    soloShow: false,
    collection: false,
    press: false,
  })

  //ф-я подсчета стоимости картины
  const handleCountPrice = () => {
    //первоначальная цена которая равна стоимоти материалов
    let firstPrice = Number(dataPainting.materialsCost)
    //общая сумма сторон для определения коэфициента  размера картины
    let sumSides = dataPainting.size.height + dataPainting.size.width

    if (sumSides <= 100) {
      firstPrice = firstPrice * 1
    } else if (sumSides > 100 && sumSides < 200) {
      firstPrice = firstPrice * 1.2
    } else if (sumSides > 200) {
      firstPrice = firstPrice * 1.3
    }

    if (dataPainting.original === true) {
      firstPrice = firstPrice * 2.5
    }

    if (dataPainting.condition === '100') {
      firstPrice = firstPrice * 1
    } else if (dataPainting.condition === '50') {
      firstPrice = firstPrice * 0.9
    } else if (dataPainting.condition === '0') {
      firstPrice = firstPrice * 0.7
    }

    if (
      dataPainting.genre === 'painting' ||
      dataPainting.genre === 'watercolor' ||
      dataPainting.genre === 'graphics'
    ) {
      firstPrice = firstPrice * 1.1
    } else if (
      dataPainting.genre === 'photo' ||
      dataPainting.genre === 'computer-illustration' ||
      dataPainting.genre === 'other'
    ) {
      firstPrice = firstPrice * 1.05
    }

    if (dataPainting.style !== 'other') {
      firstPrice = firstPrice * 1.1
    }

    if (dataPainting.education) {
      firstPrice = firstPrice * 2.5
    }

    if (dataPainting.exhibitions === '1-3') {
      firstPrice = firstPrice * 1.5
    } else if (dataPainting.exhibitions === '3-10') {
      firstPrice = firstPrice * 2
    } else if (dataPainting.exhibitions === '>10') {
      firstPrice = firstPrice * 2.5
    }

    if (dataPainting.soloShow) {
      firstPrice = firstPrice * 2.5
    }

    if (dataPainting.collection) {
      firstPrice = firstPrice * 2.5
    }

    if (dataPainting.press) {
      firstPrice = firstPrice * 3
    }

    setFinalPrice(firstPrice.toFixed(0))

    dispatch(setPrice(firstPrice.toFixed(0)))
    dispatch(setShowResult(true))
  }

  const getCostMaterial = (cost) => {
    setDataPainting({ ...dataPainting, materialsCost: cost })
  }

  const getSize = (sizePayload) => {
    setDataPainting({ ...dataPainting, size: { ...sizePayload } })
  }

  const getIsOriginal = (payload) => {
    setDataPainting({ ...dataPainting, original: payload })
  }

  const getCondition = (payload) => {
    setDataPainting({ ...dataPainting, condition: payload })
  }

  const getExhibitions = (payload) => {
    setDataPainting({ ...dataPainting, exhibitions: payload })
  }

  const getSoloShow = (payload) => {
    setDataPainting({ ...dataPainting, soloShow: payload })
  }

  const getInCollection = (payload) => {
    setDataPainting({ ...dataPainting, collection: payload })
  }

  const getEducation = (payload) => {
    setDataPainting({ ...dataPainting, education: payload })
  }

  const getPress = (payload) => {
    setDataPainting({ ...dataPainting, press: payload })
  }

  const getGenre = (payload) => {
    setDataPainting({ ...dataPainting, genre: payload })
  }

  const getStyle = (payload) => {
    setDataPainting({ ...dataPainting, style: payload })
  }

  return (
    <div className={styles.section_calculator}>
      <h2></h2>
      <div>
        <CostMaterials getCost={getCostMaterial} />
      </div>

      <div>
        <SizeSlider getSize={getSize} />
      </div>

      <div>
        <OriginalCopy getIsOriginal={getIsOriginal} />
      </div>
      <div>
        <ConditionPicture getCondition={getCondition} />
      </div>

      <div>
        <GenreArt getGenre={getGenre} />
      </div>

      <div>
        <Styles getStyle={getStyle} />
      </div>

      <Education getEducation={getEducation} />

      <div>
        <Exhibitions getExhibitions={getExhibitions} />
      </div>

      <div>
        <SoloShow getSoloShow={getSoloShow} />
      </div>

      <div>
        <InCollection getInCollection={getInCollection} />
      </div>

      <div>
        <Press getPress={getPress} />
      </div>

      <Button
        className={styles.btn}
        style={{
          margin: '20px auto',
          width: '300px',
        }}
        align="center"
        mode="primary"
        appearance="accent"
        stretched={false}
        rounded={false}
        disabled={dataPainting.materialsCost === 0 ? true : false}
        size="l"
        loading={false}
        onClick={handleCountPrice}
      >
        Расчитать стоимость
      </Button>

      {showResult && <Share />}
    </div>
  )
}
export default Calculator

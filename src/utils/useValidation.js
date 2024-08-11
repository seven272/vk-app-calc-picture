/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  // определяем было ли действие в инпуте, то есть кликали на него
  const [isDirty, setDirty] = useState(false)
  const [textError, setTextError] = useState('')
  const [isValid, setValid] = useState(false)
  //регулярка только цифры
  const regNumber = /^\d+$/
  //регулярка только буквы и пробелы
  // const reg1 = /^[A-Za-z\s]+$/g
  //регулярка цифры, знаки, буквы и пробелы
  // const reg = /^[-/'"№., 0-9a-zA-Zа-яёА-ЯЁ\s]+$/g

  const onChange = (val) => {
    setValue(val)
  }

  //Событие blur вызывается когда элемент теряет фокус.
  const onBlur = (val) => {
    setDirty(true)
    if (val.length === 0) {
      setTextError('Поле не может быть пустым')
    }
  }
  //Событие focus вызывается в момент фокусировки
  const onFocus = (val) => {}

  useEffect(() => {
    if (value.length > 15) {
      setTextError('Максимальная длина 15 символов')
    } else if (
      !regNumber.test(String(value).toLocaleLowerCase()) &&
      value.length !== 0
    ) {
      setTextError('Вводите только цифры')
    } else {
      setTextError('')
    }

  }, [ value])

  useEffect(() => {
    if (textError === '') {
      setValid(true)
    } else {
      setValid(false)
    }
  }, [textError])

  return {
    onChange,
    onBlur,
    isDirty,
    textError,
    isValid,
  } 
}

export { useInput }

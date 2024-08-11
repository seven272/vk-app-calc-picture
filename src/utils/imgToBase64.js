const getBase64FromUrl = async (url) => {
  const data = await fetch(url)
  const blob = await data.blob()

  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.readAsDataURL(blob)
    reader.onloadend = () => {
      const base64data = reader.result
      resolve(base64data)
    }
  })
}

export {getBase64FromUrl}
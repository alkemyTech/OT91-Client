import axios from 'axios'
import { useEffect } from 'react'
const baseURL = 'http://ongapi.alkemy.org/public/api'

export const getCategories = async (id) => {
  const response = await axios.get(`${baseURL}/categories/${id}`)
  const data = response.data.data
  return data
}

const headers = {
  'Content-Type': 'application/json',
}

export const createOrUpdateNews = async (id, categorieData) => {
  try {
    if (id) {
      await axios.put(`${baseURL}/categories/${id}`, categorieData, {
        headers: headers,
      })
    } else {
      axios.post(`${baseURL}/categories`, categorieData, { headers: headers })
    }
  } catch (err) {
    console.error(err)
  }
}

export const handleCKEditorChange = (formik, editor, key) => {
  const data = editor.getData()
  const setDatafromCkeditor = data.replace(/'<p>'|['</p>']/gi, '')
  formik.setFieldValue(key, setDatafromCkeditor)
}

export const handleFileChange = (formik, name, e) => {
  const file = e.target.files[0]
  const fileUrl = new FileReader()
  fileUrl.readAsDataURL(file)
  fileUrl.onload = (e) => {
    formik.setFieldValue(name, e.target.result)
  }
}

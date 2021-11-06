import axios from 'axios'
const baseURL = 'http://ongapi.alkemy.org/public/api'

export const getCategories = async () => {
  try {
    const response = await axios.get(
      'http://ongapi.alkemy.org/public/api/categories'
    )
    return response.data.data
  } catch (error) {
    console.error(error)
  }
}

export const getCategory = async (id) => {
  const response = await axios.get(`${baseURL}/categories/${id}`)
  const data = response.data.data
  return data
}

export const createCategory = (data) => {
  try {
    const response = axios.post(`${URL}/categories`, data)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const updateCategory = (id, data) => {
  try {
    const response = axios.put(`${URL}/categories/${id}`, data)
    return response
  } catch (error) {
    console.error(error)
  }
}
const headers = {
  'Content-Type': 'application/json',
}

export const createOrUpdate = async (id, categorieData) => {
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

const removeCategory = (id) => {
  try {
    const response = axios.delete(`${URL}/categories/${id}`)
    return response
  } catch (error) {
    console.error(error)
  }
}

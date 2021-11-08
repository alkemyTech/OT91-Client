import axios from 'axios'

const baseURL = 'http://ongapi.alkemy.org/public/api'
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const getCategories = async () => {
  try {
    const response = await axios.get(
      'http://ongapi.alkemy.org/public/api/categories'
    )
    const data = response.data.data
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getCategory = async (id) => {
  const response = await axios.get(`${baseURL}/categories/${id}`)
  const data = response.data.data
  return data
}

export const createCategory = (categoryData) => {
  try {
    const response = axios.post(`${URL}/categories`, categoryData, {
      headers: headers,
    })
    const data = response.data.data
    return data
  } catch (error) {
    console.error(error)
  }
}

export const updateCategory = (id, categoryData) => {
  try {
    const response = axios.put(`${URL}/categories/${id}`, categoryData, {
      headers: headers,
    })
    const data = response.data.data
    return data
  } catch (error) {
    console.error(error)
  }
}

export const createOrUpdate = async (id, categoryData) => {
  try {
    if (id) {
      const response = await updateCategory(id, categoryData)
      return response
    } else {
      const response = await createCategory(categoryData)
      return response
    }
  } catch (err) {
    console.error(err)
  }
}

export const removeCategory = (id) => {
  try {
    const response = axios.delete(`${URL}/categories/${id}`)
    const data = response.data.data
    return data
  } catch (error) {
    console.error(error)
  }
}

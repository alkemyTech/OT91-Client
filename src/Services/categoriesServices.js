import axios from 'axios'

const baseURL = 'http://ongapi.alkemy.org/public/api'
const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

export const getCategories = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/categories`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const getCategory = async (id) => {
  try {
    const { data } = await axios.get(`${baseURL}/categories/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const createCategory = (categoryData) => {
  try {
    const { data } = axios.post(`${baseURL}/categories`, categoryData, {
      headers: headers,
    })
    return data
  } catch (error) {
    console.error(error)
  }
}

export const updateCategory = (id, categoryData) => {
  try {
    const { data } = axios.put(`${baseURL}/categories/${id}`, categoryData, {
      headers: headers,
    })
    return data
  } catch (error) {
    console.error(error)
  }
}
export const createOrUpdate = async (categoryData, id) => {
  const allCategories = await getCategories()
  const sameData = allCategories.data.find((category) => category.id === id)
  try {
    if (sameData) {
      const data = updateCategory(id, categoryData)
      return data
    } else if (!id) {
      const data = createCategory(categoryData)
      return data
    }
  } catch {
    console.error(error)
  }
}

export const removeCategory = (id) => {
  try {
    const { data } = axios.delete(`${baseURL}/categories/${id}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

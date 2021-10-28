import axios from 'axios'

const baseURL = 'http://ongapi.alkemy.org/api/categories'

export const get = (id) => {
  return axios.get(`${baseURL}/categories/${id}`)
}

export const create = (newCategorie) => {
  return axios.post(`${baseURL}/categories`, {
    ...newCategorie,
  })
}

export const update = (id, categorieData) => {
  return axios.put(`${baseURL}/categories/${id}`, {
    ...categorieData,
  })
}

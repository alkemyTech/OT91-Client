import * as serviceTypes from './CategorieServices'

export const getCategorie = (id) => async () => {
  try {
    const res = await serviceTypes.get(id)
    return Promise.resolve(res.data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export const createCategorie = (data) => async () => {
  try {
    const res = await serviceTypes.create({ data })
    return Promise.resolve(res.data)
  } catch (err) {
    return Promise.reject(err)
  }
}

export const editCategorie = (categorieData) => async () => {
  try {
    const res = await serviceTypes.update(categorieData.id, {
      ...categorieData,
    })
    return Promise.resolve(res.data)
  } catch (err) {
    return Promise.reject(err)
  }
}

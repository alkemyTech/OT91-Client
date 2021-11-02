import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as services from './CategorieServices'
import '../FormStyles.css'
import * as validations from '../../Services/validations'
import GenericInput from '../inputsForms/GenericInput'
import CkeditInput from '../inputsForms/CkeditInput'
import FileInput from '../inputsForms/FileInput'

const validate = (values) => {
  const errors = {}
  const invalidTitle = validations.isShort(values.title, 4)
  if (invalidTitle) {
    errors.title = 'El Titulo debe ser mas largo'
  }
  return errors
}

const CategoriesForm = (props) => {
  const { idforEdit } = props
  const [isLoading, setisLoading] = useState(true)
  const [category, setcategory] = useState({
    name: '',
    description: '',
    image: '',
  })

  useEffect(async () => {
    const data = await services
      .getCategories(idforEdit)
      .then((result) => result)
    data
      ? setcategory({
          ...category,
          name: data.name,
          description: data.description,
          image: data.image,
        }) && setisLoading(false)
      : setisLoading(true)
    console.log(category)
    return data
  }, [])

  const formik = useFormik({
    initialValues: category,
    validate,
    onSubmit: (values) => {
      services.createOrUpdateNews(idforEdit, values)
    },
  })

  return (
    <>
      {isLoading ? <h1>loading</h1> : <h1>data</h1>}
      <form className='form-container' onSubmit={formik.handleSubmit}>
        <GenericInput
          name='name'
          label='Nombre de la Categoria'
          type='text'
          placeholder='Ingrese el nombre de la Categoria'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMessage={formik.errors.name}
          isTouched={formik.touched.name}
        />

        <CkeditInput
          name='description'
          label='Descripción'
          value={formik.values.description}
          onChange={(e, editor) =>
            services.handleCKEditorChange(formik, editor, 'description')
          }
          errorMessage={formik.errors.description}
          isTouched={formik.touched.description}
        />

        <FileInput
          name='image'
          accept='image/png, image/jpg'
          value={formik.values.image}
          onChange={(e) => services.handleFileChange(formik, 'image', e)}
          errorMessage={formik.errors.image}
          isTouched={formik.touched.image}
        />

        <button className='submit-btn' type='submit'>
          Guardar cambios
        </button>
      </form>
    </>
  )
}
export default CategoriesForm

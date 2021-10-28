import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Container, TextField, Typography, Button } from '@material-ui/core'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as functions from './CategoriesFunctions'
import '../FormStyles.css'

const CategoriesForm = ({ editCategorie, id }) => {
  const [values, setValues] = useState('')

  useEffect(() => {
    if (editCategorie) {
      const categorieData = functions.getCategorie(id)
      setValues(categorieData)
    }
  }, [editCategorie])

  return (
    <Container
      style={{
        fontFamily: 'arial',
      }}
      className='form-container'
    >
      <Formik
        initialValues={{
          name: values.name ? values.name : '',
          description: values.description ? values.description : '',
          image: values.image ? values.image : '',
        }}
        validate={(values) => {
          let errors = {}
          if (!values.name) {
            errors.name = 'Debes ponerle un Nombre a la Categoria'
          }
          if (values.name.length < 4) {
            errors.name =
              'El nombre de la Categoria debe tener mas de 4 caracteres'
          }
          if (!values.description) {
            errors.description = 'Debes poner una descripción de la Categoria'
          }
          if (!values.image) {
            errors.image = 'Debes poner una imagen para tu Categoria'
          }
          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          editCategorie
            ? functions.editCategorie(values)
            : functions.createCategorie(values)

          resetForm()
        }}
      >
        {({ errors, setFieldValue }) => (
          <Form className='form'>
            <div>
              <Typography
                variant='h6'
                style={{
                  fontWeight: 'bold',
                  margin: '1rem auto',
                }}
              >
                Nombre de la Categoria
              </Typography>
              <TextField
                fullWidth
                id='fullWidth'
                variant='outlined'
                type='text'
                name='name'
                placeholder='Escribe el nombre'
              />

              <ErrorMessage
                name='name'
                component={() => (
                  <Typography
                    variant='subtitle2'
                    color='error'
                    style={{
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      marginTop: '0.3rem',
                      marginLeft: '0.2rem',
                    }}
                  >
                    {errors.name}
                  </Typography>
                )}
              />
            </div>
            <div>
              <Typography
                variant='h6'
                style={{
                  fontWeight: 'bold',
                  margin: '1rem auto',
                }}
              >
                Descripcion
              </Typography>
              <CKEditor
                className='input-field'
                config={{
                  placeholder: 'Escribe una descripción',
                }}
                editor={ClassicEditor}
                data=''
                onChange={(e, editor) => {
                  const data = editor.getData()
                  setFieldValue('description', data)
                }}
              />
              <ErrorMessage
                name='description'
                component={() => (
                  <Typography
                    variant='subtitle2'
                    color='error'
                    style={{
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      marginTop: '0.3rem',
                      marginLeft: '0.2rem',
                    }}
                  >
                    {errors.description}
                  </Typography>
                )}
              />
            </div>
            <div>
              <Typography
                variant='h6'
                style={{
                  fontWeight: 'bold',
                  margin: '1rem auto',
                }}
              >
                Image
              </Typography>
              <div>
                {values.image > 0 && (
                  <img
                    src={values.image}
                    alt='imagen vista previa'
                    width='180'
                    height='180'
                  />
                )}
              </div>
              <div>
                <Field
                  className='input-image'
                  type='file'
                  accept='image/png, image/jpg'
                  id='image'
                  name='image'
                  value={undefined}
                  onChange={(e) => {
                    setFieldValue('image', e)
                    const imageFile = e.target.files[0]
                    const imageUrl = new FileReader()
                    imageUrl.readAsDataURL(imageFile)
                    imageUrl.onload = (e) => {
                      setValues(...values, { image: e.target?.result })
                    }
                  }}
                />
              </div>
              <ErrorMessage
                name='image'
                component={() => (
                  <Typography
                    variant='subtitle2'
                    color='error'
                    style={{
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                      marginTop: '0.3rem',
                      marginLeft: '0.2rem',
                    }}
                  >
                    {errors.image}
                  </Typography>
                )}
              />
            </div>

            <Button
              variant='contained'
              Container
              fullWidth
              size='large'
              type='submit'
              color='primary'
              style={{
                marginTop: '25px',
              }}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
export default CategoriesForm

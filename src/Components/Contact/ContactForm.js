import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import '../FormStyles.css'

const ContactForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        validate={(values) => {
          let errors = {}
          if (!values.name) {
            errors.name = 'Debes poner tu nombre'
          }

          if (!values.email) {
            errors.email = 'Debes poner tu email'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'La dirección de Email no es valida'
          }
          if (!values.phone) {
            errors.phone = 'Debes poner tu número de telefono'
          }
          if (values.phone.length < 8) {
            errors.phone = 'El numero de teléfono no es válido'
          }
          if (!values.message) {
            errors.message = 'Debes escribir un mensaje'
          }
          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm()
        }}
      >
        {({ errors }) => (
          <Form className='form-container'>
            <label>Nombre</label>
            <Field
              className='input-field'
              type='text'
              name='name'
              placeholder='Escribe tu Nombre'
            />
            <ErrorMessage
              name='name'
              component={() => (
                <div className='form-text error'>{errors.name}</div>
              )}
            />
            <label className='form-label'>Email</label>
            <Field
              className='input-field'
              type='email'
              name='email'
              placeholder='Escribe tu Email'
            />
            <ErrorMessage
              name='email'
              component={() => (
                <div className='form-text error'>{errors.email}</div>
              )}
            />
            <label>Telefono</label>
            <Field
              className='input-field'
              type='number'
              name='phone'
              placeholder='Escribe tu Numero de Telefono'
            />
            <ErrorMessage
              name='phone'
              component={() => (
                <div className='form-text error'>{errors.phone}</div>
              )}
            />
            <label>Mensaje</label>
            <Field
              className='input-field'
              as='textarea'
              name='message'
              placeholder='Escribe tu mensaje'
            />
            <ErrorMessage
              name='message'
              component={() => (
                <div className='form-text error'>{errors.message}</div>
              )}
            />
            <button className='submit-btn' type='submit'>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm

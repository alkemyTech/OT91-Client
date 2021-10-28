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

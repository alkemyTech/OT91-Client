import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validations } from '../../Services/validations'
import '../FormStyles.css'
import GenericInput from '../inputsForms/GenericInput'

const ContactForm = () => {
  const inputValues = [
    { english: 'username', spanish: 'Nombre' },
    { english: 'email', spanish: 'Email' },
    { english: 'phone', spanish: 'Teléfono' },
    { english: 'message', spanish: 'Mensaje' },
  ]
  return (
    <>
      <Formik
        initialValues={{
          username: '',
          email: '',
          phone: '',
          message: '',
        }}
        validate={validations}
        onSubmit={({ resetForm }) => {
          resetForm()
        }}
      >
        {({ errors }) => (
          <Form className='form-container'>
            {inputValues.map((inputValue) => (
              <GenericInput
                type={inputValue.english}
                name={inputValue.english}
                label={inputValue.spanish}
                placeholder={`Escribe tu ${inputValue.spanish}`}
                errors={errors[inputValue.english]}
              />
            ))}

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

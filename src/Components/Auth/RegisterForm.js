import React, { useState } from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';

const RegisterForm = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: ''
    });

    const validate = values => {
        const errors = {};
        
        const includesLetter = string => {
            const letters = /[A-Za-z]/;
            return !!letters.test(string)
        }

        const includesSymbols = string => {
            const symbols= /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
            return !!symbols.test(string);            
        }
        
        const includesNumbers= string => {
            const numbers = /[0-9]/;
            return !!numbers.test(string);
        }

        if (!values.email) {
            errors.email = 'Dato Obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email inválido';
        }
        if (!values.password) {
          errors.password = 'Dato Obligatorio';
        } else if (values.password.length < 6 || !includesLetter(values.password) || !includesSymbols(values.password) || !includesNumbers(values.password)) {
          errors.password = 'La contraseña debe ser de al menos 6 caracteres, tambien debe incluir al menos una letra y un símbolo(@#$%)';
        }

        if (!values.repeatedPassword) {
            errors.repeatedPassword = 'Dato Obligatorio';
        } else if (values.repeatedPassword !== values.password) {
            errors.repeatedPassword = `Las contraseñas no coinciden`;
        }
        return errors;
    };


    const {touched,errors,values,handleChange,handleSubmit,handleBlur} = useFormik({

        initialValues: {
          email: '',
          password: '',
          repeatedPassword: '',
        },
        validate,
        onSubmit: values => {
            setInitialValues({...initialValues,email:values.email,password:values.password})
            localStorage.setItem('token','tokenValueExample')
            console.log(initialValues)
        }
    });
    return (
        <form 
            className="form-container" 
            onSubmit={handleSubmit}
        >
            <input 
                className="input-field" 
                type="text"
                id="email"
                placeholder="Ingrese email"
                value={values.email} 
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {touched.email && errors.email }
            <input 
                className="input-field" 
                type="password" 
                id="password"
                value={values.password} 
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Contraseña"
            />
            {touched.password  && errors.password }
            <input 
                className="input-field" 
                type="password" 
                id="repeatedPassword" 
                value={values.repeatedPassword} 
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Reingrese la contraseña"
            />
            {touched.repeatedPassword && errors.repeatedPassword}
            <button className="submit-btn" type="submit">Registrarse</button>
        </form>
    );
}
 
export default RegisterForm;
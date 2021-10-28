import React from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';
import axios from 'axios';

const UserModifierForm = ({user}) => {

    const hasUser = !!user;

    const handleOnSubmit =  async (values) => {
        try{
            if(hasUser){
                await axios.put(`http://ongapi.alkemy.org/api/users/${user.id}`,values)
            }else{
               await axios.post('http://ongapi.alkemy.org/api/users',values);
            }
        }catch(error) {
        }
    };

    const validate = (values) => {
        const errors = {};

        const errorRequired = (key) => {
            if(!values[key]){
                errors[key] = 'Dato Obligatorio'
                return true
            }
            return false
        };

        const isValidType= key => {
            if (values.profilePhoto[key] === null){
                return 'Dato Obligatorio'
            }else if(values.profilePhoto[key] === "image/jpeg" || values.profilePhoto[key] === "image/png"){
                return true
            }
            return false
        }
        const isEmailValid = email => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)

        if (!errorRequired('name') && values.name.length < 4) {
          errors.name = 'Debe tener 4 caracteres o mas';
        };
      
        if (!errorRequired('email') && !isEmailValid(values.email)) {
          errors.email = 'Dirección de email inválida';
        };

        if(!values.roleId){
            errors.roleId = 'Elija un Rol'
        };

        if(!errorRequired('password') && values.password.length < 8){
            errors.password= 'La contraseña debe tener al menos 8 caracteres';
        };
        if(!errorRequired('profilePhoto') && !isValidType('type') ){
            errors.profilePhoto = 'Tipo de archivo no soportado, extensiones permitidas: jpg o png'
        }

        return errors;
    };

    const {values,touched,errors,handleSubmit,handleChange,handleBlur,setFieldValue} = useFormik({
        initialValues: {
            name: user?.name ?? '',
            password: user?.password ?? '',
            email: user?.email ?? '',
            roleId:user?.roleId ?? '',
            profilePhoto:user?.profilePhoto ?? {}
        },
        validate,
        enableReinitialize:true,
        onSubmit: values => {
            handleOnSubmit(values)
        },
    });

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            {hasUser              
                ?<div>
                    <img alt="profilePhoto" src={values.profilePhoto}></img>
                </div>
                :<div>
                    <label htmlFor="img">Seleccionar imagen: </label>
                    <input
                        type="file"
                        id="profilePhoto"
                        accept="image/jpeg"
                        onChange={e=>setFieldValue('profilePhoto',e?.target?.files ? e.target.files[0] : null)}
                        onBlur={handleBlur}
                    />
                    {touched.profilePhoto && errors.profilePhoto}
                </div>
            }
            <input 
                className="input-field" 
                type="text" 
                id="name" 
                value={values.name} 
                onChange={handleChange} 
                onBlur={handleBlur}
                placeholder="Nombre"
            />
            {touched.name && errors.name}
            <input 
                className="input-field" 
                type="text" 
                id="email" 
                value={values.email} 
                onChange={handleChange}
                onBlur={handleBlur} 
                placeholder="Email"
            />
            {touched.email && errors.email}
            <input 
                className="input-field" 
                type="password" 
                id="password" 
                value={values.password} 
                onChange={handleChange}
                onBlur={handleBlur} 
                placeholder="Contraseña"
            />
            {touched.password && errors.password}
            <select 
                className="input-field"
                value={values.roleId}
                id="roleId"
                onChange={handleChange}
            >
                <option value="" disabled >Seleccione el rol</option>
                <option value="Administrador">Administrador</option>
                <option value="Regular">Regular</option>
            </select>
            <button className="submit-btn" type="submit">{hasUser ? 'Modificar' : 'Crear'}</button>
        </form>
    );
}
 
export default UserModifierForm;
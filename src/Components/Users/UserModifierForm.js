import React from 'react';
import '../FormStyles.css';
import { useFormik } from 'formik';
import axios from 'axios';

const UserModifierForm = ({user}) => {

    const hasUser = !!user;

    const handleOnSubmit =  async (values) => {
        try{
            if(hasUser){
                await axios.patch(`http://ongapi.alkemy.org/api/users/${user.id}`,values)
            }else{
               await axios.post('http://ongapi.alkemy.org/api/users',values);
            }
        }catch(error) {
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Dato obligatorio';
        } else if (values.name.length < 4) {
          errors.name = 'Debe tener 4 caracteres o mas';
        };
      
        if (!values.email) {
          errors.email = 'Dato obligatorio';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Dirección de email inválida';
        };

        if(!values.roleId){
            errors.roleId = 'Elija un Rol'
        };

        if(!values.password){
            errors.password = 'Dato obligatorio';
        }else if(values.password.length < 8){
            errors.password= 'La contraseña debe tener al menos 8 caracteres';
        };
        if(!values.profilePhoto){
            errors.profilePhoto = 'Por favor suba un archivo'
        }
        
      
        return errors;
    };

    const {values,touched,errors,handleSubmit,handleChange,handleBlur} = useFormik({
        initialValues: {
            name: user?.name ?? '',
            password: user?.password ?? '',
            email: user?.email ?? '',
            roleId:user?.roleId ?? '',
            profilePhoto:user?.profilePhoto ?? ''
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
                        onChange={handleChange}
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
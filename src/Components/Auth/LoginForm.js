import { useFormik } from 'formik';
import { errorRequired, regExp } from '../../Utils/validation';
import '../FormStyles.css';

const validateLogin = formData => {
    const errors = {};
    const notValidEmail = !errorRequired(formData, errors, 'email') && !validValue(regExp.email, formData.email);
    const notValidPassword = !errorRequired(formData, errors, 'password') && !validValue(regExp.password, formData.password);

    if(notValidEmail) errors.email = 'Email inválido';
    if(notValidPassword) errors.password = 'La contraseña debe tener al menos 6 caracteres e incluir al menos una letra, un número y un símbolo';

    return errors;
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: validateLogin,
        onSubmit: formData => { }
    })

    return (
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <input className="input-field" type="email" name="email" value={formik.values.name} onChange={formik.handleChange} placeholder="Enter email"></input>
            <input className="input-field" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Enter password"></input>
            <button className="submit-btn" type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;

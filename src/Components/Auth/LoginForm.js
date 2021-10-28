import { useFormik } from 'formik';
import '../FormStyles.css';

const notHasValue = (data, value) => !(data[value] && data[value].length > 0)
const isNotValidValue = (regExp, value) => !regExp.test(value)

const validateLogin = formData => {
    const errors = {};
    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegExp = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{6,}$/i;

    if(notHasValue(formData, 'email'))
        errors.email = 'This field cannot be blank';
    else if(isNotValidValue(emailRegExp, formData.email))
        errors.email = 'Invalid email';

    if(notHasValue(formData, 'password'))
        errors.password = 'This field cannot be blank';
    else if(formData.password.length < 6)
        errors.password = 'Password must contain at least 6 characters';
    else if(isNotValidValue(passwordRegExp, formData.password))
        errors.password = 'Password must include each of the following character types: letter, number, symbol';

    return errors;
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: validateLogin,
        onSubmit: formData => {
            const tempObj = formData;
        }
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

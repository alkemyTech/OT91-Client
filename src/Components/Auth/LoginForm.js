import { useFormik } from 'formik';
import '../FormStyles.css';

const hasValue = (data, value) => data[value] && data[value].lenght > 0
const isValidValue = (regExp, value) => regExp.test(value)

const validateLogin = formData => {
    const errors = {};
    const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegExp = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{6,}$/i;

    if(!hasValue(formData, 'email'))
        errors.email = 'This field cannot be blank';
    else if(!isValidValue(emailRegExp, formData.email))
        errors.email = 'Invalid email';

    if(!hasValue(formData, 'password'))
        errors.password = 'This field cannot be blank';
    else if(formData.value < 6)
        errors.password = 'Password must contain at least 6 characters'
    else if(!isValidValue(passwordRegExp, formData.password))
        errors.password = 'Password must include each of the following character types: letter, number, symbol';

    return errors;
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: validateLogin
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        localStorage.setItem('token', 'tokenValueExample')
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="email" name="email" value={formik.values.name} onChange={formik.handleChange} placeholder="Enter email"></input>
            <input className="input-field" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Enter password"></input>
            <button className="submit-btn" type="submit">Log In</button>
        </form>
    );
}

export default LoginForm;

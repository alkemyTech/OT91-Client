import { useFormik } from 'formik';
import '../FormStyles.css';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }
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

import { ShowTextInput } from '../Inputs/ShowTextInput';
import { ShowFileInput } from '../Inputs/ShowFileInput';
import { ShowCKEditorInput } from '../Inputs/ShowCKEditorInput';
import { validateRequiredValues, regExp, isValidValue, isValidFile, hasRequiredError} from '../../Utils/validation';
import { showError, handleCKEditorChange, changeTouchedState, handleFileChange } from '../../Utils/handlers';
import { useFormik } from 'formik';
import '../FormStyles.css';

const validateOrganizationForm = values => {
    const errors = {};
    const {facebook, instagram, ...requiredValues} = values;
    const acceptTypes = ['image/png', 'image/jpg'];
    const notValidUrlFacebook = !isValidValue(regExp.url, facebook);
    const notValidUrlInstagram = !isValidValue(regExp.url, instagram);
    const notValidImage = !isValidFile(acceptTypes, values.logo);

    validateRequiredValues(values, errors, requiredValues);
    if(notValidImage) errors.logo = 'Solo se aceptan formatos .png y .jpg'
    if(notValidUrlFacebook) errors.facebook = 'Debe ser una url válida';
    if(notValidUrlInstagram) errors.instagram = 'Debe ser una url válida';

    return errors;
}

const DataEditForm = () => {
    const initialValues = {
        organizationName: '',
        shortDescription: '',
        logo: '',
        longDescription: '',
        facebook: '',
        instagram: ''
    };

    const formik = useFormik({
        initialValues: initialValues,
        validate: validateOrganizationForm,
        onSubmit: values => {}
    });

    return (
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <ShowTextInput name="organizationName" label="Nombre" type="text" placeholder="Ingrese el nombre de la organización"
                value={formik.values.organizationName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errorMessage={showError(formik, 'organizationName')}/>
            <ShowCKEditorInput
                name="shortDescription" label="Descripción corta"
                value={formik.values.shortDescription}
                onChange={(e, editor) => handleCKEditorChange(formik, editor, 'shortDescription')}
                onBlur={() => changeTouchedState(formik, 'shortDescription')}
                errorMessage={showError(formik, 'shortDescription')}/>
            <ShowFileInput btnText="Subir logo" name="logo" color="primary" accept="image/png, image/jpg"
                value={formik.values.logo}
                onChange={(e) => handleFileChange(formik, e.target.files, 'logo')}
                errorMessage={showError(formik, 'logo')}/>
            <ShowTextInput name="longDescription" label="Descripcion larga" type="text"
                value={formik.values.longDescription}
                onChange={formik.handleChange} placeholder="Escriba la descripción larga"
                onBlur={formik.handleBlur}
                errorMessage={showError(formik, 'longDescription')}/>
            <ShowTextInput name="facebook" label="Facebook" type="text"
                value={formik.values.facebook}
                onChange={formik.handleChange} placeholder="Ingrese la url"
                onBlur={formik.handleBlur}
                errorMessage={showError(formik, 'facebook')}/>
            <ShowTextInput name="instagram" label="Instagram" type="text"
                value={formik.values.instagram}
                onChange={formik.handleChange} placeholder="Ingrese la url"
                onBlur={formik.handleBlur}
                errorMessage={showError(formik, 'instagram')}/>
            <button className="submit-btn" type="submit">Guardar cambios</button>
        </form>
    )
}

export default DataEditForm;

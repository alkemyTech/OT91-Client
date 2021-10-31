import {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { UrlInput } from '../common/getUrlInputFile';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {getTestimonial} from '../../Services/testimonialService';
import { CustomErrorMessage } from '../common/CustomErrorMessage';
import {setCKEditorText} from '../common/ckEditor/setCKEditorText';
import { validateTestimonials} from '../common/validations/validateFormTestimonials';
import {dispatchRequestcreateOrUpdateTestimonial} from '../../Services/testimonialService'
const TestimonialForm = ({testimonialId}) => {

  const [testimonial, setTestimonial] = useState({
    name:'',
    description:'',
    image: ''
  });

  useEffect(() => {
    if(testimonialId) setTestimonial(getTestimonial(testimonialId));
  }, [testimonialId]);

  const handleChangeDescription = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData())
  };

  const handleChangeImage = (e, setFieldValue) =>{ 
    UrlInput(e,setFieldValue);
  };

  const handleSubmit = (values) => {
    let updatedValues =setCKEditorText(values,'description')
    dispatchRequestcreateOrUpdateTestimonial(testimonialId,updatedValues)
  }

  const placeholder = "Write some testimonial description";
  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          ...testimonial
        }}
        validate={(values)=>validateTestimonials(values)}
        onSubmit={(values)=>handleSubmit(values)}
      >
        {({errors, setFieldValue,values})=>(
          <Form className='form' >
            <div>
              <p>Testimonial Name</p>
              <Field
                className="input-field" 
                type="text" 
                id='name'
                name="name"
                placeholder="Testimonial Name" 
              /> 
              {errors.name && CustomErrorMessage ('title',errors.name)}
            </div>
            <div>
              <p>Description</p>
              <CKEditor
                  editor={ ClassicEditor }
                  data=''
                  config={ {
                     placeholder
                  } }
                  onChange={(event, description)=>handleChangeDescription (description,setFieldValue)}
              />
              {errors.description && CustomErrorMessage ('description',errors.description)}
            </div>
            <div >
              <p >Image</p>
              <div>
                {testimonial.image && <img src={testimonial.image} alt='imagen vista previa' width='180' height='180' />} 
              </div>
              <div>
                <Field
                    className='input-image'
                    type='file' 
                    accept="image/png, image/jpg" 
                    id='image'                                
                    name='image' 
                    value=''
                    onChange={(e)=>{ 
                        handleChangeImage(e,setFieldValue)
                    }}
                /> 
              </div> 
              {errors.image && CustomErrorMessage ('image',errors.image)}
            </div>
            <button className="submit-btn" type="submit">Send</button>
          </Form> 
        )}
      </Formik>
    </div>
  );
};

export default TestimonialForm;
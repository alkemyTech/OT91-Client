import {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import { ErrorsForm } from '../common/messagesForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { UrlInput } from '../common/getUrlInputFile';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { validateFormTestimonials, replaceCKeditor } from '../common/validateFormTestimonials';
import {getTestimonial,createTestimonial,modifiedTestimonial} from '../../Services/testimonialService';
const TestimonialForm = ({testimonialId}) => {

  const [imgState,setImgState] = useState();
  const [dataForm, setDataForm] = useState({
    name:'',
    description:'',
    image: ''
  });

  useEffect(() => {
    if(testimonialId) setDataForm(getTestimonial(testimonialId));
  }, [testimonialId]);

  const handleChaneCkEditor = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData())
  };

  const handleChangeinputFile = (e, setFieldValue) =>{ 
    UrlInput(e, setImgState,setFieldValue);
  };

  const placeholder = "Write some testimonial description";
  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          ...dataForm
        }}
        validate={(values)=>validateFormTestimonials(values)}
        onSubmit={(values)=>{
          let valuesForm=replaceCKeditor(values)
          testimonialId ?   modifiedTestimonial( testimonialId, valuesForm ) : createTestimonial(valuesForm)
        }}
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
              {errors.name && ErrorsForm ('title',errors.name)}
            </div>
            <div>
              <p>Description</p>
              <CKEditor
                  editor={ ClassicEditor }
                  data=''
                  config={ {
                     placeholder
                  } }
                  onChange={(event, editor)=>handleChaneCkEditor(editor,setFieldValue)}
              />
              {errors.description && ErrorsForm ('description',errors.description)}
            </div>
            <div >
              <p >Image</p>
              <div>
                {imgState && <img src={imgState} alt='imagen vista previa' width='180' height='180' />} 
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
                        handleChangeinputFile(e,setFieldValue)
                    }}
                /> 
              </div> 
              {errors.image && ErrorsForm ('image',errors.image)}
            </div>
            <button className="submit-btn" type="submit">Send</button>
          </Form> 
        )}
      </Formik>
    </div>
  );
};

export default TestimonialForm;
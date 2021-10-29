import {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import { ErrorsForm } from '../common/messagesForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { UrlInput } from '../common/getUrlInputFile';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { validateForm, replaceCKeditor } from '../common/validateForm';
import {getActivity,createActivity,modifiedActivity} from '../../Services/activityService';
const ActivitiesForm = ({activityId}) => {

  const [imgState,setImgState] = useState();
  const [dataForm, setDataForm] = useState({
    name:'',
    description:'',
    image:''
  });

  useEffect(() => {
    if(activityId) setDataForm(getActivity(activityId));
  }, [activityId]);

  const handleChaneCkEditor = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData())
  };

  const handleChangeinputFile = (e, setFieldValue) =>{ 
    UrlInput(e, setImgState,setFieldValue);
  };

  return (
    <div className='form-container'>
      <Formik
        initialValues={{
          ...dataForm
        }}
        validate={(values)=>validateForm(values)}
        onSubmit={(values)=>{
          const dataForm= replaceCKeditor(values)
          activityId ?   modifiedActivity( activityId, dataForm) : createActivity(dataForm)
        }}
      >
        {({errors, setFieldValue})=>(
          <Form className='form' >
            <div>
              <p>Activity Name</p>
              <Field
                className="input-field" 
                type="text" 
                id='name'
                name="name"
                placeholder="Activity Name" 
              /> 
              {errors.name && ErrorsForm ('title',errors.name)}
            </div>
            <div>
              <p>Description</p>
              <CKEditor
                  editor={ ClassicEditor }
                  data=''
                  config={ {
                      placeholder:"Write some activity description",
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
                      handleChangeinputFile(e, setFieldValue)
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

export default ActivitiesForm;
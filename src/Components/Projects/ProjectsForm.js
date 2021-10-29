import {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import { ErrorsForm } from '../common/messagesForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { UrlInput } from '../common/getUrlInputFile';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {getProject,createProject,modifiedProject} from '../../Services/projectService';

const ProjectsForm = ({projectId}) => {

  var minDateForm = new Date().toISOString().split('T')[0];

  const [imgState,setImgState] = useState();
  const [dataForm, setDataForm] = useState({
    title:'',
    description:'',
    image:'',
    up_date:''
  });

  useEffect(() => {
    if(projectId) setDataForm(getProject(projectId));
  }, [projectId]);

  const handleChaneCkEditor = (editor, setFieldValue) => {
    setFieldValue("description", editor.getData())
  };

  const handleChangeinputFile = (e, setFieldValue) =>{ 
    UrlInput(e, setImgState, setFieldValue);
  };

    return (
      <div className='form-container'>
        <Formik
          initialValues={{
              ...dataForm
          }}
          validate={(values)=>{
              let errors={}

              if(!values.image) errors.image='You need to add a image.';
              
              if(!values.title) errors.title='You need to enter a title';
              if(values.title.length<4) errors.title='The title must have more than 4 letters.';
              
              if(!values.description) errors.description='You need to add a description.';
      
              return errors;
          }}
          onSubmit={async (values)=>{

            values.description=values.description.replace(/'<p>'|['</p>']/gi,'');
            projectId ?  modifiedProject( projectId, values ) : createProject(values);

          }}
            
        >
          {({errors, setFieldValue})=>(
            <Form className='form' >
              <div >
                <p>Project Title</p>
                <Field
                  className="input-field" 
                  type="text" 
                  id='title'
                  name="title"
                  placeholder="Activity Title" 
                /> 
                {errors.title && ErrorsForm ('title',errors.title)}
              </div>
                <div>
                  <p>Date</p>
                  <Field
                    className='input-field'
                    type='date' 
                    min={minDateForm}
                    name='up_date' 
                    id='up_date'
                  />
                </div>
                <div >
                  <p >Description</p>
                  <CKEditor
                    className='input-field'
                    editor={ ClassicEditor }
                    data=''
                    config={ {
                        placeholder:"Write some activity description",
                    } }
                    onChange={(event, editor)=>handleChaneCkEditor(editor,setFieldValue)}
                  />
                  {errors.description && ErrorsForm ('description',errors.description)}
                </div>
                <div>
                    <p>Image</p>
                    <div>
                        {imgState && <img src={imgState} alt='imagen vista previa' width='180' height='180' />} 
                      </div>
                    <div>
                      <Field
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

export default ProjectsForm
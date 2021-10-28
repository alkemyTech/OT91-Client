import React, {useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {Formik, Form, Field,ErrorMessage} from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {getDataForm,postDataForm,putDataForm} from './function'

export default function ProjectsForm({idProyect}){

  var date = new Date();
  date=date.toISOString().split('T')[0];

  const [imgState,setImg] = useState('');
  const [state, setstate] = useState('');

  useEffect(() => {
    if(idProyect) setstate(getDataForm(idProyect));
  }, [idProyect]);

    return (
      <div className='form-container'>
          <Formik
              initialValues={state? {
                title:state.title,
                description:state.description,
                image:state.image,
                up_date:state.up_date
              }:{
                  title:'',
                  description:'',
                  image:'',
                  up_date:''
              }}
              validate={(valores)=>{
                  let errors={}

                  if(!valores.image) errors.image='You need to add a image.';
                  
                  if(!valores.title) errors.title='You need to enter a title';
                  if(valores.title.length<4) errors.title='The title must have more than 4 letters.';
                  
                  if(!valores.description) errors.description='You need to add a description.';
          
                  return errors;
              }}
              onSubmit={async (values)=>{
                const stringreplace =/'<p>'|['</p>']/gi;
                values.description=values.description.replace(stringreplace,'');
                idProyect ?  putDataForm( idProyect, values ) :postDataForm(values)
              }}
              
          >
              {({errors, setFieldValue, values})=>(
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
                          <ErrorMessage name='title' component={()=><p className='form_div_error'>{errors.title}</p>}/>
                      </div>
                      <div>
                        <p>Date</p>
                        <Field
                          className='input-field'
                          type='date' 
                          min={date}
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
                            onChange={( event, editor )=> {
                              const data = editor.getData();
                              setFieldValue("description", data)
                            } }
                          />
                        <ErrorMessage name='description' component={()=><p className='form_div_error'>{errors.description}</p>}/> 
                      </div>
                      <div>
                          <p>Image</p>
                          <div>
                              {imgState.length>0 && <img src={imgState} alt='imagen vista previa' width='180' height='180' />} 
                            </div>
                          <div>
                            <Field
                                type='file' 
                                accept="image/png, image/jpg" 
                                id='image'                                
                                name='image' 
                                value={undefined}
                                onChange={(e) => {
                                  setFieldValue("image",e)
                                  const imageFile = e.target.files[0];
                                  const imageUrl = new FileReader();
                                  imageUrl.readAsDataURL(imageFile)
                                  imageUrl.onload=(e)=>{
                                      setImg(e.target?.result)
                                  };
                                }}
                            /> 
                          </div>
                          <ErrorMessage name='image' component={()=><p className='form_div_error'>{errors.image}</p>}/> 
                      </div>
                      <button className="submit-btn" type="submit">Send</button>
                  </Form> 
              )}
          </Formik>
      </div>
  );
};

import React, {useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {Formik, Form, Field,ErrorMessage} from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {getDataForm} from './function'

export default function ProjectsForm({idProyect}){
  var date = new Date();
  date=date.toISOString().split('T')[0];

  const [state, setstate] = useState(undefined)

  useEffect(() => {
    if(idProyect){
      let res =getDataForm(idProyect)
      setstate(res)
    }
  }, [idProyect])

    return (
      <div className='div_form'>
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

                  if(!valores.title) errors.title='You need to enter a title'
                  if(valores.title.length<4) errors.title='The title must have more than 4 letters'
                  
                  if(!valores.description) errors.description='You need to add a description'
                  
                  if(!valores.image) errors.image='You need to add a image'
                  
                  return errors
              }}
              onSubmit={async (values)=>{
                const stringreplace =/'<p>'|['</p>']/gi;
                values.description=values.description.replace(stringreplace,'')
                console.log(values)
              }}
              
          >
              {({errors, setFieldValue})=>(
                  <Form className='form' >
                      <div className='form_div'>
                          <p>Project Title</p>
                          <Field
                            className="input-title" 
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
                          type='date' 
                          min={date}
                          name='due_date' 
                          id='up_date'
                        />
                      </div>
                      <div className='form_div'>
                          <p className='form_div_p'>Description</p>
                          <CKEditor
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
                      <div className='form_div'>
                          <p className='form_div_p'>Image</p>
                          <Field
                              className='input-image'
                              type='file' 
                              accept="image/png, image/jpg" 
                              id='image'                                
                              name='image' 
                              value={undefined}
                              onChange={(e) => {
                                const imageFile = e.target.files[0];
                                const imageUrl = new FileReader();
                                imageUrl.readAsDataURL(imageFile)
                                imageUrl.onload=(e)=>{
                                    setFieldValue("image",e.target.result)
                                };
                              }}
                          />  
                          <ErrorMessage name='image' component={()=><p className='form_div_error'>{errors.image}</p>}/> 
                      </div>
                      <button className="submit-btn" type="submit">Send</button>
                  </Form> 
              )}
          </Formik>
      </div>
  );
};

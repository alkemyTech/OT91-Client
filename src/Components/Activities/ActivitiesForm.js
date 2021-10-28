import React, {useEffect, useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {Formik, Form, Field,ErrorMessage} from 'formik';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {getDataForm, postDataForm, putDataForm} from './function';

export default function ActivitiesForm({idActivity}){


  const [imgState,setImg] = useState('');
  const [state, setstate] = useState('');

  useEffect(() => {
    if(idActivity) setstate(getDataForm(idActivity));
  }, [idActivity]);

    return (
      <div className='form-container'>
          <Formik
              initialValues={state? {
                name:state.name,
                description:state.description,
                image:state.image,
              }:{
                  name:'',
                  description:'',
                  image:'',
              }}
              validate={(valores)=>{
                  let errors={}

                  if(!valores.image) errors.image='You need to add a image';

                  if(!valores.name) errors.name='You need to enter a name';
                  if(valores.name.length<4) errors.name='The name must have more than 4 letters';
                  
                  if(!valores.description) errors.description='You need to add a description';
                  
                  return errors
              }}
              onSubmit={(values)=>{
                const stringreplace =/'<p>'|['</p>']/gi;
                values.description=values.description.replace(stringreplace,'');
                idActivity ?  putDataForm( idActivity, values ) :postDataForm(values)
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
                          <ErrorMessage name='name' component={()=><p className='form_div_error'>{errors.name}</p>}/>
                      </div>
                      <div>
                          <p>Description</p>
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
                        <ErrorMessage name='description' component={()=><p >{errors.description}</p>}/> 
                      </div>
                      <div >
                          <p >Image</p>
                          <div>
                            {imgState.length>0 && <img src={imgState} alt='imagen vista previa'  width='180' height='180'  />} 
                          </div>
                          <div>
                            <Field
                                className='input-image'
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
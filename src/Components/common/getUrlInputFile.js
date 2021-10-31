
export const UrlInput = (e,setFieldValue) =>{

  const imageFile = e.target.files[0];
  const imageUrl = new FileReader();
  imageUrl.readAsDataURL(imageFile)
  imageUrl.onload=(e)=>{
    setFieldValue("image",e.target.result)
  }

}

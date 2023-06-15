import React, { useEffect, useState } from 'react'
import Input from '../components/Input'
import { BiCamera } from "react-icons/bi";

function UPImg() {
    const [images,setImages] = useState([])
    const [imagesUrl,setImagesUrl] = useState([])

    useEffect(() => {
        if(images.length < 1) return
        const newImagesUrl = []
        images.map((item)=> newImagesUrl.push(URL.createObjectURL(item)))
        setImagesUrl(newImagesUrl)
        
    },[images])

    const onImageChange = (e) => {
        setImages([...e.target.files]);
      }
    
      const handleImageRemove = (index) => {
        const filteredImagesUrl = imagesUrl.filter((_, i) => i !== index);
        setImagesUrl(filteredImagesUrl);
        const filteredImages = images.filter((_, i) => i !== index);
        setImages(filteredImages);
      
        URL.revokeObjectURL(imagesUrl[index]);
      }

    // console.table({"Images":images,"ImageUrl":imagesUrl})
    console.log("Images",images)
    console.log("ImageUrl",imagesUrl)
  return (
    <div>
        UPImg
        <input type='file' 
        multiple 
        accept='image/*' 
        onChange={onImageChange}/>

        {imagesUrl.map((item , index) => {
            return (
            <div key={`img${index}`}>
                <img  src={item} alt='' width="150" height="150"/>
                <button onClick={() => handleImageRemove(index)}>Remove</button>
            </div>
                
                )
        })}
    </div>
  )
}

export default UPImg
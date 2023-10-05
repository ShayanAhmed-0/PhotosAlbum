"use client"
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
// import cloudinary from "cloudinary";
// import { useState } from 'react';


// export default  function Home() {
//   return (
//    <>
 
//  <CldUploadButton uploadPreset="ml_default" />
//  {/* <CldImage
//    width="960"
//    height="600"
//    src={imageId}
//    sizes="100vw"
//    alt="Description of my image"
//  /> */}
//    </>
//   )
// }

import React from 'react'
import { useRouter } from 'next/navigation';
const Uploadbutton = () => {
    const Router = useRouter()
  return (
    <div>
      <CldUploadButton 
      uploadPreset="ml_default" 
      onUpload={()=>{
        setTimeout(()=>{
            Router.refresh()
        },1000)
    }}
      />
    </div>
  )
}

export default Uploadbutton


"use client"
import Image from 'next/image'
import { CldImage } from 'next-cloudinary';
import { CldUploadButton } from 'next-cloudinary';
import cloudinary from "cloudinary";
import { useState } from 'react';

type uploadResults={
info:{
  public_id:string
}
}

export default  function Home() {
  // await cloudinary.v2.uploader
  // .upload('feature.webp', {
  //   folder: 'photoalbum',
  //   resource_type: 'image'})
  // .then(console.log);
  const [imageId,setImageId]=useState('photoalbum/photo-1696379042607-f93eeb639781_ufg')
  return (
   <>
 
 <CldUploadButton uploadPreset="ml_default"
 onUpload={(results:any)=>{
   console.log(results)
setImageId(results.info.public_id)

 }}
 />
 <CldImage
   width="960"
   height="600"
   src={imageId}
   sizes="100vw"
   alt="Description of my image"
 />
   </>
  )
}

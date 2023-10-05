"use client"

import { CldImage } from "next-cloudinary"

const CloudinaryImg = (props:any) => {
  return (
      <CldImage {...props} /> 
  )
}

export default CloudinaryImg

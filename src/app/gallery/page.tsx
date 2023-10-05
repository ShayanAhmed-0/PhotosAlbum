import React from 'react'
import cloudinary from "cloudinary"
import Uploadbutton from './Uploadbutton';
import { CldImage } from 'next-cloudinary';
import CloudinaryImg from './CloudinaryImg';


export type SerachResults={
    public_id:string
    tags:string[]
}

const page = async() => {


    const results= (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at','desc')
    .max_results(2)
    .with_field("tags")
    .execute()) as {resources: SerachResults[]}
// console.log(results)
  return (
    <div>
        <Uploadbutton />
        <div className='grid grid-cols-8 gap-4'>

        
        {
            results.resources.map((imgs:any)=>
           <CloudinaryImg 
           res={imgs}
  key = {imgs.public_id}
   width="200"
   height="640"
   src={imgs.public_id}
   sizes="100vw"
   alt="Description of my image"
 /> 
            )
        }
      </div>
    </div>
  )
}

export default page

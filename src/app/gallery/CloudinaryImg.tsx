"use client"

import { CldImage } from "next-cloudinary"
import { useTransition } from "react"
import { SerachResults } from "./page"
import { Markfav } from "./markfav"

const CloudinaryImg = (props:any) => {
    const [transition,startTransition]=useTransition()
    const isFav= props.res.tags.includes("favourite")
    // console.log(props.res)
  return (
      <>
      <CldImage {...props} /> 
{
    isFav?
<button onClick={()=>startTransition(()=>Markfav(props.res.public_id,false))}>
        UnFav
        </button>:
<button onClick={()=>startTransition(()=>Markfav(props.res.public_id,true))}>
        Fav
        </button>
}
        
        </>

  )
}

export default CloudinaryImg

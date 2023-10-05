"use server";
import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";
import { resolve } from "path";

export async function Markfav(
  publicId: string,
  isFavorite: boolean
) {
  if (isFavorite) {
    await cloudinary.v2.uploader.add_tag("favourite", [publicId]);
  } else {
    await cloudinary.v2.uploader.remove_tag("favourite", [publicId]);
  }
  await new Promise(resolve=>setTimeout(resolve,1000))
  revalidatePath("/gallery")
}

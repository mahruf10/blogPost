"use server"

import { blogData, blogService } from "./blog.services"

export const createBlog=async(formData:blogData)=>{
    const res=await blogService.createBlog(formData)
    return res
}

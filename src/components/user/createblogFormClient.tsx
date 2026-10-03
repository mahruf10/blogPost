"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../../../@/components/ui/field";
import { Input } from "../../../@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import * as zod from "zod"
import { createBlog } from "../../service/server.action";
import { toast } from "../../../@/components/ui/toast";
const ClientForm = () => {
//     const createBlog=async(formData:FormData)=>{
//   "use server"
//   const title=formData.get('title') as string
//     const tags=formData.get('tags') as string
//     const blogData={
//         title,
//         tags:tags.split(",").map(tag=>tag.trim()).filter(tag=>tag!=""),
//     }

//      const cookieStore=await cookies()
    
//     const res=await fetch('http://localhost:5000/posts',{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json',
//             cookie: cookieStore.toString()
//         },
//         body:JSON.stringify(blogData)
//         })
//     }
const formSchema=zod.object({
 title:zod.string().min(3,'title must be 3 characters'),
 tags:zod.string()
})
const form=useForm({
    defaultValues:{
        title:'',
        tags:''
    },
    onSubmit:async({value})=>{
       
     try {
         const blogData = {
      title: value.title,
      tags: value.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== ""),
    }
        const res=await createBlog(blogData)
        if(res.error){
            return {error:'post is not created'}
        }
        if(res.data){
          console.log('data is added');
        }
        
     } catch (error) {
        console.log(error.message);
     }
    },

    validators:{
   onSubmit:formSchema
    }

    
})
    return (
       <Card className='max-w-2xl mx-auto'>
        <CardHeader>
            <CardTitle>Create Blog</CardTitle>
            <CardDescription>you can write your blog here</CardDescription>
            </CardHeader>
            <CardContent>
                <form id='blog-form' onSubmit={(e)=>{
                    e.preventDefault()
                    form.handleSubmit()
                }}>
                    < FieldGroup>
                         <form.Field name="title" children={(field)=>{
        const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                   <Field>
                    <FieldLabel>Title</FieldLabel>
                    <Input id={field.name} 
                    name={field.name}
                    type={'text'}
                     value={field.state.value} 
                     onChange={(e)=>{field.handleChange(e.target.value)}}>

                     </Input>
                     {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                   </Field>
                )
                    
              }
                
                }></form.Field>
                         
                          <form.Field name="tags" children={(field)=>{
        const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                   <Field>
                    <FieldLabel>Tegs</FieldLabel>
                    <Input id={field.name} 
                    name={field.name}
                    type={'text'}
                     value={field.state.value} 
                     onChange={(e)=>{field.handleChange(e.target.value)}}>

                     </Input>
                     {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                   </Field>
                )
                    
              }
                
                }></form.Field>
                       
                    </FieldGroup>
                </form>
            </CardContent>
        <CardFooter >
            <button form='blog-form' type='submit' className='w-full'>Submit</button>
        </CardFooter>
       </Card>
    );
};

export default ClientForm;
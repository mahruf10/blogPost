"use client"

import { cn } from "cn"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../src/components/ui/card"
 import {useForm} from '@tanstack/react-form'

import { authClient } from "../../src/lib/auth-client"
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field"

import { Input } from "./ui/input"
import * as zod from "zod"

export function SignupForm({
  className,
  ...props
}) {

   const formSchema=zod.object({
  name:zod.string().min(1,"Name is required"),
  email:zod.email(),
  password:zod.string().min(6,"Password must be at least 6 characters")
 })

 const form=useForm({
  defaultValues:{
    name:'',
    email:'',
    password:''
  },
  onSubmit:async({value})=>{
    
    try {
      const {data,error}=await authClient.signUp.email(value)
    if(error){
      return error.message
    }
    console.log('created user',value);
    } catch (error) {
      return 'something went wrong,try again...'
    }
    
  },
  validators:{
    onSubmit:formSchema
  }
 })


  const loginwithGoogle =async () => {

  const data=await authClient.signIn.social({
    provider:"google",
    callbackURL:"http://localhost:3000"
  })

  console.log("Login with Google clicked");
}

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Sign up for an account</CardTitle>
          <CardDescription>
            Enter your details below to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => {
            e.preventDefault();
           form.handleSubmit()
          }}>
            <FieldGroup className="">
              <form.Field name="name" children={(field)=>{
  const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                   <Field>
                    <FieldLabel>name</FieldLabel>
                    <Input id={field.name} 
                    name={field.name}
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
              <form.Field name="email" children={(field)=>{
        const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                   <Field>
                    <FieldLabel>email</FieldLabel>
                    <Input id={field.name} 
                    name={field.name}
                    type={'email'}
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
              <form.Field name="password" children={(field)=>{
       const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                   <Field>
                    <FieldLabel>password</FieldLabel>
                    <Input id={field.name} 
                    name={field.name}
                    type={'password'}
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
       <button type="submit">submit</button>
          </form>
          <button onClick={loginwithGoogle}>Sign up with Google</button>
        </CardContent>
      </Card>
    </div>
  )
}

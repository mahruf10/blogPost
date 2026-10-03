import { cookies } from "next/headers";

 export  interface blogData{
        title:string,
        tags?:string[]
    }

export const blogService={
    getBlogPost:async()=>{

 const cookieStore = await cookies();
        try {
            //no dynamic and no {cache: 'no-store'} for static generation
            //{cache: 'no-store'} SSR:for dynamic generation
            //{next:{revalidate:10}} ISR:for dynamic & static generation    
           // const res=await fetch('http://localhost:5000/posts',{next:{revalidate:10}},{Credential:"include"})
            const res = await fetch("http://localhost:5000/posts", {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store", // logged-in user er data, tai cache na kora-i bhalo
      });
    const data=await res.json()
    
    return {data:data,error:null}
        } catch (error) {
            return {data:null,error:error.message}
        }
    },
    getBlogPostById:async(id:string)=>{ 
       const cookieStore = await cookies();
        try {
            //no dynamic and no {cache: 'no-store'} for static generation
            //{cache: 'no-store'} SSR:for dynamic generation
            //{next:{revalidate:10}} ISR:for dynamic & static generation    
           // const res=await fetch('http://localhost:5000/posts',{next:{revalidate:10}},{Credential:"include"})
            const res = await fetch(`http://localhost:5000/posts/author/${id}`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store", // logged-in user er data, tai cache na kora-i bhalo
      });
    const data=await res.json()
    console.log(data);
    return {data:data,error:null}
        } catch (error) {
            return {data:null,error:error.message}
        }
    },

  
    createBlog: async(blogData:blogData)=>{  

    try {
             const cookieStore=await cookies()
             const res=await fetch('http://localhost:5000/posts',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    cookie: cookieStore.toString()
                },
                body:JSON.stringify(blogData)
                }) 
                const data=await res.json()
                return {data:data,error:null}
    } catch (error) {
        console.log(error);
        return {data:null,error:error.message}
    }
        
    }    
    }  
   

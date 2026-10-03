import Image from "next/image";
import Navbar from "../components/navbar";
import { Button } from "../components/ui/button";
import { authClient } from "../lib/auth-client";
import { blogService } from "../service/blog.services";
import { Session } from "../service/Session";
export default async function Page() {
  const session = await Session();
  const {data}= await blogService.getBlogPost()
  console.log(data,session);
  return (
    <div className=" flex flex-col items-center justify-center w-11/12 mx-auto gap-4">
      <Navbar></Navbar>
      <h1 className="text-2xl font-bold">Welcome to my Blog Page!</h1>
      <div className="relative w-full h-96">
         <Image fill className="object-cover rounded-md" src="https://cdn.procook.co.uk/68c73f6c-4db7-4861-a164-b24b00bbd31b/Product-image-square/Sophie_Coffee-Location-553.jpg" alt="Hero" />
      </div>
      {/* <img src="https://cdn.procook.co.uk/68c73f6c-4db7-4861-a164-b24b00bbd31b/Product-image-square/Sophie_Coffee-Location-553.jpg" alt="" /> */}
     
    </div>
  );
}
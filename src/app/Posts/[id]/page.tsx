import React from 'react';
import { blogService } from '../../../service/blog.services';
import { PostDetailCard } from '../../../components/post-detail-card';

// export async function generateStaticParams(){
// const {data}=await blogService.getBlogPost();
// const ids=data.data.map(post=>post.id)
//     return data.data.map(post=>post.id)
// }
const page = async ({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;
    const {data}=await blogService.getBlogPostById(id)
    console.log(data);
    return (
        <div>
          <PostDetailCard post={data}></PostDetailCard>
        </div>
    );
};

export default page;
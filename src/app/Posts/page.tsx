import React from 'react';
import { blogService } from '../../service/blog.services';
import { PostCard } from '../../components/post-card';

const  PostsPage = async() => {
    const {data}=await blogService.getBlogPost();
    console.log(data);
    return (
        < div className="grid grid-cols-3 gap-4 mx-10 my-5">
            {data.data?.map((post: any) => (
              <  div >
              <PostCard  post={post}></ PostCard>
              </ div>
            ))}
        </div>
    );
};

export default PostsPage
import { PostProps } from '@/interfaces'
import React from 'react'

const PostsPage: React.FC<PostProps> = ({title,body,userId, id}) => {
  return (
  <div className='max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl 
  transition-shadow duration-300'>
    <div className='mb-4'>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <p className='text-gray-700'>{body}</p>
    </div>
    <div className='text-sm text-gray-500'>
      <p>User ID: {userId}</p>
      <p>Post ID: {id}</p>
    </div>
  </div>
  )
}

export default PostsPage
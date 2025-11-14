import React from 'react'

type PostCardProps = {
  title: string
  excerpt?: string
}

const PostCard: React.FC<PostCardProps> = ({ title, excerpt }) => {
  return (
    <div className="border p-4 rounded">
      <h3 className="text-xl font-semibold">{title}</h3>
      {excerpt && <p className="text-gray-600">{excerpt}</p>}
    </div>
  )
}

export default PostCard
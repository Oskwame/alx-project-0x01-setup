
import React from 'react'
import PostCard from '../../components/common/PostCard'
import Header from '../../components/layout/Header'
import { PostProps } from '@/interfaces'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}

type Props = {
  posts: PostProps[]
}

const PostsPage: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Header />
      <main className="p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.id} title={p.title} body={p.body} userId={0} id={0} />
        ))}
      </main>
    </div>
  )
}

  export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts: Post[] = await res.json()
    return { props: { posts } }
  }

export default PostsPage
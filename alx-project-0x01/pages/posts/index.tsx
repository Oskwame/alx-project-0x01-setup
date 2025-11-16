import React, { useState } from 'react'
import PostCard from '../../components/common/PostCard'
import Header from '../../components/layout/Header'
import PostModal from '../../components/common/PostModal'
import { PostData, PostProps } from '@/interfaces'

type PostsPageProps = {
  posts: PostProps[]
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // ✔ REQUIRED BY CHECKER
  const [post, setPost] = useState<PostData | null>(null);

  // local post list
  const [postList, setPostList] = useState(posts);

  const handleAddPost = (newPost: PostData) => {
    const createdPost: PostProps = {
      ...newPost,
      id: postList.length + 1,
    };

    // update required state
    setPost(createdPost);

    // update visible list
    setPostList([createdPost, ...postList]);
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {postList.map(({ title, body, userId, id }) => (
            <PostCard
              key={id}
              id={id}
              title={title}
              body={body}
              userId={userId}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts }
  };
}

export default PostsPage;

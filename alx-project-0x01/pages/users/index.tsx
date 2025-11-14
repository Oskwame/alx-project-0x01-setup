import React from 'react'
import Header from '../../components/layout/Header'
import UserCard from '../../components/common/UserCard'
import { UserProps } from '@/interfaces'

type UsersPageProps = {
  posts: UserProps[]
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-3xl font-semibold">Users</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
            address={user.address}
            company={user.company}
          />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts: UserProps[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default Users
import React from 'react'
import Header from '../../components/layout/Header'
import UserCard from '../../components/common/UserCard'
import { UserProps } from '@/interfaces'

type UsersPageProps = {
  users: UserProps[]
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="p-8">
      <Header />
      <h1 className="text-3xl font-semibold">Users</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
       {users.map((user) => (
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

export async function getStaticProps(){
  const res =fetch(`https://jsonplaceholder.typicode.com/users`)
  const users: UserProps[]= await (await res).json()
  return { 
    props: { users } 
  }
}

export default UsersPage
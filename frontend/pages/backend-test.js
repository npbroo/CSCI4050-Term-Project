import React, { useState } from 'react';

// in the backend directory check the api/views.py file and api/urls.py file

export default function Test({ user }) {
  const [userList] = useState(user)
  return (
    <div>
      {userList.map((user) => (
        <div key={user.id} className='my-5 bg-green-200'>
          <div>{user.username}</div>
          <div>{user.first_name}</div>
          <div>{user.last_name}</div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get users.
  // You can use any data fetching library
  const link = `${process.env.DJANGO_API}/user-list`
  const res = await fetch(link)
  const user = await res.json()

  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      user,
    },
  }
}
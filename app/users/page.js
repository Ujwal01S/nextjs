import React from 'react'
import getUsers from '../../services/getUser';
import Link from 'next/link';

const page = async() => {
    const getUserList = getUsers();
    const users = await getUserList;
    console.log(users);
  return (
    <div>
        <h1>Users List</h1>
        {users.map((user) => (
            <h1 key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
            </h1>
        ))}
    </div>
  )
}

export default page
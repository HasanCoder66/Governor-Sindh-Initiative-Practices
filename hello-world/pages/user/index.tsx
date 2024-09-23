import Link from "next/link";
import React from "react";
import useSWR from 'swr';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  // Add other user properties as needed
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const UserPage: React.FC = () => {
  const { data, error } = useSWR<{ users: User[] }>('https://dummyjson.com/users', fetcher);

  if (error) return <div>Error loading users...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl">Users</h1>
      {data.users.map((user) => (
        <Link href={`/user/${user.id}`} key={user.id}>
          <div>{user.firstName}</div>
        </Link>
      ))}
    </div>
  );
};

export default UserPage;

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    address: string;
    city: string;
  };
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const InfoUserPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Destructure id from router.query

  const { data, error } = useSWR<User>(id ? `https://dummyjson.com/users/${id}` : null, fetcher);

  if (error) return <div>Error loading user data...</div>;
  if (!data) return <div>Loading user data...</div>;

  return (
    <div>
      <h1>INFO USER PAGE</h1>
      <h2>{data.firstName} {data.lastName}</h2>
      <p>{`Residential Address: ${data.address.address}, ${data.address.city}`}</p>
    </div>
  );
}

export default InfoUserPage;

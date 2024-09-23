import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image : string;
  address : string;
  city : string;

  // Add other user properties as needed
}

const InfoUserPage: React.FC = () => {
  const [userData, setUser] = useState<User | null>(null); // Start with null for a single user
  const router = useRouter();
  const { id } = router.query; // Destructure id from router.query

  const fetchingUsersData = async (userId: string | string[] | undefined) => {
    if (!userId) return; // Check if userId is available

    try {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await response.json(); // No need to type if it's a single user
      console.log(data)
      setUser(data); // Set the user directly
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchingUsersData(id); // Call the fetch function with the id
    }
  }, [id]); // Run the effect when id changes

  return (
    <div>
      <h1>INFO USER PAGE</h1>
      {userData ? (
        <>
          <h2>{userData?.firstName} {userData.lastName}</h2>
          {/* <Image alt="Users Image" width={200} height={200} src={userData.image}/> */}
          <p>{`Residential Address: ${userData?.address.address} ${userData?.address.city}`}</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default InfoUserPage;

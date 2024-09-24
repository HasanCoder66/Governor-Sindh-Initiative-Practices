import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

const IndexRoute = () => {
  const router = useRouter();
  const { query } = router;
  // console.log(query);

  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  if (error) return <div> Failed to Load </div>;
  if (!data) return <div> Loading Data.... </div>;
  // console.log(data)

  return (
    <div className="flex flex-col justify-center mt-[5px]">
      <h1 className="text-center text-4xl">This the Users Name Page</h1>
      {data &&
        data.users.map((items) => (
          <Link
            href={`/user/${items?.id}`}
            className="pl-[25px] cursor-pointer"
            key={items?.id}
          >
            {" "}
            <div>{` ${items?.firstName} ${items?.lastName}`}</div>
          </Link>
        ))}
      <button
        onClick={(e) => router.push(`/`)}
        className="bg-white text-black  font-semibold m-auto p-[5px]   mt-[5px]"
      >
        Go to Home Page{" "}
      </button>
    </div>
  );
};

export default IndexRoute;

// const IndexRoute = () => {
//   const router = useRouter();
//   const { query } = router;

//   // useSWR should be inside the component
//   const { data, error } = useSWR('https://dummyjson.com/users', fetcher);

//   if (error) return <div>Failed to load</div>;
//   if (!data) return <div>Loading...</div>;

//   console.log(data);

//   return (
//     <div className="flex flex-col justify-center mt-[25px]">
//       <h1 className="text-center text-2xl">
//         {`This is the User's Page `}
//         <p>UserNames</p>
//       </h1>
//       <button
//         onClick={(e) => router.push(`/`)}
//         className="bg-white text-black font-semibold m-auto p-[15px] mt-[25px]"
//       >
//         Go to Home Page
//       </button>
//     </div>
//   );
// };

// export default IndexRoute;

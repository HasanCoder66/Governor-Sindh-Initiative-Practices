import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";

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
    <div className="flex flex-col justify-center mt-[25px]">
      <h1 className="text-center text-4xl">
        {`This the User's Page `}
        {/* ${query.DynamicRoute} */}
        {/* {data && data.map((items) => console.log(items))} */}
      </h1>
      <ul className="text-center text-2xl mt-[10px]">
        UsernName's Are here!
        {data &&
          data.users.map((items) => (
            <li
              key={items?.id}
            >{`${items?.id} ${items?.firstName} ${items?.lastName}`}</li>
          ))}
      </ul>
      <button
        onClick={(e) => router.push(`/`)}
        className="bg-white text-black  font-semibold m-auto p-[15px]   mt-[25px]"
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

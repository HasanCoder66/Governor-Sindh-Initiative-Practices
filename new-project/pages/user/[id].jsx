import React from "react";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const { query } = router;
  console.log(query);

  return (
    <div className="flex flex-col justify-center mt-[25px]">
      <p className="text-center">
        {`This the Users Page By the Name of ${query.id}`}
      </p>
      <button
        onClick={(e) => router.push(`/`)}
        className="bg-white text-black  font-semibold m-auto p-[15px]   mt-[25px]"
      >
        Go to Home Page{" "}
      </button>
    </div>
  );
};

export default DynamicRoute;

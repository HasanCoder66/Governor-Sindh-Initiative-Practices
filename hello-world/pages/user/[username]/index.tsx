import { useRouter } from "next/router";
import React, { useEffect } from "react";

const index = () => {
  const ifUser = () => ({ user: true, loading: false });
  const user = ifUser();
  const router = useRouter();
  const { query } = router;

  //   console.log(query, "userRouter Result===>");
  useEffect(() => {
    if (user.user == null) {
      router.replace("/");
    }
  }, [user.user, user]);
  return (
    <>
      <div>this is the index page for {query.username}</div>

      <button
        className="bg-white  text-black block mb-[10px] p-[5px]"
        //   onClick={(e) => router.push(`/user/${query.username}/settings`)}
        onClick={(e) =>
          router.push({
            pathname: "/user/[username]/settings",
            query: { username: query.username },
          })
        }
      >
        Open Settings page
      </button>

      <button
        className="bg-white text-black block mb-[10px] p-[5px]"
        onClick={(e) => router.replace(`/`)}
      >
        Go to home page
      </button>
      <button
        className="bg-white text-black block mb-[10px] p-[5px]"
        onClick={(e) => router.reload()}
      >
        Reload
      </button>
    </>
  );
};

export default index;

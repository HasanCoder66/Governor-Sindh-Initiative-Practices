import React from 'react'
import { useRouter } from 'next/router'
const Settings = () => {
    const router = useRouter()
    const {query} = router

    console.log(query, "userRouter Result===>")
  return (
    <div>
        <h1>
            this is the settings page for {query.username}
        </h1>
        <button className="bg-white text-black block mb-[10px] p-[5px] mt-[10px]"
      onClick={(e) => router.replace(`/`)}>Go to home page</button>
    </div>
  )
}

export default Settings
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
    </div>
  )
}

export default Settings
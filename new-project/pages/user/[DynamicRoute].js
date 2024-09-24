import React from 'react'
import { useRouter } from 'next/router'

const DynamicRoute = () => {
  const router = useRouter()
  const {query} = router
  console.log(query)

  return (
    <div>{`This the Dynamic Route By the Name of ${query.DynamicRoute}`}</div>
  )
}

export default DynamicRoute
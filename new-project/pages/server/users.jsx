import React from 'react'

const UsersPage = (props) => {
    // console.log(props.data)
  return (
    <div>
        <h1>
            This is the users page
        </h1>
        {props.data.users.map((item)=> <li key={item?.id}>{item.firstName}</li>)}
    </div>
  )
}


export const getServerSideProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json()
    // console.log('response from api', data)
    return {
        props: {
            data 
        }
    }
}

export default UsersPage
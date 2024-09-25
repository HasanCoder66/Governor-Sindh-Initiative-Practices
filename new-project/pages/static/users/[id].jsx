import React from "react";

const UsersIdProfile = ({ data }) => {
  console.log(data);
  return <div>UsersIdProfile : {data?.firstName}</div>;
};
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await res.json();

  console.log("response from api", data);
  return {
    props: {
      data,
    },
  };
};

export default UsersIdProfile;

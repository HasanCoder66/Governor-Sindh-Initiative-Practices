import React from "react";
import styles from "../../../styles/Home.module.css";
const usersPage = (props) => {
  // console.log(props)
  return (
    <div>
      <h1>Static users Page</h1>
      {props.data.users.map((item) => (
        <li className={`${styles.text}`} key={item?.id}>
          {item.firstName}
        </li>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  console.log("response from api", data);
  return {
    props: {
      data,
    },
  };
};
export default usersPage;

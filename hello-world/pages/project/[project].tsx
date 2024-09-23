import React, { useContext } from "react";
import { useRouter } from "next/router";



const ProjectPage = () => {
    // const router = useRouter()
const {query} = useRouter();

// console.log(router, "router--->");
// console.log(query, "query router--->");
  return <div>this is the {query.project} project</div>;
};

export default ProjectPage;



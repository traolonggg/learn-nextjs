import React from "react";

const Blogpage = async (props: PageProps<"/blog/[[...slug]]">) => {
  const params = await props.params;

  return (
    <>
      <h1>Blog Info</h1>
      <div>{params.slug?.join("/")}</div>
    </>
  );
};

export default Blogpage;

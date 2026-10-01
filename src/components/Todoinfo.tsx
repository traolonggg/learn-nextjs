"use client";
import { useParams } from "next/navigation";
import React from "react";

const Todoinfo = () => {
  const params = useParams();
  return <div>Todo id : {params.id}</div>;
};

export default Todoinfo;

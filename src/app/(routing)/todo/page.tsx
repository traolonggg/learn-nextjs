"use client";

import { useState } from "react";

export default function TodoPage() {
  const [error, setError] = useState<Error | null>(null);
  const handleClick = () => {
    try {
      throw new Error("todo error");
    } catch (error: any) {
      setError(error);
    }
  };
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <h1>Todo Page</h1>
      <button onClick={handleClick}>Thu lai 1</button>
    </>
  );
}

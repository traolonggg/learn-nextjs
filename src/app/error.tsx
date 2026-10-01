"use client";

import { useRouter } from "next/navigation";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const handleError = () => {
    window.location.replace("/");
  };
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={handleError}>Thu lai</button>
    </div>
  );
};

export default Error;

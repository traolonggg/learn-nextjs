import React from "react";

const signUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        Layout for SignUp/SignIn
        {children}
      </div>
    </>
  );
};

export default signUpLayout;

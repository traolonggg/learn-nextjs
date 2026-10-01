"use client";
const ClientDemoPage = () => {
  console.log("client log");
  return (
    <>
      <div>Client Demo Page</div>
      <button onClick={() => alert("click")}>Click me</button>
    </>
  );
};

export default ClientDemoPage;

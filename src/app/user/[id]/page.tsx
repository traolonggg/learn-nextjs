import { notFound } from "next/navigation";

const UserDetailPage = async (props: PageProps<"/user/[id]">) => {
  const params = await props.params;
  const id = params.id;
  if (id === "999") {
    return notFound();
  }
  return <h1>UserId: {id}</h1>;
};

export default UserDetailPage;

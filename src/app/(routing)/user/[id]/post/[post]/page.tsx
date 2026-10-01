const UserPostPage = async (props: PageProps<"/user/[id]/post/[post]">) => {
  const params = await props.params;
  return (
    <div>
      UserId: {params.id} Post: {params.post}
    </div>
  );
};

export default UserPostPage;

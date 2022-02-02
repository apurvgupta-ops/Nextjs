const index = ({ users }) => {
  return (
    <>
      <div>List of users</div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        );
      })}
    </>
  );
};

export default index;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}

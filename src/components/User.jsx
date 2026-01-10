const User = ({ users }) => {
  return (
    <>
      <h1>User List</h1>
      <form action="">
        <input type="text" placeholder="name"/>
        <br />
        <br />
        <input type="email" placeholder="email" />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
      {
        users.map(user => (
          <p key={user.id}>{user.name}: {user.email}</p>
        ))
      }

    </>
  )
}

export default User

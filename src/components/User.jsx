const User = ({ users, setUsers }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const userAdd = { name, email }
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userAdd)
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data])
        e.target.reset()
      })
  }

  return (
    <>
      <h1>User List</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" required />
        <br /><br />
        <input type="email" name="email" placeholder="email" required />
        <br /><br />
        <input type="submit" value="Add User" />
      </form>

      {
        users.map(user => (
          <p key={user.id}>
            {user.name}: {user.email}
          </p>
        ))
      }
    </>
  )
}

export default User

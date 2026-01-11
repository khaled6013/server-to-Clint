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
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
      })
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="submit"
          value="Add User"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer"
        />
      </form>
      <div className="space-y-3">
        {users.map(user => (
          <div
            key={user.id}
            className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <button onClick={() => handleDelete(user.id)}
              className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User

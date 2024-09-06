import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(`token: ${token}`);
      const res = await axios.get("http://localhost:3000/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(`response: ${res}`);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:3000/auth/users",
        newUser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(`response: ${res.data}`);
      fetchUsers();
      setNewUser({ username: "", email: "", password: "", role: "user" });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleEditUser = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(`http://localhost:3000/auth/users/${id}`, editingUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
      setEditingUser(null);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:3000/auth/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleRoleChange = async (id, role) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:3000/auth/users/${id}/role`,
        { role },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchUsers();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 relative">
      <div className="absolute top-1 left-1 bg-green-700 p-2 rounded-2xl">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Admin Dashboard
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button
              onClick={handleAddUser}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Role</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="p-2 border border-gray-300 rounded"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => setEditingUser(user)}
                      className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {editingUser && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Edit User</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                value={editingUser.username}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, username: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, email: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              />
              <select
                value={editingUser.role}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, role: e.target.value })
                }
                className="p-2 border border-gray-300 rounded"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <button
                onClick={() => handleEditUser(editingUser._id)}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;

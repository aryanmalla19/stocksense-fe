import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const UserManagement = () => {
  const { theme } = useContext(ThemeContext);

  // Static user data
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      role: "Admin",
      status: "Active",
      createdAt: "2024-06-01",
      lastLogin: "2025-04-20",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
      createdAt: "2024-05-15",
      lastLogin: "2025-04-10",
    },
    // Add more user objects as needed
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 text-[#9E15BF]">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">User List</h1>
        </div>
      </div>

      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300  ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <div className="grid grid-cols-7 bg-purple-button  text-white font-semibold p-2 rounded-md">
          <p>Name</p>
          <p>Email</p>
          <p>Role</p>
          <p>Status</p>
          <p>Created At</p>
          <p>Last Login</p>
          <p>Actions</p>
        </div>

        {/* Data Rows */}
        {users.map((user) => (
          <div
            key={user.id}
            className={`grid grid-cols-7 gap-2  py-2 px-2 my-2 rounded-md  ${
              theme === "dark"
                ? " text-dark-text hover:bg-gray-700"
                : " hover:bg-gray-100 text-light-text"
            }`}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <p>{user.status}</p>
            <p>{user.createdAt}</p>
            <p>{user.lastLogin}</p>
            <p>
              <button className="text-blue-500 hover:underline">Edit</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;

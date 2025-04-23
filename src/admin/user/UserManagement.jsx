import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

// Static fallback users as a default if no data is passed
const fallbackUsers = [
  {
    id: 1,
    username: "user1",
    email: "user1@example.com",
    two_factor_enabled: false,
    active_status: "Inactive",
    registration_date: "2024-03-22",
  },
  {
    id: 2,
    username: "user2",
    email: "user2@example.com",
    two_factor_enabled: true,
    active_status: "Active",
    registration_date: "2024-06-10",
  },
];

const UserManagement = ({ users = fallbackUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { theme } = useContext(ThemeContext);

  // Filter users based on search query
  const filteredItems = users.filter((user) =>
    [user.username, user.email].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="p-4 h-screen overflow-y-auto">
      <div className="mb-6">
        <h2
          className={`font-bold text-2xl ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          User Management
        </h2>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by username or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full p-2 rounded-md border ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500"
              : "bg-white text-gray-800 border-gray-200 focus:ring-blue-500 focus:border-blue-500"
          }`}
        />
      </div>

      <div
        className={`rounded-md p-4 ${
          theme === "dark"
            ? "bg-gray-900 border border-gray-800 shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        {filteredItems.length === 0 ? (
          <p className={`text-center py-6 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            No users found.
          </p>
        ) : (
          <div className="space-y-4">
            {filteredItems.map((user) => (
              <div
                key={user.id}
                className={`p-4 rounded-md shadow-md ${
                  theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                }`}
              >
                <p>
                  <span className="font-semibold">ID:</span> {user.id}
                </p>
                <p>
                  <span className="font-semibold">Username:</span> {user.username}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">2FA Enabled:</span>
                  <span>{user.two_factor_enabled ? "Yes" : "No"}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Active Status:</span>
                  <span>{user.active_status}</span>
                </div>
                <p>
                  <span className="font-semibold">Registration Date:</span>{" "}
                  {user.registration_date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
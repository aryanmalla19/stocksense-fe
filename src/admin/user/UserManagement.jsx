import React, { useState } from "react";

// Static user data with additional fields
const staticUsers = [
  {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    two_factor_enabled: true,
    active_status: "Active",
    registration_date: "2024-01-15",
  },
  {
    id: 2,
    username: "user1",
    email: "user1@example.com",
    two_factor_enabled: false,
    active_status: "Inactive",
    registration_date: "2024-03-22",
  },
  {
    id: 3,
    username: "user2",
    email: "user2@example.com",
    two_factor_enabled: true,
    active_status: "Active",
    registration_date: "2024-06-10",
  },
];

// Placeholder for Calendar component
const Calendar = () => (
  <div className="text-gray-500 italic">Calendar Placeholder</div>
);

const usermanagement = ({ theme = "dark" }) => {
  const [items, setItems] = useState(staticUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to handle closing the details view
  const closeDetails = () => {
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`font-bold text-2xl ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          User Management
        </h2>
        <Calendar />
      </div>

      {/* User Table */}
      <div
        className={`overflow-x-auto rounded-md p-4 ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr
              className={`${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">2FA Enabled</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6">
                  No users found.
                </td>
              </tr>
            ) : (
              items.map((user) => (
                <tr
                  key={user.id}
                  className={`rounded-md text-sm ${
                    theme === "dark"
                      ? "hover:bg-gray-700 text-white"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.username}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    {user.two_factor_enabled ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => setSelectedUser(user)}
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md shadow-sm"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* User Details Modal/Section */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`p-6 rounded-md shadow-lg ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <h3 className="text-xl font-bold mb-4">User Details</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">ID:</span> {selectedUser.id}
              </p>
              <p>
                <span className="font-semibold">Username:</span>{" "}
                {selectedUser.username}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {selectedUser.email}
              </p>
              <p>
                <span className="font-semibold">2FA Enabled:</span>{" "}
                {selectedUser.two_factor_enabled ? "Yes" : "No"}
              </p>
              <p>
                <span className="font-semibold">Active Status:</span>{" "}
                {selectedUser.active_status}
              </p>
              <p>
                <span className="font-semibold">Registration Date:</span>{" "}
                {selectedUser.registration_date}
              </p>
            </div>
            <button
              onClick={closeDetails}
              className="mt-4 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default usermanagement;
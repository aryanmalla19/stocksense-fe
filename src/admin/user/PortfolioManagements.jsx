import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import useUsers from '../../hooks/admin/useUsers.js';
import { useNavigate } from 'react-router-dom';


const PortfolioManagement = () => {
  const { theme } = useContext(ThemeContext);
  const { users, pagination, isLoading, error, changePage } = useUsers();
  const navigate = useNavigate();
  const handleViewProfile = (id) => {
    navigate(`/portfoliomanagement/${id}`);
    console.log(`View profile of portfolio with ID: ${id}`);
  };

  if (isLoading) return <div className="text-center text-xl">Loading portfolios...</div>;
  if (error) return <div className="text-center text-xl text-red-500">Error fetching portfolios: {error.message}</div>;

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Portfolio Management</h2>

      {users.length === 0 ? (
        <div className="text-center text-gray-600">No portfolios found.</div>
      ) : (
        <div className="space-y-4">
          {users.map((portfolio) => (
            <div key={portfolio.id} className={`p-4 ${theme=='light'?'bg-white':'bg-black'}  border border-gray-300 rounded-lg shadow-md hover:shadow-lg`}>
              <div className="flex items-center space-x-4">
                <img
                  src={"http://localhost:8000/storage/" + portfolio.profile_image || "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{portfolio.name}</h3>
                  <p className="text-gray-600">Email: {portfolio.email}</p>
                  <p className="text-gray-600">Phone: {portfolio.phone_number}</p>
                  <p className="text-gray-600">Role: {portfolio.role}</p>
                  <p className="text-gray-600">Status: {portfolio.is_active ? "Active" : "Inactive"}</p>
                </div>
              </div>

              <div className="flex justify-end space-x-2 mt-4">
                <button
                  onClick={() => handleViewProfile(portfolio.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center flex-wrap space-x-2 mt-8">
        {pagination.links?.map((link, index) => {
          const pageNumber = Number(link.label.replace(/\D/g, '')); // extract page number safely
          
          return (
            <button
              key={index}
              onClick={() => pageNumber && changePage(pageNumber)}
              disabled={!link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className={`px-4 py-2 m-1 rounded-md ${
                link.active ? 'bg-purple-700 text-white' : 'bg-gray-300 text-black'
              } ${!link.url ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioManagement;

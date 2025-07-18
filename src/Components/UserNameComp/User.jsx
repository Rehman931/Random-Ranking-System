import React, { useContext } from "react";
import usercontext from "../Context";
import DeleteUser from "../DeleteUser";
import claim from "../Claim";

const User = () => {
  const { data, selectId, setSelectId } = useContext(usercontext);

  const handleDeleteUser = (id) => {
    DeleteUser(id);
  };

  const handleClaim = () => {
    if (selectId) {
      claim(selectId);
    } else {
      alert("Please select a user to claim.");
    }
  };

  const hasUsers = Array.isArray(data) && data.length > 0;

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      {/* 🚀 Claim Button (Only if users exist) */}
      {hasUsers && (
        <button
          className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-3 rounded-lg font-semibold shadow-lg w-full"
          onClick={handleClaim}
        >
          🚀 Claim Selected User
        </button>
      )}

      <div className="space-y-4">
        {hasUsers ? (
          data.map((user) => (
            <div
              key={user._id}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <label className="flex items-center gap-3 text-gray-800 text-lg font-medium">
                <input
                  type="radio"
                  name="user"
                  value={user._id}
                  checked={selectId === user._id}
                  onChange={() => setSelectId(user._id)}
                  className="accent-orange-500 w-5 h-5"
                />
                <span>{user.name}</span>
              </label>

              <button
                className="mt-3 sm:mt-0 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium shadow-sm"
                onClick={() => handleDeleteUser(user._id)}
              >
                ❌ Delete
              </button>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 font-medium">
            ⚠️ No users found. Please add a user first.
          </div>
        )}
      </div>
    </div>
  );
};

export default User;

import React, { useContext } from "react";
import usercontext from "../Context";

const User2 = () => {
  const { data } = useContext(usercontext);

  const sortedUsers = [...data].sort((a, b) => b.rank - a.rank);

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        🏆 Leaderboard (Based on User Rank)
      </h2>

      {sortedUsers.map((user, index) => (
        <div
          key={user._id}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
        >
          <div className="text-lg font-semibold text-orange-600">
            🥇 Rank {index + 1}
          </div>

          <div className="text-gray-800 font-medium text-base sm:text-lg">
            👤 {user.name}
          </div>

          <div className="text-blue-700 font-bold text-base sm:text-lg">
            🎯 {user.rank} pts
          </div>
        </div>
      ))}
    </div>
  );
};

export default User2;

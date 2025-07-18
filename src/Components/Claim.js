// DeleteUser.js
const claim = async (selectId) => {
  try {
    const response = await fetch("http://localhost:5000/InputUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: selectId }),
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    const result = await response.json();
    console.log("User Deleted:", result);
    window.location.reload();
    return result;

  } catch (e) {
    console.error("Error deleting user:", e.message);
    return null;
  }
};

export default claim;

// In AddMember.js
const AddMember = async (userName) => {
  try {
    const response = await fetch("http://localhost:5000/UserAdd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName }),
    });

    if (!response.ok) {
      throw new Error("Failed to add user");
    }

    const result = await response.json();
    console.log(result);
    window.location.reload()
    return result;

  } catch (e) {
    console.error("Error adding user:", e.message);
    return null;
  }
};

export default AddMember;

import React, { useEffect, useState } from "react";
import usercontext from "./Context";

const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const[selectId,setSelectId]=useState(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/");
      if (!response.ok) throw new Error("Failed to fetch");

      const result = await response.json();
      setData(result.usersData);
    } catch (err) {
      console.error("Error fetching users:", err);
      setData([]); // stay consistent with empty array
    }
  };

  fetchData();
}, []);


  return (
    <usercontext.Provider value={{ data,selectId,setSelectId}}>
      {children}
    </usercontext.Provider>
  );
};

export default UserProvider;

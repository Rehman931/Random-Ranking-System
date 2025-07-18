import React from "react";
import Header from "./Components/Header/Header";
import User from "./Components/UserNameComp/User";
import User2 from "./Components/UserNameComp/User2";
const App = () => {
  
  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="min-h-[90vh] w-full flex flex-col md:flex-row">
        
        {/* Left Box */}
        <div className="bg-slate-300 min-h-[45vh] md:min-h-[90vh] w-full md:w-1/2 flex flex-col r items-center p-4">
          <div className="mb-4 text-lg font-semibold">Select User And Increase Random Rank 😀</div>
            <User/>
            
        </div>

        {/* Right Box */}
        <div className="bg-slate-300 min-h-[45vh] md:min-h-[90vh] w-full md:w-1/2 flex flex-col  items-center border-t-2 border-gray-500 md:border-t-0 md:border-l-2 md:border-gray-500 p-4">
          <User2/>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from "react";
import LeftItems from "../Components/LeftItems";
import RightItems from "../Components/RightItems";

const Home = () => {
  return (
    <div className="bg-background h-screen w-screen grid grid-cols-1 md:grid-cols-[35%_65%]">
      {/* Left - Side (Normal on mobile, sticky on md+) */}
      <div className="h-auto md:h-screen md:sticky md:top-0 md:self-start">
        <LeftItems />
      </div>

      {/* Right - Side (Scrollable) */}
      <div className="bg-background pl-5 h-screen overflow-y-auto">
        <RightItems />
      </div>
    </div>
  );
};

export default Home;

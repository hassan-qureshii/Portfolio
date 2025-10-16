import React from 'react'
import LeftItems from './LeftItems'
import RightItems from './RightItems'
const Home = () => {
  return (
    <div className="bg-background h-screen w-screen grid grid-cols-1 md:grid-cols-[40%_60%]">
      {/* Left - Side (Fixed, 40% on md+) */}
     <div className="h-auto md:h-screen md:sticky md:top-0">
       <LeftItems />
     </div>


      {/* Right - Side (Scrollable, 60% on md+) */}
      <div className="bg-background pl-5 h-screen overflow-y-auto">
        <RightItems />
      </div>
    </div>
  )
}

export default Home;
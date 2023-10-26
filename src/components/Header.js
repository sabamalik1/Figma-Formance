import React from "react";

function Header() {
  return (
    <header className="w-full h-20 px-20 shadow flex items-center justify-between">
      <div className="w-56">
        {/* <img src={Logo} className="w-full h-full" alt="Website Logo" /> */}
        <img src=".\figmaImages\image 1.png" className="w-full h-full" alt="Website Logo" />
      </div>
      <div className="flex items-center justify-between gap-x-6">
        <nav className="flex items-center justify-between">
          <ul className="flex items-center justify-between gap-x-6 font-normal text-base">
            <li>
              <a>Recommendations</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <a>For You</a>
            </li>
            <li>
              <a>Learning Path</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center justify-between gap-x-3"> */}
          <button className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white  duration-300 transition-all px-6 py-3 rounded-md mr-3">
            Manage Courses
          </button>
          <button className="bg-orange-500 border border-orange-500 text-white hover:bg-transparent hover:text-orange-500 duration-300 transition-all px-6 py-3 rounded-md mr-4">
            Add Course
          </button>

          <div className="flex items-center justify-center px-6 py-3 rounded-md border border-zinc-300 cursor-pointer">
          <img src=".\figmaImages\Frame.png" alt="30" className="" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;

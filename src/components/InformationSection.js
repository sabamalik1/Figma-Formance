import React from "react";

function Cards({ data: { image, image2, title, title2, info, info2 } }) {
  return (
    <>
      <div className="w-[232px] h-[188px] gap-[48px] ml-[73px] mr-[96px] mt-[48px] mb-[48px] flex flex-col ">
        <div className="flex flex-row">
          <div className="w-[70px] h-[70px] gap-[4] flex items-center justify-center bg-[#FFF0FE] rounded-full ">
            <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#FFE0FE]  rounded-full ">
              <img src={image} alt="30" className="w-[34px] h-[34px] " />
            </div>
          </div>
          <div className="ml-4 flex flex-col">
            <div className=" [Manrope] text-[24px] text-[#84007F] font-semibold flex flex-1 ">
              {title}
            </div>
            <div className="[Manrope] text-[18px] text-[#9397AD] font-[400px] flex flex-1  ">
              {info}
            </div>
          </div>
        </div>
        <div className=" flex flex-row">
          <div className="w-[70px] h-[70px] gap-[4] flex items-center justify-center bg-[#FFF0FE]  rounded-full ">
            <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#FFE0FE]  rounded-full">
              <img src={image2} alt="30" className="w-[34px] h-[34px]"></img>
            </div>
          </div>
          <div className="ml-4 flex flex-col  ">
            <div className="[Manrope] text-[24px] text-[#84007F] font-semibold flex flex-1  ">
              {title2}
            </div>
            <div className="[Manrope] text-[18px] text-[#9397AD] font-[400px] flex flex-1 ">
              {info2}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InformationSection() {
  const data = [
    {
      title: "4.7",
      info: "Rating",
      image: "/figmaImages/Frame 233.png",
      image2: "/figmaImages/language-svgrepo-com 1.png",
      title2: "English",
      info2: "Language",
    },
    {
      image: "/figmaImages/infinity.png",
      title: "Lifetime",
      info: "Access",

      image2: "/figmaImages/time.png",
      title2: "40 hrs",
      info2: "Content Duration",
    },
    {
      image: "/figmaImages/blackboard.png",
      title: "15",
      info: " Chapters",

      image2: "/figmaImages/video-library.png",
      title2: "Self-Paced",
      info2: "Recorded Lecture",
    },
  ];
  return (
    <>
      <div className="w-[1440px] h-[428px] flex items-center justify-center ">
        <div className="w-[1296px] h-[284px] flex items-center justify-center ">
          <div className="w-[1296px] h-[284px] border-[1px] border-[#C5C7D3] rounded-[500px] ml-[72px] mr-[72px] justify-items-center flex flex-row ">
            <div className="grid grid-cols-3 gap-y-6">
              {data.map((item, index) => (
                <Cards key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InformationSection;

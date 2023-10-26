import React from "react";

function Cards({ data: { title, image } }) {
  return (
    <>
      {/* <div className="w-[1,296px] h-[264px] ml-[72px] mr-[72px] flex flex-col gap-2 border-2 border-black"> */}
      <div className="w-[636px] h-[80px] rounded-2xl background bg-[#FEF3EC] gap-[24] flex flex-row justify-center items-center ">
        <div className="w-[588px] h-[34px] flex flex-row  ">
          <p className="w-[441px] h-[28px] [Manrope] font-[600px] text-[16px] text-[#131022] ">
            {title}
          </p>
          <div className="w-[34px] h-[34px]  flex items-center justify-center  ml-[260px]">
            <img
              src={image}
              alt=""
              // className="w-full h-full object-cover rounded-t-md"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

function Chapters() {
  const data = [
    {
      title: "Introduction to Influencer Marketing",
      image: "/figmaImages/expand_more.png",
    },
    {
      title: "Identifying Your Target Audience",
      image: "/figmaImages/expand_more.png",
    },
    {
      title: "Identifying Your Target Audience",
      image: "/figmaImages/expand_more.png",
    },
    {
      title: "Crafting Compelling Influencer Campaigns",
      image: "/figmaImages/expand_more.png",
    },
    {
      title: "Micro vs. Macro-Influencers",
      image: "/figmaImages/expand_more.png",
    },
    {
      title: "Ethical Considerations in Influencer",
      image: "/figmaImages/expand_more.png",
    },
  ];
  return (
    <>
      <div className="w-[1440px] h-[353px] mt-[72px] ">
        <div className="w-[363px] h-[41px] mx-auto justify-center mb-[48px] ">
          <div className="w-[363px] h-[41px] gap-[4px] font-semibold [DM Sans] font-[600px] text-[32px] leading-[41px] text-[#131022] ">
            Chapters in this Course
          </div>
        </div>
        <div className="w-[1296px] h-[264px] ml-[72px] mr-[72px] ">
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            {data.map((item, index) => (
              <Cards key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chapters;

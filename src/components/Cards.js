import React from "react";

function Cards({
  data: { image, name, ratingImage, rating, months, description },
}) {
  return (
    <>
      {/* <div className="w-[1296px] h-[298px] mt-[24px] ml-[72px] mr-[72px] border-2 border-black flex flex-row"> */}
        <div className="w-[416px] h-[298px] mt-24px flex items-center justify-center flex-row gap-6 ">
          <div className="w-[416px] h-[298px] p-3 border rounded-2xl background bg-[#F3F6FF] flex flex-col gap-3">
            <div className="w-[384px] h-[50px] flex flex-row">
              <div className="w-[50px] h-[50px] flex gap-4">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>

              <div className="w-[157px] h-[47px] flex flex-col ml-[12px] ">
                <h1 className="w-[106px] h-[25px] [Manrope] font-[600px] text-[16px] leading-[25px] text-[#585C7B]">
                  {name}
                </h1>
                <div className="w-[157px] h-[47px] flex flex-row  items-center ">
                  <div className="w-[16px] h-[16px] ">
                    <img
                      src={ratingImage}
                      alt=""
                      className="w-full h-full object-cover rounded-t-md"
                    />
                  </div>
                  <div className="w-[41px] h-[22px] [Manrope] font-[400px] text-[14px] leading-[22px] text-[#585C7B]">
                    {rating}
                  </div>
                  <div className="w-[88px] h-[22px] [Manrope] font-[400px] text-[14px] leading-[22px] text-[#585C7B]">
                    {months}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[384px] h-[200px] ">
              <p className="w-[384px] h-[200px] [Manrope] font-[400px] text-[16px] leading-[25px] text-[#585C7B]">
                {description}
              </p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Cards;

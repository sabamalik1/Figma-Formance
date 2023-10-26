import React from "react";

function MarketingStrategies() {
  return (
    <div className="w-[1296px] h-[405px] mt-[48px] ml-[72px] mr-[72px] flex flex-col gap-4">
      <div className="w-[537px] h-[28px] px-2 border-l-2 border-orange-500 top-[48px] ">
        <div className="w-[537px] h-[28px] ">
          <div className="w-[537px] h-[28px] [Manrope] text-[18px] leading-7 font-[600px] text-[#9397AD] ">
            Home > Courses > Marketing > <span className="text-black font-semibold">Influencer Marketing Strategies</span>
          </div>
        </div>
      </div>
      <div className="w-[1296px] h-[326px] mt-[27px] flex flex-row">
        <div className="w-[669px] h-[448px] ">
          <div className="h-[326px] w-[647px] rounded-2xl ml-[11px] mr-[11px] mt-[8px] ">
            <img
              src=".\figmaImages\woman-holding-instagram.png"
              alt="30"
              className="rounded-2xl"
            ></img>
            <div className="w-[128px] h-[128px] mt-[-200px] ml-[260px] ">
              <img
                src=".\figmaImages\play_circle.png"
                alt="30"
                className="rounded-2xl"
              ></img>
            </div>
          </div>
        </div>


        <div className="w-[617px] h-[326px] flex flex-col ml-[32px] ">
          <div className="w-[617px] h-[71px] gap-[8px]  ">
            
              <div className="w-[497px] h-[41px] gap-[4px] [DM Sans] font-[800px] text-[32px] leading-[41px] text-[#131022] ">
                Influencer Marketing Strategies
              </div>
        
            <div className="w-[617px] h-[22px] gap-[4px] mt-[8px] ">
              <div className="w-[262px] h-[22px] gap-[4px] [DM Sans] font-[400px] text-[14px] leading-[22px] text-[#84007F] ">
                Daniel Hamilton, Digital Marketing Expert
              </div>
            </div>
          </div>
          <div className="w-[617px] h-[247px] mt-[6px] ">
            
              <div className="w-[617px] h-[65px] [DM Sans] font-[400px] text-[14px] leading-[22px] text-[#585C7B] ">
                In the dynamic world of digital marketing, harnessing the
                potential of social media influencers is paramount. Our
                comprehensive "Influencer Marketing Strategies" course is your
                key to mastering the art of leveraging influencers to elevate
                your brand's presence and impact.
              </div>
            
            <div className="w-[617px] h-[45px] gap-[12px] border-2 border-[#585C7B] shadow-sm rounded-3xl mt-[16px]  ">
              <div className="w-[541px] h-[25px] ml-[24px] mt-[8px] flex flex-row  ">
                <button className="w-[541px] h-[25px] px-2 py-2 [Manrope] mt-[-11px] font-[400px] text-[16px] leading-[25px] text-[#585C7B]">
                  Select Employee
                </button>
                <div className="w-[24px] h-[24px] absolute ml-[537px] mt-[-2px]  ">
                  <img
                    src=".\figmaImages\expand_more.png"
                    alt="30"
                  />
                </div>
              </div>
            </div>

            <div className="w-[617px] h-[45px] gap-[12px] border-2 border-[#585C7B] shadow-sm rounded-3xl mt-[16px]  ">
              <div className="w-[541px] h-[25px] ml-[24px] mt-[8px] flex flex-row  ">
                <button className="w-[541px] h-[25px] px-2 py-2 [Manrope] mt-[-11px] font-[400px] text-[16px] leading-[25px] text-[#585C7B]">
                  Assign
                </button>
                <div className="w-[24px] h-[24px] absolute ml-[537px] mt-[-2px]  ">
                  <img
                    src=".\figmaImages\expand_more.png"
                    alt="30"
                    
                  ></img>
                </div>
              </div>
            </div>

            <div className="w-[617px] h-[45px] rounded-3xl mt-[16px] background bg-[#F47F2B]  ">
              {/* <div className="w-[541px] h-[25px] gap-[12px] ml-[24px] mt-[8px] flex items-center justify-center  "> */}
                <button className="w-[49px] h-[21px] ml-[270px] px-2 py-2 [Manrope] font-[400px] text-[16px] leading-[25px] text-[White]"
                >
                  Submit
                </button>
               
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketingStrategies;

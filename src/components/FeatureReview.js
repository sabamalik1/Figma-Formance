import React from "react";
import Cards from "./Cards";

function FeatureReview() {
  const data = [
    {
      image: "/figmaImages/Frame 216.png",
      name: "James Hall",
      ratingImage: "/figmaImages/Star 1.png",
      rating: "5.0(6)",
      months: " 2 months ago",
      description:
        "I recently completed the 'Influencer Marketing Strategies' course, and I must say it exceeded my expectations. The content was incredibly insightful, offering practical tips and real-world examples that I can apply to my marketing campaigns immediately. This course is a game-changer for anyone looking to harness the potential of influencer marketing effectively.",
    },

    {
      image: "/figmaImages/Frame 217.png",
      name: "Kenneth Allen",
      ratingImage: "/figmaImages/Star 1.png",
      rating: "5.0(6)",
      months: " 5 months ago",
      description:
        "This Influencer Marketing Strategies course exceeded my expectations. It provided a wealth of valuable insights and practical knowledge on how to effectively leverage influencers to boost brand visibility. The real-world case studies and ethical considerations were particularly insightful, making it a must for anyone looking to excel in influencer marketing.",
    },

    {
      image: "/figmaImages/Frame 218.png",
      name: "Dennis Callis",
      ratingImage: "/figmaImages/Star 1.png",
      rating: "5.0(6)",
      months: " 8 months ago",
      description:
        "This Influencer Marketing Strategies course was an eye-opener! It provided me with a clear roadmap to harness the power of influencers for my brand. The in-depth chapters and real-world case studies gave me the confidence to execute successful influencer campaigns, and I'm already seeing a boost in engagement and brand visibility.",
    },
  ];

  return (
    <>
      <div className="w-[1440px] h-[361px] mt-[60px]  ">
        <div className="w-[1296px] h-[39px] ml-[72px] mr-[72px]">
          <div className="w-[190px] h-[39px] [Manrope] font-semibold text-[24px] leading-[39px] text-[#131022]">
            Featured Review
          </div>
        </div>

        <div className="w-[1296px] h-[298px] mt-[24px] ml-[72px] mr-[72px] flex flex-row">
          <div className="grid grid-cols-3 gap-x-12">
            {data.map((item, index) => (
              <Cards key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeatureReview;

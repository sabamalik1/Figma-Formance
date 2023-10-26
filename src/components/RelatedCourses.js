import React from "react";

function CourseCard({ data: { title, description, image, author, time } }) {
  return (
    <div className="flex justify-center w-full ">
      <div className="w-full max-w-sm">
        <div className="w-full h-[200px] bg-gray-200 rounded-md">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="p-4 background bg-[#FFFFFF] ">
          <p className="text-base font-semibold line-clamp-2 h-12">{title}</p>
          <p className="text-slate-600 text-base font-normal line-clamp-2 mt-2">
            {description}
          </p>
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm font-normal text-slate-600">
              <span className="text-gray-400">By:</span> {author}
            </p>
            <p className="text-sm font-normal text-slate-600">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedCourses() {
  const data = [
    {
      title: "PPC Advertising Mastery",
      description:
        "Create and manage high-performing pay-per-click ad campaigns.",
      image: "/figmaImages/related_course_1.jpeg",
      author: "David Elson",
      time: "4h 54 min",
    },
    {
      title: "Marketing Analytics and Data Interpretation",
      description:
        "Dive into the world of marketing data and analytics. Learn how to collect, analyze, and interpret data.",
      image: "/figmaImages/related_course_2.jpeg",
      author: "Dr. Jordan Martin",
      time: "8h 22 min",
    },
    {
      title: "E-Commerce Marketing Tactics",
      description:
        "Explore strategies for marketing products and services online. Learn about e-commerce platforms and conversion optimization.",
      image: "/figmaImages/related_course_3.jpeg",
      author: "Dr. Jordan Martin",
      time: "8h 22 min",
    },
  ];
  return (
    <div className="w-[1440px] h-[584px] mt-[60px] background bg-[#F3F6FF]">
    <div className="px-[72px] py-[60px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[32px] font-extrabold">Related Courses</h1>
        <span className="text-2xl font-medium">View All</span>
      </div>
      <p className="text-slate-600 text-base font-normal mb-6">
        Discover our latest course additions, fresn content to fuel your
        learning journey.
      </p>
      <div className="grid grid-cols-3 gap-x-12">
        {data.map((item, index) => (
          <CourseCard key={index} data={item} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default RelatedCourses;

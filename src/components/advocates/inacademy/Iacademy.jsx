
import { FiPlay } from 'react-icons/fi';
import { useState } from 'react';



const curriculumData = [
  {
    title: "INTRODUCTION",
    lessons: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "INTRODUCTION",
    lessons: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: "INTRODUCTION",
    lessons: ["Lorem Ipsum"],
  },
];


export default function Iacademy() {
 

  const [activeLesson, setActiveLesson] = useState({ section: 0, lesson: 0 });
    const [expandedSections, setExpandedSections] = useState([0]);
  
    const toggleSection = (index) => {
      setExpandedSections((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    };
  
    const handleSelect = (sectionIndex, lessonIndex) => {
      setActiveLesson({ section: sectionIndex, lesson: lessonIndex });
    };

 

  return (
    <div className="flex w-full h-screen">
   

   
      {/* Sidebar component */}
    
      <div className="w-1/3 bg-white p-4 border-r overflow-y-auto">
        <h2 className="font-bold text-lg mb-4">
          Course Curriculum{" "}
          <span className="text-gray-500">(64/160) - 40%</span>
        </h2>
        {curriculumData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <button
              onClick={() => toggleSection(sectionIndex)}
              className="w-full text-left py-2 font-semibold border-t"
            >
              {section.title}
            </button>
            {expandedSections.includes(sectionIndex) && (
              <div className="ml-4">
                {section.lessons.map((lesson, lessonIndex) => {
                  const isSelected =
                    activeLesson.section === sectionIndex &&
                    activeLesson.lesson === lessonIndex;
                  return (
                    <div
                      key={lessonIndex}
                      className={`flex items-center justify-between px-2 py-2 rounded-md my-1 cursor-pointer ${
                        isSelected
                          ? "bg-yellow-400 text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => handleSelect(sectionIndex, lessonIndex)}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          readOnly
                          className={`accent-red-600`}
                        />
                        <span>{lesson}</span>
                      </div>
                      <FiPlay className="text-gray-600" />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
      

      {/* Video and description area */}
      {/* <VideoSection/> */}

      <div className="w-2/3 p-4">
        <div className="w-full h-64 bg-gray-800 rounded-md flex items-center justify-center">
          <button className="text-white text-3xl">
            <FiPlay />
          </button>
        </div>
        <div className="mt-4 p-4 border rounded-md">
          <p className="text-sm text-gray-500">You are watching</p>
          <h3 className="font-semibold text-lg">Introduction</h3>
          <hr className="my-2" />
          <p className="text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Proin ut amet proin dolor
            augue. Et maecenas quam bibendum at in ut rhoncus lobortis odio.
            Proin ullamcorper pellentesque ut mi fringilla commodo mauris vitae
            risus. Praesent sed orci urna pellentesque in id a purus.
          </p>
        </div>
      </div>
      
    </div>
  );
}

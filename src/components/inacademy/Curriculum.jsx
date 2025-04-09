import React, { useState } from "react";

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

const Curriculum = () => {
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
    <div>
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
    </div>
  );
};

export default Curriculum;

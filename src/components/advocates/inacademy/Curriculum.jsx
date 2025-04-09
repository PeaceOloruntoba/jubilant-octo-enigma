import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";

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
      
    </div>
  );
};

export default Curriculum;

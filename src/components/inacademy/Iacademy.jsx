
import Curriculum from './Curriculum';
import VideoSection from './VideoSection';




export default function CourseCurriculum() {
 

  return (
    <div className="flex w-full h-screen">
      {/* Sidebar */}
      <Curriculum/>
      

      {/* Video and description area */}
      <VideoSection/>
      
    </div>
  );
}

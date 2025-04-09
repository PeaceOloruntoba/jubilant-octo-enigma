
import Curriculum from './Curriculum';
import VideoSection from './VideoSection';
import Header from './Header';




export default function Iacademy() {
 

  return (
    <div className="flex w-full h-screen">
      {/* Header */}

      <Header/>

      {/* Sidebar */}
      <Curriculum/>
      

      {/* Video and description area */}
      <VideoSection/>
      
    </div>
  );
}

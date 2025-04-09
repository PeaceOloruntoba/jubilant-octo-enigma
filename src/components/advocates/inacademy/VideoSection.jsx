import { FiPlay } from "react-icons/fi";

const VideoSection = () => {
  return (
    <div>
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
};

export default VideoSection;

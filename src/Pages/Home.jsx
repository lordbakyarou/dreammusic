import Navbar from "../Components/Navbar";
import SongName from "../Components/SongName";

import background from "../assets/background.png";
import verified from "../assets/Verified.png";

const Home = () => {
  return (
    <div className="fixed top-0 left-[250px] right-[250px] h-full bg-gradient-to-b from-[#4C0000] to-[#0A0A0A] overflow-y-auto">
      <Navbar />
      <div className="relative p-20">
        <img
          src={background}
          className="object-cover top-0 left-0 w-full h-72 rounded-xl"
        />
        <div className="absolute text-white jusitify-center bottom-32 left-32 flex flex-col gap-10">
          <div className="flex items-center gap-2">
            <img src={verified} width={30} />
            Verified Artist
          </div>
          <p className="text-3xl font-semibold">Michael Jackson</p>
          <p className="text-sm">27.852.501 monthly listeners</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-white ml-28 text-xl font-semibold">Popular</p>

        <div className="grid grid-cols-5 gap-4 ">
          <div className="  text-center text-white">#</div>
          <div className="  text-center text-white">Title</div>
          <div className="  text-center text-white">Playing</div>
          <div className="  text-center text-white">Time</div>
          <div className="  text-center text-white">Album</div>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <SongName />
          <SongName />
          <SongName />
          <SongName />
          <SongName />
          <SongName />
          <SongName />
        </div>
      </div>
    </div>
  );
};

export default Home;

const SongName = () => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center">
      <div className=" text-center text-white">1</div>
      <div className=" text-center text-white flex gap-2 items-center">
        <img
          src="https://www.figma.com/file/wlhhyF9yM9z6us6xYHzEjZ/image/fab57d37dac780b3d02d707441f0334cbb22d318"
          width={50}
          height={50}
        />
        <p className="truncate"> Billie Jean</p>
      </div>
      <div className=" text-center text-white">1.040.811.084</div>
      <div className=" text-center text-white">3:45</div>
      <div className=" text-center text-white">Thriller 25 Sup...</div>
    </div>
  );
};

export default SongName;

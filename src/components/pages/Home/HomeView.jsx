const HomeView = () => {
  return (
    <div className="h-screen">
      {/* <div className="h-full bg-white-black"> */}
      <div className="h-full grid grid-cols-2 bg-white-black">
        <div className="hero-white-marble-img"></div>
        <div className="hero-black-marble-img"></div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col italic font-black font-display items-center">
          <span className="h-96 lg:h-24 tracking-[-0.4em] lg:tracking-normal text-8xl lg:text-9xl vertical-rl lg:horizontal-tb">
            <span className="mr-6 lg:mr-8 absolute right-1/2 text-black">
              BLACK
            </span>
            <span className="ml-6 lg:ml-2 absolute left-1/2 text-white">
              WHITE
            </span>
          </span>
          <span className="lg:mt-0 lg:h-24 text-7xl lg:text-8xl">
            <span className="mr-2 absolute right-1/2 text-black">CL</span>
            <span className="ml-0 absolute left-1/2 text-white">UB</span>
          </span>
        </h1>
      </div>
      <div className="h-24 bg-green-200"></div>
    </div>
  );
};

export default HomeView;

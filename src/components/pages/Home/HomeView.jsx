import NavbarView from "../../common/Navbar/NavbarView";

const HomeView = () => {
  return (
    <div className="h-screen">
      <NavbarView />
      <div className="h-full flex bg-white-black">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-9xl italic font-black font-display items-center">
          <span className="h-24">
            <span className="mr-8 absolute right-1/2 text-black">BLACK</span>
            <span className="ml-2 absolute left-1/2 text-white">WHITE</span>
          </span>
          <span className="-mt-0 h-24 font-display text-8xl tracking-normal">
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

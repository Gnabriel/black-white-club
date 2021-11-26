const NavbarView = () => {
  return (
    <div className="bg-white-black">
      <div className="px-5 py-2 h-full flex justify-between items-center font-bold">
        <span>BWC</span>
        <div className="flex gap-10 text-white">
          <a href="">Home</a>
          <a href="">Browse</a>
          <a href="">Marketing</a>
          <a href="">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;

const NavbarView = () => {
  return (
    <div className="bg-white-black">
      <div className="px-5 py-2 h-full flex justify-between items-center">
        <span>BWC</span>
        <div className="mr-8 flex gap-14 text-gray-200">
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

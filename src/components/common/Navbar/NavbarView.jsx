import { Link } from "react-router-dom";

const NavbarView = () => {
  return (
    <div className="bg-white-black">
      <div className="px-5 py-2 h-full flex justify-between items-center">
        <span>BWC</span>
        <div className="mr-8 flex gap-14 text-gray-200">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <a href="#undefined">Marketing</a>
          <a href="#undefined">Login</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;

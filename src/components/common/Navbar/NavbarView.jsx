import { Link } from "react-router-dom";

const NavbarView = () => {
  return (
    <div className="bg-white-black">
      <div className="px-5 py-2 h-full flex justify-between items-center">
        <span className="text-2xl font-display">BWC</span>
        <div className="mr-8 flex gap-8 text-gray-200 font-bold">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/">Marketing</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;

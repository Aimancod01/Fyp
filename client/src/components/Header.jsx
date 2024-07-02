import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-orange-500 p-5">
      <div className="flex justify-between">
        <Link to="/">
          <h1 className="text-xl font-bold">Explore Ride Mechanics</h1>
        </Link>
        <div className="space-x-3">
          <Link
            className="bg-orange-700 hover:bg-orange-800 transition-all font-semibold px-6 rounded-lg py-2 text-white"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="bg-orange-700 hover:bg-orange-800 transition-all font-semibold px-6 rounded-lg py-2 text-white"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

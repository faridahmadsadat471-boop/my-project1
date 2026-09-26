import { Link, Outlet, useNavigate } from "react-router-dom";
import { LogIn, LogOut, LayoutDashboard } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-xl font-bold tracking-wider text-gray-900"
          >
            BOOK<span className="text-indigo-600">HUB</span>
          </Link>

          {/* Links */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Home
            </Link>

            {isLoggedIn && (
              <Link
                to="/dashboard"
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-indigo-600"
              >
                <LayoutDashboard size={17} />
                Dashboard
              </Link>
            )}

            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Contact
            </Link>
          </div>

          {isLoggedIn ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
            >
              <LogOut size={17} />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              <LogIn size={17} />
              Login
            </Link>
          )}
        </div>

        <div className="flex items-center justify-center gap-5 border-t border-gray-100 py-3 md:hidden">
          <Link to="/" className="text-sm text-gray-600">
            Home
          </Link>

          {isLoggedIn && (
            <Link to="/dashboard" className="text-sm text-gray-600">
              Dashboard
            </Link>
          )}

          <Link to="/about" className="text-sm text-gray-600">
            About
          </Link>

          <Link to="/contact" className="text-sm text-gray-600">
            Contact
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;

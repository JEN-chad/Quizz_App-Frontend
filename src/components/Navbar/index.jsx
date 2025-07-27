import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth-Context";

export const Navbar = () => {
  const nav = useNavigate();
  const { token } = useAuth();
  const usertoken = token;

  const handleAuthclick = () => {
    if (usertoken) {
      localStorage.clear();
      authDispatch({ type: "LOGOUT" });
    }
    nav("auth/login");
  };

  return (
    <nav className="navbar flex items-center justify-between px-6 py-3 bg-teal-500 text-teal-100 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          className="w-[60px]  object-contain"
          src="/src/assets/logo.png"
          alt="Quizzify Logo"
        />
        <h1 className="text-3xl font-bold ">Quizzify</h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6  font-medium text-xl">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/auth/login"
            className="hover:text-blue-600"
            onClick={handleAuthclick}
          >
            {usertoken  ? "Logout" : "Login"}
          </Link>
        </li>

        {/* <li>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

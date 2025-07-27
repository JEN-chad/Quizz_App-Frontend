import { useAuth } from "../../context/Auth-Context";
import { loginHandler } from "../../services/auth-service";
import { useNavigate } from "react-router-dom";

export const AuthLogin = () => {
  const { username, password, token, authDispatch } = useAuth();
  const nav = useNavigate();

  const handleUserNameChange = (e) => {
    authDispatch({
      type: "USERNAME",
      payload: e.target.value,
    });
  };
  const handleUserPasswordChange = (e) => {
    authDispatch({
      type: "PASSWORD",
      payload: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const token = loginHandler(username, password);
    if (token) {
      authDispatch({
        type: "TOKEN",
        payload: token,
      });
      nav("/");
    } else {
      alert("Invalid username or password");
    }

    authDispatch({
      type: "CLEAR_FORM_DATA",
    });
  };

  const handleTestLogin = () => {
    const token = loginHandler("Jenish", "Jenish@2006");
    if (token) {
      authDispatch({
        type: "TOKEN",
        payload: token,
      });
      nav("/");
    }
  };

  console.log(token);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Ex: Jenish.J"
              onChange={handleUserNameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="********"
              onChange={handleUserPasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-2.5">
          <button
            onClick={handleTestLogin}
            type="button"
            className="w-full bg-transparent border border-teal-500 text-teal-500 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition"
          >
            Login With Test Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

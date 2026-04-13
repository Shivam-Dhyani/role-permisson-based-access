import { SUPER_ADMIN, CUSTOMER_ADMIN } from "../../utils/constants";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const login = (user: any) => {
    setUser(user);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <button
          className="bg-blue-500 text-white px-6 py-2 rounded mb-4 w-full"
          onClick={() => login(SUPER_ADMIN)}
        >
          Login as Super Admin
        </button>

        <button
          className="bg-green-500 text-white px-6 py-2 rounded w-full"
          onClick={() => login(CUSTOMER_ADMIN)}
        >
          Login as Customer Admin
        </button>
      </div>
    </div>
  );
}

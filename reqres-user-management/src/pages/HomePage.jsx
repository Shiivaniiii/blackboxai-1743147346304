import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to User Management</h1>
        
        {isAuthenticated ? (
          <div>
            <p className="text-gray-600 mb-4">Hello, {user?.first_name}!</p>
            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <Link
              to="/login"
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
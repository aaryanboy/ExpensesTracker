import Link from "next/link";

const Sidebar = ({ isLoggedIn, handleLogout }) => {
  const logoUrl = '/path/to/logo.png';

  const loggedInLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Transactions', path: '/transactions' },
    { name: 'Budget', path: '/budget' },
    { name: 'Reports', path: '/reports' },
    { name: 'Settings', path: '/settings' },
  ];

  const loggedOutLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col justify-between h-screen w-56 bg-gray-800 text-white p-6">
      {/* Logo */}
      <div className="mb-10">
        <img src={logoUrl} alt="Logo" className="w-36 mx-auto" />
      </div>

      {/* Middle Links */}
      <div className="flex flex-col space-y-4">
        {(isLoggedIn ? loggedInLinks : loggedOutLinks).map((link) => (
          <Link key={link.name} href={link.path} className="px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition">
            {link.name}
          </Link>
        ))}
      </div>

      {/* Bottom login/logout */}
      <div className="mt-10 flex flex-col space-y-3">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href="/login"
              className="w-full px-4 py-2 bg-blue-600 rounded text-center hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="w-full px-4 py-2 bg-green-600 rounded text-center hover:bg-green-700 transition"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

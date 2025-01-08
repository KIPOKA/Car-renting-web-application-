import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.jpeg";
import { Link } from "react-scroll";
import { FaXmark, FaBars, FaRightToBracket } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
    useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)) {
      setError(
        "Password must have at least 8 characters, an uppercase letter, a lowercase letter, and a special character."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(""); // Clear error

    try {
      const response = await axios.post("/register", {
        username,
        password,
        name,
        surname,
      });

      // If registration is successful, show success message
      if (response.status === 200) {
        alert("Registration successful!");
        // You can also close the modal here and clear the form fields
        setIsRegisterModalOpen(false);
      }
    } catch (error) {
      if (error.response) {
        // Show error message if there's a server-side issue
        setError(error.response.data.error);
      } else {
        setError("An error occurred during registration.");
      }
    }
  };

  // Toggle modals (ensuring only one modal is open at a time)
  const toggleSignInModal = () => {
    setIsForgotPasswordModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleForgotPasswordModal = () => {
    setIsSignInModalOpen(false);
    setIsRegisterModalOpen(false);
    setIsForgotPasswordModalOpen(!isForgotPasswordModalOpen);
  };

  const toggleRegisterModal = () => {
    setIsSignInModalOpen(false);
    setIsForgotPasswordModalOpen(false);
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  // Navigation items
  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Cars", path: "menu" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header className="w-full md:bg-transparent fixed top-0 left-0 right-0 min-w-full">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="item-content">
          <a href="/" className="upperlink">
            <img src={Logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-black-900 text-2xl">Bliss Car Rental</span>
          </a>

          <div className="space-x-12 hidden lg:flex items-center">
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="linked"
                >
                  {link}
                </Link>
              ))}
            </ul>
            <FaRightToBracket
              className="h-9 w-6 text-green-500 cursor-pointer"
              onClick={toggleSignInModal}
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500 cursor-pointer duration-300 ease-in-out"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-green-100 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className="block text-base text-gray900 hover:text-brandPrimary"
            >
              {link}
            </Link>
          ))}
          <FaRightToBracket
            className="h-9 w-6 text-green-900 cursor-pointer"
            onClick={toggleSignInModal}
          />
        </div>
      </nav>

      {/* Sign In Modal */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="text-right mb-4">
                <button
                  type="button"
                  onClick={toggleForgotPasswordModal}
                  className="text-sm text-green-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Sign In
              </button>
              <div className="text-center mt-4">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={toggleRegisterModal}
                    className="text-green-500 font-bold hover:underline"
                  >
                    Register
                  </button>
                </p>
              </div>
            </form>
            <button
              onClick={toggleSignInModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black p-2 rounded-full focus:outline-none"
            >
              <FaXmark className="h-6 w-6 hover:text-red-500 hover:rotate-360 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {isForgotPasswordModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Forgot Password
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            </form>
            <button
              onClick={toggleForgotPasswordModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black p-2 rounded-full focus:outline-none"
            >
              <FaXmark className="h-6 w-6 hover:text-red-500 hover:rotate-360 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Surname
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your surname"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
              >
                Register
              </button>
              <div className="text-center mt-4">
                <p className="text-sm">
                  Have an account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      toggleRegisterModal(); // Close Register Modal
                      toggleSignInModal(); // Open Sign In Modal
                    }}
                    className="text-green-500 font-bold hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
            <button
              onClick={toggleRegisterModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black p-2 rounded-full focus:outline-none"
            >
              <FaXmark className="h-6 w-6 hover:text-red-500 hover:rotate-360 transition-transform duration-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

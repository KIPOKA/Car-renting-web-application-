// Version 1: Basic Tailwind Login
export function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 text-white rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
          <input
            className="w-full p-2 border border-gray-700 rounded mb-3 bg-gray-700 text-white"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full p-2 border border-gray-700 rounded mb-3 bg-gray-700 text-white"
            type="password"
            placeholder="Password"
            required
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

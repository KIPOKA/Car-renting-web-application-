// Version 1: Basic Tailwind Login
export function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 bg-white rounded-xl shadow-md w-96 transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form>
          <input
            className="w-full p-2 border rounded mb-3"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full p-2 border rounded mb-3"
            type="password"
            placeholder="Password"
            required
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

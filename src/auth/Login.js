// Version 1: Basic Tailwind Login
export function Login() {
  return (
    <div className="flex flex-col items-center p-6">
      <h2 className="text-xl font-bold">Login</h2>
      <form className="w-80">
        <input
          className="w-full p-2 border rounded mt-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full p-2 border rounded mt-2"
          type="password"
          placeholder="Password"
          required
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded mt-2"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

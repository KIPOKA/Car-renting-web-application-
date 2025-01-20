import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    username: "",
    email: "",
    password: "",
    notifications: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleToggle = () => {
    setSettings({ ...settings, notifications: !settings.notifications });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings updated:", settings);
    // Add your API call or settings update logic here
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Settings</h1>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={settings.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new password"
          />
        </div>

        {/* Notifications */}
        <div className="mb-4 flex items-center">
          <label className="text-gray-700 font-medium mr-2">
            Notifications
          </label>
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={handleToggle}
            className="w-5 h-5"
          />
        </div>

        {/* Theme */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Theme</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;

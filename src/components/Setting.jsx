import React, { useState } from "react";

const Setting = () => {
  const [settings, setSettings] = useState({
    companyName: "Aladdin solutions",
    emailNotifications: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setSettings({ ...settings, [name]: newValue });
  };

  return (
    <div className="bg-white w-full h-screen p-4 rounded-md">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={settings.companyName}
            onChange={handleChange}
            className="border-b rounded-md px-4 py-2 w-full bg-transparent focus:outline-none border-gray-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-normal mb-2">
            Email Notifications:
          </label>
          <input
            type="checkbox"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-sm">Enable Email Notifications</span>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Theme:</label>
          <select
            name="theme"
            value={settings.theme}
            onChange={handleChange}
            className="border-b rounded-md px-4 py-2 w-full bg-transparent focus:outline-none border-gray-400"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold mb-2">Current Settings</h2>
          <p>Company Name: {settings.companyName}</p>
          <p>
            Email Notifications:{" "}
            {settings.emailNotifications ? "Enabled" : "Disabled"}
          </p>
          <p>Theme: {settings.theme}</p>
        </div>
      </div>
    </div>
  );
};

export default Setting;

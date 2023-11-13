import { useState } from "react";
import { MenuContextProvider } from "../context/SideBarContext";

const Settings = () => {
  const [settingsTab, setSettingsTab] = useState("change password");
  const { mode, setMode } = MenuContextProvider();

  const switchMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <section>
      <div className="bg-white p-[2rem] rounded-lg mb-[16rem]">
        <h1 className="text-xl font-semibold mb-5">Settings</h1>
        <div className="flex gap-[2rem] mb-4 ">
          <h2 className="text-lg font-semibold cursor-pointer  border-b border-b-black pb-1">
            Change Password
          </h2>
          <h2 className="text-lg font-semibold cursor-pointer  border-b border-b-black pb-1">
            Other Settings
          </h2>
        </div>
        <div>
          {settingsTab === "password" ? (
            <div>
              <form action=""></form>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-5 mb-5">
                <p className="text-lg font-semibold">Dark Mode</p>
                <button
                  onClick={switchMode}
                  className={`flex  w-[4rem] h-[30px]  rounded-full transition-all duration-500 ${
                    mode === "light" ? "bg-[#33F]" : "bg-gray-500"
                  }`}
                >
                  <span
                    className={`h-[30px] w-[2rem] bg-white shadow-lg rounded-full transition-all duration-500 ${
                      mode === "light" ? "ml-auto" : "ml-0"
                    }`}
                  ></span>
                </button>{" "}
                <p className="text-lg font-semibold">Light Mode</p>
              </div>

              <button className="font-semibold text-lg border border-black rounded-lg shadow-md px-4 py-[0.4rem] inline-block mr-[4rem]">
                Cancel
              </button>
              <button className="font-semibold text-lg rounded-lg shadow-md px-5 py-[0.5rem] bg-[#33F] text-white">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Settings;

import cloud from "../assets/icons/fluent_weather-partly-cloudy-day-20-filled.svg";
import clock from "../assets/icons/heroicons_clock.svg";
import Mentorship from "./Mentorship";
import { MenuContextProvider } from "../context/SideBarContext";
import Settings from "./Settings";

const DashboardWindow = () => {
  const {activeTab} = MenuContextProvider()

  return (
    <section className="w-full max-w-[82rem]">
      <div className="bg-[#F8F8F8] py-[1.25rem] md:pl-[1.88rem] md:pr-[2.25rem] px-[1rem] w-full">
        {/* Greetings - header section */}
        <div className="flex flex-col md:flex-row gap-[2rem] items-start justify-between pb-[1.56rem]">
          <div className="w-fit">
            <div className="flex items-center justify-between gap-[0.94rem]">
              <h1 className="text-[1.5rem] font-medium leading-normal tracking-[0.0625rem]">
                Good Morning, Adekunle!
              </h1>
              <img src={cloud} alt="cloud" />
            </div>
            <h2 className="text-[#0A0A29] text-[0.875rem] font-normal leading-normal tracking-[0.0625rem]">
              Watch impactful videos from mentors round about the world!
            </h2>
          </div>
          <div className="w-[10.4375rem] h-[2.9375rem] bg-white px-[0.56rem] py-[0.38rem] shadow-md rounded-[0.3125rem] border-[0.5px] border-[#F0F0FF]">
            <p className="text-[0.625rem] font-semibold leading-normal">
              Current time
            </p>
            <div className="flex items-center gap-1">
              <p className="text-[0.75rem] font-medium leading-normal">
                2 Nov 2023 11:13pm
              </p>
              <img src={clock} alt="clock" />
            </div>
          </div>
        </div>
        <div>
          {
            activeTab === "mentorship" &&  <Mentorship />
          }
           {
            activeTab === "settings" &&  <Settings/>
          }
        </div>
      </div>
    </section>
  );
};

export default DashboardWindow;

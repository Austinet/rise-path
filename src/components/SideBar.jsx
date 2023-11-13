import { Link } from "react-router-dom";
import overview from "../assets/icons/overview.svg";
import level from "../assets/icons/carbon_skill-level-intermediate.svg";
import mentalHealth from "../assets/icons/ri_mental-health-line.svg";
import mentorship from "../assets/icons/clarityEmployeeGroupSolid0.svg";
import appraisal from "../assets/icons/carbon_task-star.svg";
import settings from "../assets/icons/ant-design_setting-outlined.svg";
import logOut from "../assets/icons/bx_log-out.svg";

const SideBar = () => {
  return (
    <aside>
      <div className="pt-[1.44rem] pb-[8.12rem] w-[16rem] px-[1rem]">
        <ul className="flex flex-col gap-[1.25rem]">
          <li className="flex items-center gap-[1.62rem] p-[0.5rem]">
            <img src={overview} alt="" />
            <Link className="text-[#0A0A29] text-base leading-normal font-medium">
              Overview
            </Link>
          </li>
          <li className="flex items-center gap-[1.62rem] p-[0.5rem]">
            <img src={level} alt="" />
            <Link className="text-[#0A0A29] text-base leading-normal font-medium">
              Learning
            </Link>
          </li>
          <li className="flex items-center gap-[1.62rem] bg-[#33F] rounded-[0.25rem] p-[0.5rem]">
            <img src={mentorship} alt="" />
            <Link className="text-[#F0F0FF] text-base leading-normal font-medium">
              Mentorship
            </Link>
          </li>
          <li className="flex items-center gap-[1.62rem] p-[0.5rem]">
            <img src={mentalHealth} alt="" />
            <Link className="text-[#0A0A29] text-base leading-normal font-medium">
              Mental health
            </Link>
          </li>
          <li className="flex items-center gap-[1.62rem] p-[0.5rem]">
            <img src={appraisal} alt="" />
            <Link className="text-[#0A0A29] text-base leading-normal font-medium">
              Appraisal
            </Link>
          </li>
          <li className="flex items-center gap-[1.62rem] mb-[16.06rem] p-[0.5rem]">
            <img src={settings} alt="" />
            <Link className="text-[#0A0A29] text-base leading-normal font-medium">
              Settings
            </Link>
          </li>
          <li className="flex items-center gap-[1.62rem] p-[0.5rem]">
            <img src={logOut} alt="" />
            <Link className="text-[#0A0A29] text-base leading-normal font-medium">
              Log out
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;

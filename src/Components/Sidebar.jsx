import { IoMdHome } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { BiSolidMusic } from "react-icons/bi";
import { AiFillCompass } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

import { NavLink } from "react-router-dom";
import withGradient from "../Utils/withGradient";

const HomeIcon = withGradient(IoMdHome);
const TrendingIcon = withGradient(IoMdTrendingUp);
const MusicIcon = withGradient(BiSolidMusic);
const CompassIcon = withGradient(AiFillCompass);
const SettingsIcon = withGradient(IoSettings);
const LogOutIcon = withGradient(MdLogout);

const SidebarItem = ({ to, Icon, label }) => (
  <li>
    <NavLink to={to} className="flex gap-4 items-center">
      <Icon />
      <p className="text-lg text-white">{label}</p>
    </NavLink>
  </li>
);

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-[250px] bg-black h-screen p-2">
      <div className="flex items-center gap-2 justify-center">
        <MusicIcon />
        <p className="text-2xl text-white">
          <span className="text-red-500">Dream</span>Music
        </p>
      </div>
      <div className="flex flex-col justify-between min-h-full">
        <div className="flex flex-col gap-2 mt-20">
          <p className="text-white text-xs font-semibold">MENU</p>
          <ul className="flex flex-col gap-2">
            <SidebarItem to="/" Icon={HomeIcon} label="Home" />
            <SidebarItem to="/trending" Icon={TrendingIcon} label="Trends" />
            <SidebarItem to="/library" Icon={MusicIcon} label="Library" />
            <SidebarItem to="/discover" Icon={CompassIcon} label="Discover" />
          </ul>
        </div>
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-white text-xs font-semibold">GENERAL</p>
          <ul className="flex flex-col gap-2">
            <SidebarItem to="/" Icon={SettingsIcon} label="Settings" />
            <SidebarItem to="/trending" Icon={LogOutIcon} label="Log Out" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

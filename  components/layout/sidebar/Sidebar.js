import styles from "./Sidebar.module.css";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import SidebarLogo from "./sidebar-logo/SidebarLogo";
import SidebarItem from "./sidebar-item/SidebarItem";
import SidebarTweetButton from "./sidebar-tweet-button/SidebarTweetButton";
export default function Sidebar() {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "Profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["logo"]}>
        <SidebarLogo />
        {items.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
        <SidebarItem onClick={() => {}} icon={BiLogOut} label="Logout" />
        <SidebarTweetButton />
      </div>
    </div>
  );
}

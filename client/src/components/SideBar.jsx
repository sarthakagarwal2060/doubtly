import { ScrollArea } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  PlusCircle,
  MessageCircle,
  Trophy,
  Gift,
  Settings,
  HelpCircle,
  GalleryVerticalEnd,
} from "lucide-react";

function SideBar() {
  const navigate = useNavigate();
  const topMenuItems = [
    { icon: Home, label: "Home", href: "/dashboard" },
    // { icon: PlusCircle, label: "Post a Doubt", href: "/dashboard/postdoubt" },
    { icon: GalleryVerticalEnd, label: "All Doubts", href: "/dashboard/allDoubts" },
    { icon: MessageCircle, label: "My Doubts", href: "/dashboard/mydoubts" },
    { icon: Trophy, label: "Leaderboard", href: "/dashboard/leaderboard" },
    { icon: Gift, label: "Points & Rewards", href: "/dashboard/points" },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: "Settings", href: "#" },
    { icon: HelpCircle, label: "Help & FAQ", href: "#" },
  ];
  const isActive = (href) => {
    return href === location.pathname;
  };

  return (
    <>
      <div className="fixed top-16 bottom-0 z-50 w-64 bg-primary border-r border-borderColor py-4 px-2 transition-transform duration-200 ease-in-out dark:bg-[#121212] dark:border-[#414749]">
        <div className="h-full flex flex-col justify-between">
          <ScrollArea className="flex-1 dark:text-white">
            <div className="flex flex-col dark:text-white">
              {topMenuItems.map((item) => (
                <Link to={item.href}>
                  <button
                    key={item.label}
                    className={`flex gap-2 items-center w-full px-3 py-2 pt-4 text-black  hover:bg-[rgba(224,238,251,0.3)] 
                   dark:hover:bg-[rgba(30, 72, 136, 0.3)]
                      rounded-md ${
                      isActive(item.href) ? "bg-[#d0e3f4] dark:bg-[#0090ff]" : ""
                    }`}
                  >
                    <item.icon className="mr-2 h-4 w-4 text-black dark:text-white" />
                    <span className="text-black text-sm dark:text-white">{item.label}</span>
                  </button>
                </Link>
              ))}
            </div>
          </ScrollArea>

          <div className="flex flex-col pt-4">
            {bottomMenuItems.map((item) => (
              <button
                key={item.label}
                className="flex gap-2 items-center w-full px-3 py-2 pt-4  dark:hover:bg-[rgba(30, 72, 136, 0.3)] text-black hover:bg-[rgba(224,238,251,0.3)]  rounded-md "
              >
                <item.icon className="mr-2 h-4 w-4 text-black dark:text-white" />
                <span className="text-black text-sm dark:text-white">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;

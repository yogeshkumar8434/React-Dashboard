import sidebarItems from "@/constants/sidebar";
import { Icon } from "..";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-[4.8rem]  z-20 flex h-[calc(100%_-_75px)] w-1/2 min-w-[20rem] flex-col justify-between rounded-none bg-black px-12 py-5 transition-[transform] xl:static xl:h-full xl:w-full xl:rounded-[30px]
       ${
         isOpen ? "translate-x-0" : "-translate-x-[101%]"
       } xl:min-w-0 xl:translate-x-0
      `}
    >
      <div className="flex flex-col">
        <h1 className="my-10 text-4xl font-bold text-white">Board.</h1>
        {sidebarItems["upMenu"].map((item, idx) => (
          <div key={idx} className="flex cursor-pointer gap-x-5 py-5">
            <Icon name={item.icon} className={" text-white"} />
            <div className="text-lg text-white">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="my-5">
        {sidebarItems["downMenu"].map((item) => (
          <div key={item} className="flex cursor-pointer py-2.5 ">
            <div className="text-sm text-white">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import { useSession, signOut } from "next-auth/react";
import { Icon, Sidebar, CustomPieChart, CustomLineChart } from "..";
import { useState } from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  console.log("session", session);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    session && (
      <div className="grid h-full min-h-screen w-screen grid-cols-1 overflow-hidden bg-customGray xl:grid-cols-[20%_auto] xl:p-8">
        {/* Section-1 : Sidebar */}
        <Sidebar isOpen={isNavOpen} />

        {/* Section-1 : Main */}
        <div className="flex flex-col gap-6 pt-0 xl:ml-10 xl:gap-10 xl:py-6">
          {/* Header */}
          <div className="sticky left-0 top-0 z-20 flex items-center justify-between gap-x-7 border-b border-gray-300 p-6 backdrop-blur-sm xl:static xl:border-0 xl:bg-transparent xl:p-0 ">
            <Icon
              name={"hamburger"}
              className={"cursor-pointer xl:hidden"}
              size={"24px"}
              onClick={() => setIsNavOpen((prev) => !prev)}
            />
            <div className="hidden text-2xl font-bold xl:block">Dashboard</div>
            <div className=" flex items-center gap-x-7">
              <div className="relative hidden w-fit md:flex">
                <Icon
                  name="search"
                  size={"14px"}
                  className={"absolute right-3 top-1/2 -translate-y-1/2"}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="rounded-[10px] px-4 py-1.5 font-lato"
                />
              </div>
              <Icon
                name={"search"}
                className={"cursor-pointer md:hidden"}
                size={"20px"}
              />
              <Icon name="bell" size={"20px"} className={"cursor-pointer"} />

              <div className="relative">
                <img
                  src={session.user.image || "profile.png"}
                  alt="avataar"
                  className="h-7 w-7 cursor-pointer rounded-full"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                />

                {/* DropDown */}
                {isDropdownOpen && (
                  <div class="absolute right-0 z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700">
                    <div class="px-4 py-3">
                      <span class="block text-sm text-gray-900 dark:text-white">
                        {session.user.name}
                      </span>
                      <span class="block truncate  text-sm text-gray-500 dark:text-gray-400">
                        {session.user.email}
                      </span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">        
                      <li>
                        <div class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                          Account
                        </div>
                      </li>
                      <li>
                        <div class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                          Change Password
                        </div>
                      </li>
                      <li>
                        <div class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                          Settings
                        </div>
                      </li>
                      <li onClick={() => signOut({ callbackUrl: "/" })}>
                        <div class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                          Sign out
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 py-6 xl:p-0">
            {/* Card */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 xl:gap-9">
              <div className="flex h-[120px] flex-col rounded-[10px] bg-[#DDEFE0] px-5 py-5 md:px-6">
                <Icon name={"revenue"} className={"mb-1 ml-auto"} />
                <span className="font-lato text-sm">Total Revenues</span>
                <span className="font-sans text-2xl font-bold">$2,129,430</span>
              </div>

              <div className="flex h-[120px] flex-col rounded-[10px] bg-[#F4ECDD] px-5 py-5 md:px-6">
                <Icon name={"transaction"} className={" mb-1 ml-auto"} />
                <span className="font-lato text-sm">Total Transactions</span>
                <span className=" font-sans text-2xl font-bold">1520</span>
              </div>

              <div className="flex h-[120px] flex-col rounded-[10px] bg-[#EFDADA] px-5 py-5 md:px-6">
                <Icon name={"like"} className={"mb-1 ml-auto"} />
                <span className="font-lato text-sm">Total Likes</span>
                <span className=" font-sans text-2xl font-bold">9721</span>
              </div>

              <div className="flex h-[120px] flex-col rounded-[10px] bg-[#DEE0EF] px-5 py-5 md:px-6">
                <Icon name={"users"} className={"mb-1 ml-auto"} />
                <span className="font-lato text-sm">Total Users</span>
                <span className=" font-sans text-2xl font-bold">892</span>
              </div>
            </div>

            {/* Chart */}
            <div className="flex h-96 w-full flex-col justify-between gap-y-2 rounded-xl bg-white px-5 py-6 md:px-10">
              <div className="min flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold">Activities</h3>
                  <div>
                    <span className="mr-2 text-xs text-[#858585]">
                      May - June 2021
                    </span>
                    <Icon
                      name="arrow-down"
                      size={"xxs"}
                      className={"cursor-pointer"}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:flex-row ">
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#E9A0A0] "></span>
                    <div>Guest</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#9BDD7C] "></span>
                    <div>User</div>
                  </div>
                </div>
              </div>
              <CustomLineChart width={"100%"} height={"85%"} />
            </div>

            {/* Another Two Cards */}
            <div className="grid h-full grid-cols-1 grid-rows-2 gap-6 md:grid-cols-2 md:grid-rows-1 xl:gap-10">
              <div className="rounded-[10px] bg-white px-6 py-6 xl:px-10 xl:py-8">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold">Top products</h3>
                  <div>
                    <span className="mr-2 text-xs text-[#858585]">
                      May - June 2021
                    </span>
                    <Icon
                      name="arrow-down"
                      size={"xxs"}
                      className={"cursor-pointer"}
                    />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 items-center">
                  <CustomPieChart />
                  <div className="ml-4 flex flex-col justify-center gap-y-4">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-x-2.5">
                        <div className="inline-block h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        <h4 className="font-lato text-sm font-bold">
                          Basic Tees
                        </h4>
                      </div>
                      <div className="ml-5 text-xs text-[#858585]">55%</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="flex items-center gap-x-2.5">
                        <div className="inline-block h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                        <h4 className="font-lato text-sm font-bold">
                          Custom Short Pants
                        </h4>
                      </div>
                      <div className="ml-5 text-xs text-[#858585]">31%</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-x-2.5">
                        <div className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500"></div>
                        <h4 className="font-lato text-sm font-bold">
                          Super Hoodies
                        </h4>
                      </div>
                      <div className="ml-5 text-xs text-[#858585]">14%</div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="rounded-[10px] bg-white px-6 py-6 xl:px-10 xl:py-8">
                {/* Top */}
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold">Today’s schedule</h3>
                  <div>
                    <span className="mr-2 text-xs text-[#858585]">See All</span>
                    <Icon
                      name="arrow-right"
                      size={"xxs"}
                      className={"cursor-pointer"}
                    />
                  </div>
                </div>

                {/* Data */}
                <div className=" mt-5 flex flex-col gap-y-3">
                  <div className="border-l-4 border-[#9BDD7C] py-1 pl-3">
                    <h4 className="font-lato text-sm font-bold">
                      Check operation at Giga Factory 1
                    </h4>
                    <div className="font-lato text-xs text-[#999999]">
                      18.00-20.00
                    </div>
                    <div className="font-lato text-xs text-[#999999]">
                      at Central Jakarta
                    </div>
                  </div>
                  <div className="border-l-4 border-[#9BD] py-1 pl-3">
                    <h4 className="font-lato text-sm font-bold">
                      Meeting with suppliers from Kuta Bali
                    </h4>
                    <div className="font-lato text-xs text-[#999999]">
                      14.00-15.00
                    </div>
                    <div className="font-lato text-xs text-[#999999]">
                      at Sunset Road, Kuta, Bali
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;

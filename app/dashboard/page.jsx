'use client'
import Header from '@/components/Header';
import Task from '@/components/Task';
import { taskList } from '@/constants/tasks';
// import { Icon } from '@iconify/react';
import { Add, ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'



const page = () => {

  const router = useRouter()
  const [todayTasks, setTodayTasks] = useState();

  console.log(todayTasks);


  const toggleIsOpen = (id) => {
    todayTasks.filter(item => item.id === id ? item.isOpened = true : null)

    console.log(item.id)
  }

  useEffect(() => { 
    setTodayTasks(taskList)
  },[])

  return (
    <div className="w-full flex flex-col gap-4 2xl:gap-[1.4rem] ">
      {/* TODAY */}
      <div className="w-full border border-borderline rounded-xl p-4 ">
        {/* TITLE */}
        <div className="w-full">
          <h3 className="text-lg 2xl:text-2xl font-[600] text-appBlack">
            Today
          </h3>
        </div>

        {/* ADD NEW TASK */}
        <div className="w-full border border-borderline p-3 flex items-center gap-3 mt-3 rounded-lg cursor-pointer transition duration-200 hover:bg-borderlineTrans active:bg-borderline">
          <Add className="text-iconGray" />
          <p className="text-sm 2xl:text-base text-iconGray ">Add New Task</p>
        </div>

        {/* MAPPED ITEMS */}
        <div className="mt-3 w-full flex flex-col ">
          {/* EACH MAPPED LINE */}
          {todayTasks ? (
            todayTasks.map((item, idx) => (
              <div onClick={() => router.push(`/dashboard/${item.id}`)} className=" transition duration-200 cursor-pointer rounded-lg hover:bg-sidebarBgGray active:bg-borderline">
              <Task
                todayTasks={todayTasks}
                setTodayTasks={setTodayTasks}
                item={item}
                key={item.id}
                />
                </div>
            ))
          ) : (
            <div className="w-full h-[100px] flex items-center flex-col justify-center ">
              <Image src={require("@/assets/images/noTask.png")} width={100} />
              <p clsssName="text-sm 2xl:text-">Oops, You have no todos yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full h-fit max-h-[400px] flex items-stretch flex-nowrap gap-4 2xl:gap-[1.4rem] dropScroll">
        {/* TOMORROW */}
        <div className="w-full border border-borderline rounded-xl p-4 ">
          {/* TITLE */}
          <div className="w-full">
            <h3 className="text-lg 2xl:text-2xl font-[600] text-appBlack">
              Tomorrow
            </h3>
          </div>

          {/* ADD NEW TASK */}
          <div className="w-full border border-borderline p-3 flex items-center gap-3 mt-3 rounded-lg cursor-pointer transition duration-200 hover:bg-borderlineTrans active:bg-borderline">
            <Add className="text-iconGray" />
            <p className="text-sm 2xl:text-base text-iconGray ">Add New Task</p>
          </div>

          {/* MAPPED ITEMS */}
          <div className="mt-3 w-full flex flex-col ">
            {/* EACH MAPPED LINE */}
            {todayTasks ? (
              todayTasks.map((item, idx) => (
                <div onClick={() => router.push(`/dashboard/${item.id}`)} className=" transition duration-200 cursor-pointer rounded-lg hover:bg-sidebarBgGray active:bg-borderline">
                <Task
                  todayTasks={todayTasks}
                  setTodayTasks={setTodayTasks}
                  item={item}
                  key={item.id}
                  />
                  </div>
              ))
            ) : (
              <div className="w-full h-[100px] flex items-center flex-col justify-center ">
                <Image
                  src={require("@/assets/images/noTask.png")}
                  width={100}
                />
                <p clsssName="text-sm 2xl:text-">Oops, You have no todos yet</p>
              </div>
            )}
          </div>
        </div>

        {/* THIS WEEK */}
        <div className="w-full border border-borderline rounded-xl p-4 ">
          {/* TITLE */}
          <div className="w-full">
            <h3 className="text-lg 2xl:text-2xl font-[600] text-appBlack">
              This Week
            </h3>
          </div>

          {/* ADD NEW TASK */}
          <div className="w-full border border-borderline p-3 flex items-center gap-3 mt-3 rounded-lg cursor-pointer transition duration-200 hover:bg-borderlineTrans active:bg-borderline">
            <Add className="text-iconGray" />
            <p className="text-sm 2xl:text-base text-iconGray ">Add New Task</p>
          </div>

          {/* MAPPED ITEMS */}
          <div className="mt-3 w-full flex flex-col ">
            {/* EACH MAPPED LINE */}
            {todayTasks ? (
              todayTasks.map((item, idx) => (
                <div onClick={() => router.push(`/dashboard/${item.id}`)} className=" transition duration-200 cursor-pointer rounded-lg hover:bg-sidebarBgGray active:bg-borderline">
                <Task
                  todayTasks={todayTasks}
                  setTodayTasks={setTodayTasks}
                  item={item}
                  key={item.id}
                  />
                  </div>
              ))
            ) : (
              <div className="w-full h-[100px] flex items-center flex-col justify-center ">
                <Image
                  src={require("@/assets/images/noTask.png")}
                  width={100}
                />
                <p clsssName="text-sm 2xl:text-">Oops, You have no todos yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
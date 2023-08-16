'use client'
import Task from '@/components/Task'
import { taskList } from '@/constants/tasks'
import { Add } from 'iconsax-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const page = () => {

  const [todayTasks, setTodayTasks] = useState();

  console.log(todayTasks);

  useEffect(() => {
    setTodayTasks(taskList);
  }, []);

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
              <Task
                todayTasks={todayTasks}
                setTodayTasks={setTodayTasks}
                item={item}
                key={item.id}
              />
            ))
          ) : (
            <div className="w-full h-[100px] flex items-center flex-col justify-center ">
              <Image src={require("@/assets/images/noTask.png")} width={100} />
              <p clsssName="text-sm 2xl:text-">Oops, You have no todos yet</p>
            </div>
          )}
        </div>
      </div>

      
    </div>
  )
}

export default page
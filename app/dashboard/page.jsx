'use client'
import Header from '@/components/Header';
import { taskList } from '@/constants/tasks';
// import { Icon } from '@iconify/react';
import { Add, ArrowRight2 } from 'iconsax-react';
import React, { useState } from 'react'



const page = () => {

  const [todayTasks, setTodayTasks] = useState(taskList);

  console.log(todayTasks);


  const toggleIsOpen = (id) => {
    todayTasks.filter(item => item.id === id ? item.isOpened = true : null)

    console.log(item.id)
  }

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
          {todayTasks?.map((item, idx) => (
            <div key={item.id} className="w-full border-b border-borderline">
              {/* TOP LINE WITH CHECK BOX AND ALL */}
              <div className="w-full flex items-center justify-between px-4 py-2">
                {/* CHECK BOX AND DESCRIPTION */}
                <div className="flex items-center gap-3 ">
                  {/* CHECKBOX ICON DIV */}
                  <div className="w-4 h-4">
                    <div className="w-4 h-4 rounded border border-borderline" />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="w-full ">
                    <p className="text-sm 2xl:text-base text-darkGray">
                      Research content ideas
                    </p>
                  </div>
                </div>

                {/* THE ARROW ICON DIV */}
                <div onClick={() => {
                  toggleIsOpen(item.id)
                }} className='bg-appYellow w-5 h-5 rounded flex items-center justify-center cursor-pointer' >
                  <ArrowRight2 className="text-darkGray pointer-events-none" size="14" />
                </div>
              </div>

              {/* SECOND LINE WITH DATE AND OTHER INFO */}
              <div
                style={{
                  height: item.isOpened === true ? "fit-content" : 0,
                  padding: item.isOpened === true ? "8px 0 8px 44px" : 0,
                }}
                className="transition duration-200 flex items-center gap-8 overflow-hidden"
              >
                {/* CALENDAR */}
                <div className="flex gap-2 items-center">
                  {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                  <div className="h-3 w-3 bg-iconGray rounded" />
                  <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                    12-08-2023
                  </p>
                </div>

                {/* SUBTASKS */} 
                <div className="flex gap-2 items-center">
                  {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                  <div className=" px-2 bg-borderline rounded">
                    <p className="text-[10px] font-[600] text-darkGray">1</p>
                  </div>
                  <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                    Subtasks
                  </p>
                </div>

                {/* TASK TAG */}
                <div className="flex gap-2 items-center">
                  {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                  <div className="h-3 w-3 bg-tagRed rounded" />
                  <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                    Personal
                  </p>
                </div>
              </div>
            </div>
          ))}
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
            {taskList?.map((item, idx) => (
              <div className="w-full border-b border-borderline">
                {/* TOP LINE WITH CHECK BOX AND ALL */}
                <div className="w-full flex items-center justify-between px-4 py-2">
                  {/* CHECK BOX AND DESCRIPTION */}
                  <div className="flex items-center gap-3 ">
                    {/* CHECKBOX ICON DIV */}
                    <div className="w-4 h-4">
                      <div className="w-4 h-4 rounded border border-borderline" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="w-full ">
                      <p className="text-sm 2xl:text-base text-darkGray">
                        Research content ideas
                      </p>
                    </div>
                  </div>

                  {/* THE ARROW ICON DIV */}
                  <div>
                    <ArrowRight2 className="text-darkGray" size="14" />
                  </div>
                </div>

                {/* SECOND LINE WITH DATE AND OTHER INFO */}
                <div className="pl-11 py-2 flex items-center gap-8">
                  {/* CALENDAR */}
                  <div className="flex gap-2 items-center">
                    {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                    <div className="h-3 w-3 bg-iconGray rounded" />
                    <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                      12-08-2023
                    </p>
                  </div>

                  {/* SUBTASKS */}
                  <div className="flex gap-2 items-center">
                    {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                    <div className=" px-2 bg-borderline rounded">
                      <p className="text-[10px] font-[600] text-darkGray">1</p>
                    </div>
                    <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                      Subtasks
                    </p>
                  </div>

                  {/* TASK TAG */}
                  <div className="flex gap-2 items-center">
                    {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                    <div className="h-3 w-3 bg-tagRed rounded" />
                    <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                      Personal
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
            {taskList?.map((item, idx) => (
              <div className="w-full border-b border-borderline">
                {/* TOP LINE WITH CHECK BOX AND ALL */}
                <div className="w-full flex items-center justify-between px-4 py-2">
                  {/* CHECK BOX AND DESCRIPTION */}
                  <div className="flex items-center gap-3 ">
                    {/* CHECKBOX ICON DIV */}
                    <div className="w-4 h-4">
                      <div className="w-4 h-4 rounded border border-borderline" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="w-full ">
                      <p className="text-sm 2xl:text-base text-darkGray">
                        Research content ideas
                      </p>
                    </div>
                  </div>

                  {/* THE ARROW ICON DIV */}
                  <div>
                    <ArrowRight2 className="text-darkGray" size="14" />
                  </div>
                </div>

                {/* SECOND LINE WITH DATE AND OTHER INFO */}
                <div className="pl-11 py-2 flex items-center gap-8">
                  {/* CALENDAR */}
                  <div className="flex gap-2 items-center">
                    {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                    <div className="h-3 w-3 bg-iconGray rounded" />
                    <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                      12-08-2023
                    </p>
                  </div>

                  {/* SUBTASKS */}
                  <div className="flex gap-2 items-center">
                    {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                    <div className=" px-2 bg-borderline rounded">
                      <p className="text-[10px] font-[600] text-darkGray">1</p>
                    </div>
                    <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                      Subtasks
                    </p>
                  </div>

                  {/* TASK TAG */}
                  <div className="flex gap-2 items-center">
                    {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                    <div className="h-3 w-3 bg-tagRed rounded" />
                    <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
                      Personal
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
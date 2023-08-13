import Header from '@/components/Header';
// import { Icon } from '@iconify/react';
import { Add, ArrowRight2 } from 'iconsax-react';
import React from 'react'

const list = [1, 2, 3, 4, 5, 6, 7]

const page = () => {
  return (
    <div>
      {/* TODAY */}
      <div className="w-full border border-borderline rounded-xl p-4 ">
        {/* TITLE */}
        <div className="w-full">
          <h3 className="text-lg 2xl:text-2xl font-[600] text-appBlack">Today</h3>
        </div>

        {/* ADD NEW TASK */}
        <div className="w-full border border-borderline p-3 flex items-center gap-3 mt-3 rounded-lg cursor-pointer transition duration-200 hover:bg-borderlineTrans active:bg-borderline">
          <Add className="text-iconGray" />
          <p className="text-sm 2xl:text-base text-iconGray ">Add New Task</p>
        </div>

        {/* MAPPED ITEMS */}
        <div className="mt-3 w-full flex flex-col ">



          {/* EACH MAPPED LINE */}
          {list?.map((item, idx) => (
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
                  <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">12-08-2023</p>
                </div>
 
                {/* SUBTASKS */}
                <div className="flex gap-2 items-center">
                  {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                  <div className=" px-2 bg-borderline rounded">
                    <p className="text-[10px] font-[600] text-darkGray">1</p>
                  </div>
                  <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">Subtasks</p>
                </div>

                {/* TASK TAG */}
                <div className="flex gap-2 items-center">
                  {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
                  <div className="h-3 w-3 bg-tagRed rounded" />
                  <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">Personal</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page
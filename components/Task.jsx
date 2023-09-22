import { taskList } from '@/constants/tasks';
import { ArrowDown2, ArrowRight2, TickSquare } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Task = ({ item, todayTasks, setTodayTasks}) => {

  const router = useRouter();
  const [task, setTask] = useState(item);
  const [tasks, setTasks] = useState(taskList);

  // const handleToggleOpen = () => {
  //   setTodayTasks(todayTasks.map(item => {
  //     if (item.content === task.content) {
  //       console.log("opened ?:" , item.isOpened)
  //       console.log("item content:" , item.content)
  //       console.log("task content ?:" , task.content)
  //       console.log( "are same?: ",task.content === item.content )
  //       return {...item, isOpened: !item.isOpened}
  //     }
  //     return item;
  //   }))

  //   console.log("todaytasek", todayTasks)
  // }
  
  const handleToggleOpen = () => {
    setTask({...task, isOpened: !task.isOpened})
  }

  const handleCompleted = () => {
    setTask({...task, isCompleted: !task.isCompleted})
  }




  return (
    <div key={item.id} className="w-full border-b border-borderline">
      {/* TOP LINE WITH CHECK BOX AND ALL */}
      <div className="w-full flex items-center justify-between px-4 py-2">
        {/* CHECK BOX AND DESCRIPTION */}
        <div className="flex flex-1 items-center gap-3 ">
          {/* CHECKBOX ICON DIV */}
          <div onClick={handleCompleted} className="w-4 h-4">
            {task.isCompleted === true ? (
              <TickSquare size="16" color="#FF8A65" variant="Bold" />
            ) : (
              <div className="w-4 h-4 rounded border border-borderline" />
            )}
          </div>

          {/* DESCRIPTION */}
          <div
            onClick={() => router.push(`/dashboard/${task.id}`)}
            className="w-[100%] "
          >
            <p
              className={`text-sm 2xl:text-base text-darkGray ${
                task.isCompleted === true && "line-through"
              }`}
            >
              {task.content}
            </p>
          </div>
        </div>

        {/* THE ARROW ICON DIV */}
        <div
          onClick={() => {
            handleToggleOpen();
          }}
          style={{
            transform:
              task.isOpened === true ? "rotate(-180deg)" : "rotate(0deg)",
          }}
          className="transition duration-200 w-5 h-5 rounded flex items-center justify-center cursor-pointer"
        >
          <ArrowDown2 className="text-darkGray pointer-events-none" size="14" />
        </div>
      </div>

      {/* SECOND LINE WITH DATE AND OTHER INFO */}
      <div
        onClick={() => router.push(`/dashboard/${task.id}`)}
        style={{
          height: task.isOpened === true ? "50px" : "0px",
          padding: task.isOpened === true ? "8px 0 8px 44px" : "0px",
        }}
        className="transition duration-200 h-0 flex items-center gap-8 overflow-hidden"
      >
        {/* CALENDAR */}
        <div className="flex gap-2 items-center">
          {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
          <div className="h-3 w-3 bg-iconGray rounded" />
          <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
            {task.dueDate}
          </p>
        </div>

        {/* SUBTASKS */}
        <div className="flex gap-2 items-center">
          {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
          <div className=" px-2 bg-borderline rounded">
            <p className="text-[10px] font-[600] text-darkGray">
              {task.subTasks.length}
            </p>
          </div>
          <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
            Subtasks
          </p>
        </div>

        {/* TASK TAG */}
        <div className="flex gap-2 items-center">
          {/* <Icon className='text-iconGray text-sm' icon="fa-solid:calendar-alt" /> */}
          <div
            className={`h-3 w-3 bg-tagRed ${
              task.tag === "personal" && "bg-tagRed"
            } ${task.tag === "work" && "bg-tagBlue"} ${
              task.tag === "list 1" && "bg-tagYellow"
            } rounded`}
          />
          <p className="text-[10px] 2xl:text-xs font-[600] text-darkGray">
            {task.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task
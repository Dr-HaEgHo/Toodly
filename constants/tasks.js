

export const taskList = [
    {
        id: Math.round(Math.random() * 100 + Math.random() * 100),
        content: "Board Meeting by 2:00PM",
        tag: "work",
        subTasks: [],
        dueDate: "12-08-2023",
        isOpened: false,
        isCompleted: false,
        
    },
    {
        id: Math.round(Math.random() * 100 + Math.random() * 100),
        content: "Research Haemoglobin test centres nearby",
        tag: "personal",
        subTasks: [
            {
                id: Math.round(Math.random() * 100 + Math.random() * 100),
                content: "Check centres in New Jersey, make calls regarding reservations and charges",
                dueTime: "12:00",
                isCompleted: false
            },
            {
                id: Math.round(Math.random() * 100 + Math.random() * 100),
                content: "Check centres in New Jersey, make calls regarding reservations and charges",
                dueTime: "12:00",
                isCompleted: false
            },
            {
                id: Math.round(Math.random() * 100 + Math.random() * 100),
                content: "Check centres in New Jersey, make calls regarding reservations and charges",
                dueTime: "12:00",
                isCompleted: false
            },
        ],
        dueDate: "12-08-2023",
        isOpened: false,
        isCompleted: false, 
        
    },
    {
        id: Math.round(Math.random() * 100 + Math.random() * 100),
        content: "Board Meeting by 2:00PM",
        tag: "work",
        subTasks: [],
        dueDate: "12-08-2023",
        isOpened: false,
        isCompleted: false,
        
    },
]
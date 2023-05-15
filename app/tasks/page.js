"use client"
import React, { useState,useEffect } from 'react'


import Link from 'next/link';

const taskList = [
    { id: '1', title: 'Develop a New Feature for the Website', startTime: '09:00', endTime: '11:00' },
    { id: '2', title: 'Create Marketing Strategy for Product Launch', startTime: '13:30', endTime: '15:30' },
    { id: '3', title: 'Collaborate with Design Team on UI/UX Enhancements', startTime: '12:00', endTime: '13:00' },
    { id: '4', title: 'Conduct Market Research and Competitive Analysis', startTime: '10:00', endTime: '12:00' },
    { id: '5', title: 'Prepare Financial Reports for Quarterly Meeting', startTime: '16:00', endTime: '17:00' },
    { id: '6', title: 'Review and Optimize Backend Infrastructure for Scalability', startTime: '09:30', endTime: '10:30' }
];


export default function Tasks() {
    const [tasks, setTasks] = useState(taskList);

    useEffect(() => {
        
        const sortedTasks = [...tasks].sort((a, b) => {
            const startTimeA = new Date(`01/01/2000 ${a.startTime}`);
            const startTimeB = new Date(`01/01/2000 ${b.startTime}`);
            return startTimeA - startTimeB;
        });

        setTasks(sortedTasks);
    }, [tasks]);


    const handleTaskUpdate = (taskId, updatedTask) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
    };


    return (
        <main className="flex min-h-screen flex-col items-center gap-8 p-8 md:p-16 lg:p-24">
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-3xl font-bold'> Schedule</h1>
                <p><a href='/about' className='text-blue-500'>Learn more about our agenda &rarr; </a></p>
            </div>

            <div className='flex flex-col w-full max-w-2xl'>
                <ul className='flex flex-col justify-center gap-2  p-4 w-full'>
                    {tasks.map((task) => (
                        <li className='flex border-b-2 p-4  w-full' key={task.id}>
                            <a href={`/tasks/${task.id}`}>
                                <div className='flex gap-4 flex-col md:flex-row w-full'>
                                    <div className='flex text-slate-500 gap-2'>
                                        <div>
                                            {task.startTime}
                                        </div>
                                        <div>{'-'}</div>
                                        <div>
                                            {task.endTime}
                                        </div>
                                    </div>
                                    <div className='font-bold'>
                                        {task.title}
                                    </div>

                                </div>
                            </a>
                    
                        </li>

                    ))}
                </ul>
            </div>

        </main>
    )
}

import React from 'react'

export default function Task({task}) {
    return (

        <div className='flex border-b-2 p-4  w-full' key={task.id}>
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

        </div>


    )
}

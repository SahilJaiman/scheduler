"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function TaskPage({ params, onTaskUpdate }) {

    const router = useRouter();

    const { id } = params;

    const [taskName, setTaskName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const updatedTask = {
            id,
            title: taskName,
            startTime,
            endTime,
        };

        onTaskUpdate(id, updatedTask);
        router.back();
    };




    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col border-2 p-4 rounded-lg gap-4'>
                <h1 className='text-xl text-center font-bold'>Edit Task: {id}</h1>
                <div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <label className="block mb-2">
                            Task Name:
                            <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </label>
                        <br />
                        <label className="block mb-2">
                            Start Time:
                            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </label>
                        <br />
                        <label className="block mb-2">
                            End Time:
                            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                        </label>
                        <br />
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

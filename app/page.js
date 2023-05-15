import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl md:text-3xl font-bold'> Schedule</h1>
        <p><a href='/about' className='text-blue-500'>Learn more about our agenda &rarr; </a></p>
      </div>


    </main>
  )
}

const Announcement = () => {
  return (
    <div className='bg-white p-4 rounded-lg'>
        <div className="flex items-center justify-between">
             <h1 className="text-xl font-semibold">Announcements</h1>
             <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="mt-4 flex flex-col gap-4">
            <div className="rounded-md p-4 bg-gibSky">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem, ipsum dolor.</h2>
                    <span className="text-sm text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa esse commodi neque ullam sunt nobis odio minus</p>
            </div>
        </div>
    </div>
  )
}

export default Announcement
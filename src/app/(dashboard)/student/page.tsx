import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import EventCalendar from "@/components/EventCalendar"

const StudentPage = () => {
  return (
    <div className='flex flex-col gap-4 p-4 xl:flex-row'>
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="rounded-md p-4 bg-white h-full">
          <h1 className="text-xl font-semibold">Schedule (4a)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcement/>
      </div>
    </div>
  )
}

export default StudentPage
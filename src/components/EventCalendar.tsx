"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem Ipsum dolor",
    time : "12:00 PM 02:00 PM",
    description: "Lorem ipsum dolor si amet, consectetur lorem ipsum"
  },
  {
    id: 2,
    title: "Lorem Ipsum dolor",
    time : "12:00 PM 02:00 PM",
    description: "Lorem ipsum dolor si amet, consectetur lorem ipsum"
  },
  {
    id: 3,
    title: "Lorem Ipsum dolor",
    time : "12:00 PM 02:00 PM",
    description: "Lorem ipsum dolor si amet, consectetur lorem ipsum"
  }
];

const EventCalendar = () => {
    const [value, setValue] = useState<Value>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    const onChange = (value: Value) => {
        setValue(value);
    };

    return (
        <div className='p-4 rounded-lg bg-white'>
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
              <h1 className='text-lg font-semibold my-4'>Events</h1>
              <Image src="/moreDark.png"  alt='' width={20} height={20}/>
            </div>
            <div className="flex flex-col gap-4">
              {events.map(e=> (
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-gibSky even:border-t-gibsPurple" key={e.id}>
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-gray-600">{e.title}</h1>
                    <span className="text-gray-300 text-sm">{e.time}</span>
                  </div>
                  <p className="mt-2 text-gray-400 text-sm">{e.description}</p>
                </div>
              ))}
            </div>
        </div>
    )
}

export default EventCalendar
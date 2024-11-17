"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import DesktopView from "./Agenda/DesktopView";
import ResponsiveView from "./Agenda/ResponsiveView";

interface EventData {
  id: number;
  uid: string;
  title: string;
  date: string;
  details: string;
}

const Agenda = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://202.65.116.9:1337/api/agenda-sekolahs");
        const data = await response.json();

        const formattedEvents: EventData[] = data.data
          .map((item: any) => ({
            id: item.id,
            uid: item.attributes.AgendaURL,
            title: item.attributes.Nama,
            date: item.attributes.Tanggal,
            details: item.attributes.Details,
          }))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setEvents(formattedEvents.slice(0, 3));
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 relative text-gray-800 dark:text-gray-200">
      <div className="relative w-full rounded-3xl z-10 max-w-[1500px] mx-auto">
        <div className="absolute top-16 mt-5 right-4 sm:static sm:mt-4 sm:flex sm:justify-end">
          <button
            className="flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out sm:px-4 sm:py-2"
            onClick={() => router.push("/agenda-list")}
          >
            <span className="hidden sm:inline">Selengkapnya</span>
            <ArrowRight className="ml-2 sm:ml-0" />
          </button>
        </div>


        <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
          Agenda
        </h1>
        <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
          Agenda kegiatan dan aktivitas sesuai dengan kalender pendidikan
        </p>

        {/* Desktop and Responsive Views */}
        <div className="hidden lg:block">
          <DesktopView events={events} />
        </div>
        <div className="block lg:hidden">
          <ResponsiveView events={events} />
        </div>
      </div>
    </div>
  );
};

export default Agenda;

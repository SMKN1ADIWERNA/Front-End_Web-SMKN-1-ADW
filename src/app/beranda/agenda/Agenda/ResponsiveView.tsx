import React from "react";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface EventData {
  id: number;
  uid: string;
  title: string;
  date: string;
  details: string;
}

const ResponsiveView = ({ events }: { events: EventData[] }) => {
  const router = useRouter();

  const handleCardClick = (uid: string) => {
    router.push(`/agenda/${uid}`);
  };

  return (
    <div className="flex flex-wrap">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex-none w-full sm:w-1/2 p-4"
          onClick={() => handleCardClick(event.uid)}
          style={{ cursor: "pointer" }}
        >
          <div className="flex flex-col justify-between p-4 bg-blue-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-start">
              <Calendar className="text-blue-500 dark:text-blue-400" />
              <div className="ml-4">
                <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200">
                  {event.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
              {event.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveView;

'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchEkstrakurikuler } from '../api/ekstrakurikuler';

interface Activity {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const ActivityCards: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEkstrakurikuler();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (activities.length === 0) {
    return <div>No activities available.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {activities.map((activity) => (
        <Link href={`/ekskul/${activity.slug}`} key={activity.id}>
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={activity.image}
              alt={activity.name}
              className="h-60 w-full object-cover"
            />
            <div className="p-4 text-center">
              <div className="text-lg font-semibold">{activity.name}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ActivityCards;

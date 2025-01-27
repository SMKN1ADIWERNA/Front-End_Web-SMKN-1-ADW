"use client"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DescriptionIcon from "@mui/icons-material/Description";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";

// Define the shape of the agenda data from the API
interface AgendaData {
  Nama: string;
  Tanggal: string;
  Details: string;
}

const AgendaDetails = () => {
  const { uid } = useParams();
  const [agenda, setAgenda] = useState<AgendaData | null>(null); // Type agenda state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgendaDetails = async () => {
      try {
        const response = await fetch(
          `http://202.65.116.9:1337/api/agenda-sekolahs?filters[AgendaURL][$eq]=${uid}`
        );
        const data = await response.json();

        const agendaData = data.data[0]?.attributes as AgendaData; // Cast the response to AgendaData
        setAgenda(agendaData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching agenda details:", error);
        setLoading(false);
      }
    };

    fetchAgendaDetails();
  }, [uid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress color="primary" />
      </div>
    );
  }

  if (!agenda) {
    return <div className="text-center text-gray-500">Agenda not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Section */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
            {agenda.Nama}
          </h1>
          <p className="text-gray-500 text-sm flex items-center mb-6">
            <CalendarTodayIcon className="mr-2" /> {agenda.Tanggal}
          </p>

          {/* Event Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Icon + Details */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <EventAvailableIcon fontSize="large" className="text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-700">Agenda Date</h2>
              </div>
              <p className="text-gray-600 text-lg">{agenda.Tanggal}</p>
            </div>

            {/* Description Section */}
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-4">
                <DescriptionIcon fontSize="large" className="text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold text-gray-700">Details</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{agenda.Details}</p>
            </div>
          </div>

          {/* Button to Go Back */}
          <div className="mt-8 w-full text-center">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              Back to Agenda List
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AgendaDetails;

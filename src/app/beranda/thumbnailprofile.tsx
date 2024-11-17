import React from "react";
import { Play, ExternalLink } from "lucide-react";

const videos = [
    {
        id: 1,
        title: "Profil SMK Negeri 1 Adiwerna 2023",
        url: "https://www.youtube.com/watch?v=hOUc8LAm6Fc",
        thumbnail: "https://img.youtube.com/vi/hOUc8LAm6Fc/0.jpg",
    },
    {
        id: 2,
        title: "Profil Singkat SMK Negeri 1 Adiwerna 2020",
        url: "https://www.youtube.com/watch?v=2oR2_qObnAQ",
        thumbnail: "https://img.youtube.com/vi/2oR2_qObnAQ/0.jpg",
    },
];

const ThumbnailProfile: React.FC = () => {
    return (
        <div className="relative dark:bg-gray-900">
            <div className="container mx-auto p-4 dark:bg-gray-900">
                {/* <h1 className="text-2xl font-bold mb-6 text-center dark:text-gray-200">
          Video Profil
        </h1> */}
                <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                    Video Profil
                </h1>
                <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                    Lihat Video Profil Unggulan Kami
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <a
                                href={video.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative block"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <Play className="text-white w-12 h-12" />
                                </div>
                            </a>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold dark:text-gray-200">
                                    {video.title}
                                </h2>
                                <a
                                    href={video.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 dark:text-blue-400 inline-flex items-center mt-2"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Tonton Video
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThumbnailProfile;

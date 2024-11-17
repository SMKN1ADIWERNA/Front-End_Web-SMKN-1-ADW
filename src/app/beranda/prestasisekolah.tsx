import React from "react";
import { Award, Calendar } from "lucide-react";

const PrestasiSekolah: React.FC = () => {
    const prestasi = [
        {
            id: 1,
            image: "https://cdn.rri.co.id/berita/Bintuhan/o/1723293348500-medals-1622902_1280/8k27ydi18lyiw98.jpeg",
            title: "Juara 1 Lomba Debat",
            description:
                "Tim debat SMKN 1 Adiwerna berhasil meraih juara 1 pada lomba debat tingkat nasional.",
            author: "Budi Santoso",
            date: "12 November 2024",
            avatar: "https://cdn-icons-png.flaticon.com/512/8893/8893666.png",
        },
        {
            id: 2,
            image: "https://source.unsplash.com/400x300/?innovation,technology",
            title: "Inovasi Teknologi",
            description:
                "Siswa berhasil menciptakan aplikasi edukasi yang memenangkan penghargaan nasional.",
            author: "Siti Aisyah",
            date: "10 November 2024",
            avatar: "https://source.unsplash.com/100x100/?person,woman",
        },
        {
            id: 3,
            image: "https://source.unsplash.com/400x300/?science,education",
            title: "Juara Umum OSN",
            description:
                "SMKN 1 Adiwerna meraih juara umum Olimpiade Sains Nasional 2024.",
            author: "Ahmad Fauzan",
            date: "8 November 2024",
            avatar: "https://source.unsplash.com/100x100/?person,student",
        },
    ];

    return (
        <div className="relative dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
                {/* <h1 className="text-3xl font-bold text-center mb-8">Prestasi Sekolah</h1> */}
                <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                    Prestasi Sekolah
                </h1>
                <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                    Lihat Prestasi Sekolah Unggulan Kami
                </p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {prestasi.map((item) => (
                        <div
                            key={item.id}
                            className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg rounded overflow-hidden bg-white"
                        >
                            <div
                                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l"
                                style={{ backgroundImage: `url(${item.image})` }}
                                title={item.title}
                            ></div>
                            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal dark:bg-gray-900">
                                <div className="mb-4">
                                    <div className="flex items-center text-gray-600 text-sm mb-2">
                                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                                        Prestasi Unggulan
                                    </div>
                                    <div className="text-gray-900 font-bold text-xl mb-2">
                                        {item.title}
                                    </div>
                                    <p className="text-gray-700 text-base">{item.description}</p>
                                </div>
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 rounded-full mr-4"
                                        src={item.avatar}
                                        alt={`Avatar of ${item.author}`}
                                    />
                                    <div className="text-sm">
                                        <p className="text-gray-900 leading-none">{item.author}</p>
                                        <div className="flex items-center text-gray-600 text-xs">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrestasiSekolah;

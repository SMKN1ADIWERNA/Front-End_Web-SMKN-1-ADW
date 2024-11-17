import React from "react";

const Fasilitas: React.FC = () => {
    const facilities = [
        {
            id: 1,
            name: "Laboratorium Komputer",
            image: "https://source.unsplash.com/200x200/?computer,lab",
        },
        {
            id: 2,
            name: "Perpustakaan",
            image: "https://source.unsplash.com/200x200/?library,books",
        },
        {
            id: 3,
            name: "Ruang Praktik Kendaraan",
            image: "https://source.unsplash.com/200x200/?garage,car",
        },
        {
            id: 4,
            name: "Aula Serbaguna",
            image: "https://source.unsplash.com/200x200/?auditorium",
        },
        {
            id: 5,
            name: "Lapangan Olahraga",
            image: "https://source.unsplash.com/200x200/?sports,field",
        },
        {
            id: 6,
            name: "Studio Multimedia",
            image: "https://source.unsplash.com/200x200/?studio,multimedia",
        },
    ];

    return (
        <div className="relative dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-blue-600 mb-1 mt-3 md:text-left dark:text-blue-400">
                Fasilitas Sekolah
            </h1>
            <p className="text-lg text-gray-600 mb-12 md:text-left dark:text-gray-300">
                Lihat Fasilitas Sekolah Unggulan Kami
            </p>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {facilities.map((facility) => (
                    <div
                        key={facility.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                    >
                        <img
                            src={facility.image}
                            alt={facility.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-900 text-center">
                                {facility.name}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Fasilitas;
